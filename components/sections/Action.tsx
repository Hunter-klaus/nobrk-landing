'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Action() {
  return (
    <section
      id="section-04"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden"
      aria-label="04. 행동으로 전환"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6 font-light">
            04 / ACTION
          </p>
          <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-light text-white leading-[1.25] mb-16">
            인생은 한 번의 결심으로<br />
            <span className="font-black">바뀌지 않습니다.</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-6 mb-16">
          <ScrollReveal delay={0.15}>
            <p className="text-white/70 text-xl md:text-3xl font-light">
              한 걸음.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/70 text-xl md:text-3xl font-light">
              그리고 또 한 걸음.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p className="text-white/50 text-lg md:text-2xl font-light">
              어제보다 조금 더.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <p className="text-white/50 text-lg md:text-2xl font-light">
              넘어지면 다시.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.55}>
            <p className="text-white/50 text-lg md:text-2xl font-light">
              늦었다면 다시 시작하면 됩니다.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.65}>
          <div className="pt-12 border-t border-white/10">
            <p className="text-[clamp(1.6rem,4vw,3rem)] font-black text-white leading-tight">
              계속하는 사람이<br />
              <span className="text-amber-500">결국 더 멀리 갑니다.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
