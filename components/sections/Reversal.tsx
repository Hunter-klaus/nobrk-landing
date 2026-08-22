'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Reversal() {
  return (
    <section
      id="section-02"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-gradient-to-b from-[#0A0A0A] via-[#141414] to-[#0A0A0A] overflow-hidden"
      aria-label="02. 반전"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-8 font-light">
            02 / REVERSAL
          </p>
          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black text-white leading-[1.15] mb-12">
            그래도 괜찮습니다.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-6 mb-16">
          <ScrollReveal delay={0.15}>
            <p className="text-white/60 text-lg md:text-2xl font-light">
              강할 필요 없습니다.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/60 text-lg md:text-2xl font-light">
              괜찮은 척할 필요도 없습니다.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p className="text-white/60 text-lg md:text-2xl font-light">
              잠시 멈춰도 됩니다.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <p className="text-white/60 text-lg md:text-2xl font-light">
              넘어져도 됩니다.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.55}>
          <div className="pt-12 border-t border-white/10">
            <p className="text-white/40 text-base md:text-lg font-light mb-3">
              하지만,
            </p>
            <p className="text-amber-500 text-[clamp(2rem,5vw,3.8rem)] font-black leading-tight">
              끝내지는 마세요.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
