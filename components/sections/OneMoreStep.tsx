'use client'

// NOBRK — SECTION 05: ONE MORE STEP
// 시네마틱 배경 + ScrollReveal 부드러운 상향 슬라이드 모션 적용
// FALL → REST → BREATHE → TRY AGAIN → GO ON
// 한걸음.. 한걸음.. / 뚜벅...뚜벅... (넘어져도 한글 크기) + ONE MORE STEP.

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  { word: 'FALL', ko: '넘어져도', opacity: 'text-white/30' },
  { word: 'REST', ko: '쉬어도', opacity: 'text-white/45' },
  { word: 'BREATHE', ko: '숨 고르고', opacity: 'text-white/60' },
  { word: 'TRY AGAIN', ko: '다시 시작해도', opacity: 'text-white/80' },
  { word: 'GO ON', ko: null, opacity: 'text-white', isFinal: true },
]

export default function OneMoreStep() {
  return (
    <section
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden"
      aria-label="다시 한 걸음"
    >
      {/* ── 시네마틱 배경 이미지 ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/onemorestep_bg.jpg"
          alt=""
          fill
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(10,10,10,0.88)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.95) 80%)',
          }}
        />
      </div>

      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#E10600]/[0.04] blur-[140px]" />
      </div>

      {/* 메인 콘텐츠 컨테이너 */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 상단 라벨 */}
        <div className="mb-16 md:mb-24">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.35em] uppercase font-bold"
              style={{ color: '#E10600' }}
            >
              ONE MORE STEP
            </p>
          </ScrollReveal>
        </div>

        {/* 단어 시퀀스 (FALL → REST → BREATHE → TRY AGAIN) */}
        <div className="flex flex-col gap-12 md:gap-16 mb-8">
          {steps.slice(0, -1).map((step, i) => (
            <div key={step.word}>
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col items-start gap-2">
                  <span
                    className={`font-black leading-none tracking-[-0.02em] ${step.opacity} text-[clamp(2.4rem,8vw,5.5rem)]`}
                  >
                    {step.word}
                  </span>
                  {step.ko && (
                    <span className="text-white/40 text-sm md:text-base font-light tracking-wider pl-1">
                      {step.ko}
                    </span>
                  )}
                </div>
              </ScrollReveal>
              {/* 화살표 구분자 */}
              <ScrollReveal delay={0.2}>
                <div
                  className="mt-6 text-white/20 text-sm font-light"
                  aria-hidden="true"
                >
                  ↓
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* 최종 GO ON */}
        <div className="flex flex-col items-start gap-2 mt-8">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-start gap-2">
              <span className="font-black leading-none tracking-[-0.02em] text-white text-[clamp(3.2rem,12vw,9rem)]">
                GO ON
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-amber-500/80 text-sm tracking-widest mt-4 font-light mb-16">
              WE MUST GO ON.
            </p>
          </ScrollReveal>
        </div>

        {/* ── 한걸음.. 한걸음.. / 뚜벅...뚜벅... (넘어져도 한글 텍스트와 동일한 크기) + ONE MORE STEP. ── */}
        <div className="pt-12 border-t border-white/[0.08] mt-8">
          <ScrollReveal delay={0.1}>
            <div className="mb-4 flex flex-col gap-1.5 pl-1">
              <p className="text-white/50 text-sm md:text-base font-light tracking-wider">
                한걸음.. 한걸음..
              </p>
              <p className="text-white/35 text-sm md:text-base font-light tracking-wider">
                뚜벅...뚜벅...
              </p>
            </div>
          </ScrollReveal>

          {/* 시그니처 대형 RED 타이틀 ONE MORE STEP. */}
          <ScrollReveal delay={0.2}>
            <h2
              className="font-black leading-none tracking-tighter select-none"
              style={{
                fontSize: 'clamp(3rem, 11vw, 8.5rem)',
                color: '#E10600',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
              }}
            >
              ONE MORE STEP.
            </h2>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
