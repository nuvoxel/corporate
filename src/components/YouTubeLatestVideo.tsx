'use client'

import { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { Youtube as YoutubeIcon } from 'lucide-react'
import { YOUTUBE_CONFIG } from '@/config/youtube'

interface LatestVideo {
  id: string
  title: string
  thumbnail: string
  error?: string
}

export function YouTubeLatestVideo() {
  const [latestVideo, setLatestVideo] = useState<LatestVideo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await fetch('/api/youtube/latest')
        const data = await response.json()
        setLatestVideo(data)
      } catch (error) {
        console.error('Failed to fetch latest video:', error)
        setLatestVideo({
          id: '',
          title: 'Visit our YouTube channel',
          thumbnail: '',
          error: 'Failed to load video'
        })
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchLatestVideo()
  }, [])

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  }

  if (isLoading) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <YoutubeIcon className="w-12 h-12 text-gray-400" />
        </div>
      </div>
    )
  }

  if (!latestVideo || !latestVideo.id || latestVideo.error) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 group">
        <a 
          href={YOUTUBE_CONFIG.channelUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <YoutubeIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-xs text-white/80 bg-black/60 px-2 py-1 rounded">
              {latestVideo?.error === 'API configuration needed' 
                ? 'YouTube API key needed - Click to visit channel'
                : 'Visit our YouTube channel for the latest videos'}
            </p>
          </div>
        </a>
      </div>
    )
  }

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <YouTube 
        videoId={latestVideo.id} 
        opts={opts}
        className="w-full h-full"
        iframeClassName="w-full h-full"
      />
    </div>
  )
}