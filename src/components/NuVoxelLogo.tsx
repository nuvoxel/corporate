'use client'

import Image from 'next/image'

interface NuVoxelLogoProps {
  className?: string
  variant?: 'complete' | 'symbol' | 'wordmark'
}

export function NuVoxelLogo({ className = '', variant = 'complete' }: NuVoxelLogoProps) {
  const logoMap = {
    complete: '/nuvoxel-logo.svg',
    symbol: '/nuvoxel-symbol.svg',
    wordmark: '/nuvoxel-wordmark.svg'
  }

  return (
    <Image
      src={logoMap[variant]}
      alt="NuVoxel"
      width={200}
      height={60}
      className={className}
    />
  )
}