'use client'

// NOBRK — 플랫폼 링크 카드 컴포넌트
// 섹션 07에서 YouTube, Instagram, Threads의 공식 오리지널 로고 및 브랜드 컬러를 표시합니다

import { Platform } from '@/lib/types'

// 플랫폼별 오리지널 브랜드 로고 SVG (공식 컬러 적용)
function PlatformIcon({ icon }: { icon: string }) {
  if (icon === 'youtube') {
    return (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* YouTube 공식 레드 라운드 뱃지 */}
        <rect width="28" height="28" rx="7" fill="#FF0000" />
        {/* 화이트 플레이 트라이앵글 */}
        <path d="M19 14L11 9.5V18.5L19 14Z" fill="#FFFFFF" />
      </svg>
    )
  }
  if (icon === 'instagram') {
    return (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <defs>
          {/* Instagram 공식 선셋 그라디언트 */}
          <radialGradient id="ig-original-radial" cx="30%" cy="107%" r="130%" fx="30%" fy="107%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        {/* 그라디언트 스퀘어 */}
        <rect width="28" height="28" rx="7" fill="url(#ig-original-radial)" />
        {/* 화이트 카메라 외곽선 */}
        <rect x="5.5" y="5.5" width="17" height="17" rx="4.5" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        {/* 화이트 렌즈 */}
        <circle cx="14" cy="14" r="4.2" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        {/* 화이트 플래시 도트 */}
        <circle cx="19.2" cy="8.8" r="1.1" fill="#FFFFFF" />
      </svg>
    )
  }
  if (icon === 'threads') {
    return (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Threads 공식 다크 뱃지 */}
        <rect width="28" height="28" rx="7" fill="#181818" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        {/* Threads 화이트 @ 로고 */}
        <path
          d="M14.22 22h-.01c-3.15-.02-5.57-1.06-7.2-3.09-1.46-1.81-2.21-4.31-2.24-7.44v-.01c.03-3.14.78-5.64 2.22-7.44C8.65 2 11.07.97 14.21.95h.01c2.41.02 4.42.63 5.99 1.84 1.47 1.13 2.51 2.75 3.08 4.79l-1.8.5c-.97-3.48-3.42-5.25-7.29-5.28-2.56.02-4.49.82-5.74 2.38-1.18 1.48-1.79 3.59-1.81 6.3.02 2.71.63 4.82 1.8 6.29 1.25 1.56 3.18 2.37 5.74 2.38 2.3-.02 3.82-.55 5.09-1.79 1.44-1.41 1.42-3.15.96-4.21-.27-.62-.77-1.14-1.43-1.54-.17 1.19-.55 2.15-1.13 2.87-.78.97-1.88 1.49-3.27 1.57-1.05.06-2.07-.19-2.86-.7-.93-.6-1.48-1.53-1.54-2.6-.06-1.04.36-2 1.17-2.7.77-.67 1.86-1.06 3.14-1.13a12.1 12.1 0 0 1 2.65.12c-.11-.62-.33-1.12-.66-1.5-.45-.51-1.12-.78-2.02-.8h-.07c-.76 0-1.8.21-2.61 1.49l-1.52-1C8.67 3.61 10.22 3.05 11.88 3.05h.1c2.93.06 4.67 1.82 4.67 4.79 0 .18-.01.36-.02.53.71.52 1.19 1.21 1.44 2.05.3.99.23 2.2-.21 3.2-1.33 3.02-4.43 4.86-8.71 4.86zm.44-8.7c-.3.02-.57.07-.82.15a3.3 3.3 0 0 0-1.15.69.83.83 0 0 0-.24.65c.02.34.22.72.7.99.39.25.87.35 1.38.33.79-.04 1.42-.34 1.87-.89.44-.53.73-1.28.85-2.23a10.2 10.2 0 0 0-2.59.31z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }
  return null
}

// 각 채널별 고유 브랜드 색상 매핑 (호버 인터랙션)
const channelStyles: Record<
  string,
  {
    borderHover: string
    bgHover: string
    textHover: string
    shadowHover: string
  }
> = {
  youtube: {
    borderHover: 'hover:border-[#FF0000]/50',
    bgHover: 'hover:bg-[#FF0000]/[0.03]',
    textHover: 'group-hover:text-[#FF0000]',
    shadowHover: 'group-hover:shadow-[0_0_30px_rgba(255,0,0,0.12)]',
  },
  instagram: {
    borderHover: 'hover:border-[#E1306C]/50',
    bgHover: 'hover:bg-[#E1306C]/[0.03]',
    textHover: 'group-hover:text-[#E1306C]',
    shadowHover: 'group-hover:shadow-[0_0_30px_rgba(225,48,108,0.12)]',
  },
  threads: {
    borderHover: 'hover:border-white/50',
    bgHover: 'hover:bg-white/[0.04]',
    textHover: 'group-hover:text-white',
    shadowHover: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]',
  },
}

interface PlatformCardProps {
  platform: Platform
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const styles = channelStyles[platform.icon] || {
    borderHover: 'hover:border-white/25',
    bgHover: 'hover:bg-white/[0.05]',
    textHover: 'group-hover:text-white',
    shadowHover: '',
  }

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col gap-4 p-6 md:p-8 border border-white/10 bg-white/[0.02] transition-all duration-500 rounded-sm ${styles.borderHover} ${styles.bgHover} ${styles.shadowHover}`}
      aria-label={`${platform.name} 보기 — 새 탭에서 열림`}
    >
      {/* 공식 오리지널 로고 아이콘 — hover시 살짝 확대 애니메이션 */}
      <div className="transition-transform duration-300 group-hover:scale-110 shrink-0">
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
