'use client'

// NOBRK — SECTION 07: CONTENT PLATFORM
// "우리는 계속 이야기합니다."
// YouTube, Instagram, Threads 링크

import ScrollReveal from '@/components/ui/ScrollReveal'
import PlatformCard from '@/components/ui/PlatformCard'
import { platforms } from '@/data/platforms'

export default function ContentPlatform() {
  return (
    <section
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#111111] overflow-hidden"
      aria-label="NOBRK 콘텐츠 플랫폼"
    >
      {/* 배경 라인 */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="mb-16 md:mb-20">
          <ScrollReveal>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-5 font-light">
              NOBRK Channels
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-tight mb-4">
              우리는 계속
              <br />
              이야기합니다.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/40 text-base md:text-lg font-light max-w-md leading-relaxed">
              YouTube Shorts, Instagram, Threads에서
              <br />
              매일 한 걸음의 이야기를 전합니다.
            </p>
          </ScrollReveal>
        </div>

        {/* 플랫폼 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {platforms.map((platform, i) => (
            <ScrollReveal key={platform.id} delay={0.1 * i}>
              <PlatformCard platform={platform} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 배경 라인 */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
    </section>
  )
}
