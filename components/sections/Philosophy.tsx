'use client'

// NOBRK - SECTION 03: PHILOSOPHY
// Quote: 나를 구하는 가장 빠른 길은 남을 구하려고 애쓰는 것이다.
// Source: 그리스인 조르바

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Philosophy() {
  return (
    <section
      id="section-03"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-gradient-to-b from-[#F5F0EB] to-[#1A1A1A] overflow-hidden"
      aria-label="NOBRK 브랜드 철학"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="text-[#888888] text-xs tracking-[0.3em] uppercase mb-16 font-light">
            NOBRK Philosophy
          </p>
        </ScrollReveal>

        {/* Main quote */}
        <ScrollReveal delay={0.2}>
          <div className="relative py-12 md:py-16">
            {/* Left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-600 to-transparent" aria-hidden="true" />
            <blockquote className="pl-8 md:pl-12">
              <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-black text-[#1A1A1A] leading-[1.35]">
                "나를 구하는 가장 빠른 길은
                <br />
                남을 구하려고 애쓰는 것이다."
              </p>
              {/* Source — very small, restrained */}
              <cite className="block mt-6 text-[#888888] text-xs tracking-[0.2em] font-light not-italic">
                『그리스인 조르바』에서
              </cite>
            </blockquote>
          </div>
        </ScrollReveal>

        {/* Supporting text */}
        <ScrollReveal delay={0.3}>
          <p className="mt-16 text-white/50 text-base md:text-lg font-light leading-[1.9] max-w-2xl">
            우리는 혼자 계속 가는 것이 아니라
            <br />
            서로의 한 걸음을 도우며 나아갑니다.
          </p>
        </ScrollReveal>

        {/* WE MUST GO ON */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 md:mt-28">
            <p className="text-white/20 text-sm tracking-[0.4em] uppercase font-light">
              WE MUST GO ON.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
