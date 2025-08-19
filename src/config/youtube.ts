/**
 * YouTube Configuration
 */

export const YOUTUBE_CONFIG = {
  channelId: '@cryingcloud1', // CryingCloud channel handle
  channelUrl: 'https://youtube.com/@cryingcloud1',
  apiKey: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '', // Add your YouTube API key to .env.local
  maxResults: 1, // Number of latest videos to fetch
}

// Default video to show if API fails or no videos available
export const DEFAULT_VIDEO = {
  id: '', // Will be populated with actual video from channel
  title: 'CryingCloud - Cloud Intelligence',
  description: 'Insights and analysis on cloud computing',
}