'use client'

// NOBRK — 플랫폼 링크 카드 컴포넌트
// 섹션 07에서 YouTube, Instagram, Threads 링크를 고유 브랜드 색상과 함께 표시합니다

import { Platform } from '@/lib/types'

function PlatformIcon({ icon }: { icon: string }) {
  if (icon === 'youtube') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
  if (icon === 'instagram') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  }
  if (icon === 'threads') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.706-.373-1.274-.75-1.713-.513-.578-1.287-.884-2.298-.907h-.085c-.87 0-2.044.244-2.981 1.696l-1.736-1.137C8.644 3.038 10.413 2.4 12.3 2.4h.106c3.338.074 5.325 2.075 5.325 5.461 0 .203-.009.408-.027.61.811.59 1.352 1.377 1.64 2.339.346 1.13.266 2.51-.235 3.643-1.52 3.443-5.05 5.547-9.923 5.547zm.5-9.912c-.34.019-.648.075-.933.17a3.77 3.77 0 0 0-1.315.79.95.95 0 0 0-.27.74c.022.392.25.823.794 1.176.45.29.997.406 1.574.375.895-.047 1.614-.389 2.137-1.015.505-.6.83-1.453.964-2.537a11.66 11.66 0 0 0-2.95.301z"/>
      </svg>
    )
  }
  return null
}

// 각 채널별 고유 브랜드 색상 매핑
const channelStyles: Record<
  string,
  {
    borderHover: string
    bgHover: string
    iconHover: string
    textHover: string
  }
> = {
  youtube: {
    borderHover: 'hover:border-[#FF0000]/40',
    bgHover: 'hover:bg-[#FF0000]/[0.03]',
    iconHover: 'group-hover:text-[#FF0000]',
    textHover: 'group-hover:text-[#FF0000]',
  },
  instagram: {
    borderHover: 'hover:border-[#E1306C]/40',
    bgHover: 'hover:bg-[#E1306C]/[0.03]',
    iconHover: 'group-hover:text-[#E1306C]',
    textHover: 'group-hover:text-[#E1306C]',
  },
  threads: {
    borderHover: 'hover:border-white/40',
    bgHover: 'hover:bg-white/[0.04]',
    iconHover: 'group-hover:text-white',
    textHover: 'group-hover:text-white',
  },
}

interface PlatformCardProps {
  platform: Platform
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const styles = channelStyles[platform.icon] || {
    borderHover: 'hover:border-white/25',
    bgHover: 'hover:bg-white/[0.05]',
    iconHover: 'group-hover:text-white',
    textHover: 'group-hover:text-white',
  }

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col gap-4 p-6 md:p-8 border border-white/10 bg-white/[0.02] transition-all duration-500 rounded-sm ${styles.borderHover} ${styles.bgHover}`}
      aria-label={`${platform.name} 보기 — 새 탭에서 열림`}
    >
      <div className={`text-white/45 ${styles.iconHover} transition-colors duration-300`}>
        <PlatformIcon icon={platform.icon} />
      </div>
      <div>
        <h3 className={`text-white font-semibold text-lg tracking-wide mb-1 transition-colors duration-300 ${styles.textHover}`}>
          {platform.name}
        </h3>
        <p className="text-white/50 text-sm">{platform.description}</p>
      </div>
      <div className={`flex items-center gap-2 text-white/40 ${styles.textHover} text-xs font-medium tracking-widest uppercase transition-colors duration-300 mt-auto`}>
        <span>{platform.name === 'YouTube Shorts' ? 'YouTube 보기' : platform.name === 'Instagram' ? 'Instagram 보기' : 'Threads 보기'}</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>
    </a>
  )
}
