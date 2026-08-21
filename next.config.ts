import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 이미지 최적화 설정
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // 실험적 기능
  experimental: {
    // 미래 기능 추가 시 여기에 설정
  },
}

export default nextConfig
