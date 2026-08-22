'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Philosophy() {
  return (
    <section
      id="section-05"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-gradient-to-b from-[#0A0A0A] via-[#141414] to-[#0A0A0A] overflow-hidden"
      aria-label="05. NOBRK 철학"
    >
      <div className="max-w-4xl mx-auto">
        {/* NOBRK PHILOSOPHY — 볼드체, 2pt 더 크게, 오렌지색 */}
        <ScrollReveal>
          <p className="text-amber-500 text-sm md:text-base tracking-[0.35em] uppercase mb-12 font-black">
            NOBRK PHILOSOPHY
          </p>
        </ScrollReveal>

        {/* 조르바 인용문 */}
        <ScrollReveal delay={0.2}>
          <div className="relative py-8 md:py-12 mb-16">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-500 to-transparent" aria-hidden="true" />
            <blockquote className="pl-8 md:pl-12">
              <p className="text-[clamp(1.6rem,4vw,3.2rem)] font-black text-white leading-[1.35] mb-6">
                "나를 구하는 가장 빠른 길은<br />
                남을 구하려 애쓰는 것이다."
              </p>
              <cite className="block text-white/40 text-xs md:text-sm tracking-[0.2em] font-light not-italic text-right">
                『그리스인 조르바』에서...
              </cite>
            </blockquote>
          </div>
        </ScrollReveal>

        {/* 연대 철학 */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <ScrollReveal delay={0.35}>
            <p className="text-white/70 text-base md:text-xl font-light leading-[1.9]">
              우리는 혼자서만 앞으로 나아가는 것이 아닙니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <p className="text-white/50 text-base md:text-lg font-light leading-[1.9]">
              내가 다시 일어나는 힘이<br />
              누군가에게는 다시 일어날 이유가 될 수 있습니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.55}>
            <p className="text-white/50 text-base md:text-lg font-light leading-[1.9]">
              그리고 누군가의 한 걸음이<br />
              다시 나를 움직이게 합니다.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
