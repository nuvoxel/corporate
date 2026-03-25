# Stage 1: Install dependencies
FROM node:22-slim AS deps
RUN corepack enable
WORKDIR /app

COPY .yarnrc.yml yarn.lock package.json ./
RUN yarn install --immutable

# Stage 2: Build application
FROM node:22-slim AS builder
RUN corepack enable
WORKDIR /app

COPY --from=deps /app/package.json /app/yarn.lock /app/.yarnrc.yml ./
COPY --from=deps /app/.yarn ./.yarn
COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npx next build

# Stage 3: Production runtime
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
