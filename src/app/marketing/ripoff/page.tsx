'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, AlertTriangle, Eye, Lock, TrendingDown, Calculator, Search, Youtube } from 'lucide-react'
import { HydrogenLogo } from '@/components/HydrogenLogo'

export default function RipoffPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-red-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div className="text-center lg:text-left text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  They&apos;re Ripping You Off.
                  <br />
                  <span className="text-orange-400">And They Know It.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Ever notice how hard cloud providers make it to compare prices? Or how you mysteriously end up 
                  locked into their ecosystem without considering alternatives? That&apos;s not an accident.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Link href="/dashboard">
                      See The Real Prices
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white">
                    <Link href="#truth">
                      Learn The Truth
                    </Link>
                  </Button>
                </div>
                <div className="mt-6">
                  <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                    <Link href="https://www.youtube.com/@cryingcloud1" target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-5 w-5" />
                      Explore the Problem
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Alert Triangle Graphic */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
                </div>
                <div className="relative flex items-center justify-center">
                  <AlertTriangle className="w-64 h-64 text-orange-400 opacity-90" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Tricks Section */}
      <section id="truth" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Their Dirty Little Secrets
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle>Hidden Pricing Complexity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AWS has over <strong>574,000 different price points</strong>. Azure? Even more. 
                    They bury the real costs in:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Data egress fees (the real money maker)</li>
                    <li>• API call charges that add up fast</li>
                    <li>• &quot;Free tier&quot; traps that expire silently</li>
                    <li>• Support costs that aren&apos;t optional at scale</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Eye className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle>Deliberate Comparison Barriers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Try comparing an AWS EC2 instance to an Azure VM. They make it nearly impossible:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Different naming (t3.medium vs D2s_v3)</li>
                    <li>• Incomparable performance metrics</li>
                    <li>• Hidden resource limits and throttling</li>
                    <li>• &quot;Equivalent&quot; instances that aren&apos;t</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Lock-in Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Ecosystem Trap
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 1: The Free Credits</h3>
                  <p className="text-muted-foreground">
                    &quot;Here&apos;s $300 in free credits!&quot; Sounds great, right? But those credits only work 
                    for <em>their</em> services. You start building, and suddenly...
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 2: The Proprietary Services</h3>
                  <p className="text-muted-foreground">
                    You use their managed database, their AI services, their special networking. 
                    Each one locks you in a little more. Moving becomes &quot;too expensive.&quot;
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 3: The Price Hikes</h3>
                  <p className="text-muted-foreground">
                    Once you&apos;re locked in? Prices go up. &quot;Deprecated&quot; tier? 3x more expensive. 
                    Need to move? That&apos;ll be thousands in egress fees. Checkmate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Numbers Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              The Numbers They Don&apos;t Want You to See
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-5xl font-bold text-orange-400 mb-2">73%</div>
                <p className="text-gray-300">
                  Of companies overpay for cloud services due to pricing complexity
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-400 mb-2">$178B</div>
                <p className="text-gray-300">
                  Wasted on cloud services globally in 2024 alone
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-400 mb-2">5.2x</div>
                <p className="text-gray-300">
                  Average markup on data transfer compared to actual costs
                </p>
              </div>
            </div>
            
            {/* Record Profits Section */}
            <Card className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-orange-700 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Record Profits in a &quot;Commodity&quot; Business</h3>
                <p className="text-lg text-gray-200 mb-6">
                  Hosting has always been a thin-margin business. Hardware depreciates. Competition drives prices down. 
                  Yet somehow cloud providers are posting <strong className="text-white">30-40% profit margins</strong> - 
                  quarter after quarter, year after year.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="bg-gray-800/50 p-4 rounded">
                    <div className="text-sm text-gray-400 mb-1">AWS (Q3 2024)</div>
                    <div className="text-2xl font-bold text-orange-400">$9.1B</div>
                    <div className="text-sm text-gray-300">Operating Income</div>
                    <div className="text-xs text-orange-300 mt-1">38% margin</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded">
                    <div className="text-sm text-gray-400 mb-1">Azure (FY 2024)</div>
                    <div className="text-2xl font-bold text-orange-400">$96B</div>
                    <div className="text-sm text-gray-300">Annual Revenue</div>
                    <div className="text-xs text-orange-300 mt-1">42% growth YoY</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded">
                    <div className="text-sm text-gray-400 mb-1">GCP (2024)</div>
                    <div className="text-2xl font-bold text-orange-400">$11.4B</div>
                    <div className="text-sm text-gray-300">Quarterly Revenue</div>
                    <div className="text-xs text-orange-300 mt-1">35% growth YoY</div>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-4">
                  Traditional hosting: 5-10% margins. Cloud providers: 30-40% margins. 
                  <span className="text-orange-400 font-semibold"> Where do you think that extra profit comes from?</span>
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <p className="text-xl text-gray-300">
                  <strong className="text-white">&quot;The house always wins&quot;</strong> - That&apos;s their 
                  business model. Complex pricing ensures you&apos;ll always pay more than you planned.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Broken Promise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Broken Promise of &quot;Economies of Scale&quot;
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What They Sold You</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    &quot;Move to the cloud! We have massive economies of scale. You&apos;ll only pay for what you use. 
                    No more buying servers that sit idle at 10% utilization.&quot;
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Shared infrastructure = lower costs</li>
                    <li>• Pay only for actual usage</li>
                    <li>• No wasted capacity</li>
                    <li>• Benefit from their buying power</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">The Reality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Those economies of scale? They kept them. You&apos;re paying 10x what the hardware costs, 
                    with margins that would make a luxury brand blush.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You pay for their 40% profit margins</li>
                    <li>• &quot;On-demand&quot; pricing = maximum extraction</li>
                    <li>• Reserved instances? Still 3x overpriced</li>
                    <li>• The &quot;cloud tax&quot; on everything</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Hidden Gems Section */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">But Here&apos;s the Secret...</h3>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Within every cloud provider are hidden gems - services that somehow escaped the &quot;cloud tax.&quot; 
                  Maybe they&apos;re loss leaders. Maybe they&apos;re trying to compete. Maybe someone forgot to jack up the price.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Example: AWS</div>
                    <p className="text-sm text-muted-foreground">
                      Graviton instances - 40% cheaper than Intel, often faster. Why? They&apos;re pushing adoption.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Example: Azure</div>
                    <p className="text-sm text-muted-foreground">
                      Spot instances in certain regions - 90% off. They need to fill capacity.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Example: GCP</div>
                    <p className="text-sm text-muted-foreground">
                      Preemptible GPUs - 70% discount. Competing with AWS for AI workloads.
                    </p>
                  </div>
                </div>
                <p className="text-center mt-6 font-semibold text-blue-600 dark:text-blue-400">
                  We help you find these hidden gems across ALL providers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <HydrogenLogo className="h-16 w-auto mx-auto mb-4" animated={false} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fight Back With Transparency
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hydrogen cuts through their BS. Real prices, real comparisons, real savings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Apples-to-Apples Comparison</h3>
                <p className="text-muted-foreground">
                  Compare equivalent instances across all providers. See the REAL performance 
                  per dollar, not marketing fluff.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hidden Cost Detection</h3>
                <p className="text-muted-foreground">
                  We expose ALL the costs - egress, API calls, support, everything. 
                  No more surprise bills.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hidden Gem Discovery</h3>
                <p className="text-muted-foreground">
                  Find those services without the cloud tax. Same provider, fraction of the cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Real Examples of the Ripoff
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>The &quot;Equivalent&quot; Instance Scam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AWS m5.xlarge: 4 vCPUs, 16 GB RAM - <strong>$0.192/hour</strong><br />
                    Hetzner CCX31: 8 vCPUs, 32 GB RAM - <strong>$0.089/hour</strong>
                  </p>
                  <p className="text-muted-foreground">
                    That&apos;s 2x the resources for less than half the price. But good luck finding 
                    this comparison on AWS&apos;s site.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Egress Fee Trap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Storing 10TB in S3: ~$230/month<br />
                    Moving that 10TB out: <strong>$900</strong> (one time)
                  </p>
                  <p className="text-muted-foreground">
                    They charge you 4 months of storage costs just to access your own data. 
                    It&apos;s highway robbery, plain and simple.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Support Tax</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AWS Business Support: Minimum $100/month or 10% of your bill<br />
                    Spending $50k/month? That&apos;s <strong>$5,000/month for support</strong>
                  </p>
                  <p className="text-muted-foreground">
                    For &quot;support&quot; that often just links you to documentation you could find yourself.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Getting Ripped Off
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take back control with Hydrogen. See real prices, find better alternatives, 
            and save thousands on your cloud bill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <Link href="/dashboard">
                Start Saving Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white" asChild>
              <Link href="/pricing">
                View Our Transparent Pricing
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-80">
            No hidden fees. No lock-in. Just honest cloud intelligence.
          </p>
        </div>
      </section>
    </>
  )
}