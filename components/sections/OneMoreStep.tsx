'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function OneMoreStep() {
  return (
    <section
      id="section-03"
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      aria-label="03. NOBRK 핵심"
    >
      {/* 시네마틱 배경 — 위로 향하는 계단 */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/onemorestep_bg.jpg"
          alt=""
          fill
          quality={80}
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
            background: 'radial-gradient(ellipse at 50% 50%, rgba(10,10,10,0.40) 0%, rgba(10,10,10,0.95) 75%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6 font-light">
            03 / CORE
          </p>
          <blockquote className="mb-14">
            <p className="text-[clamp(1.5rem,4vw,2.8rem)] font-light text-white leading-[1.35]">
              "당신에게 필요한 건<br />
              <span className="text-white/60">더 큰 힘이 아닐지도 모릅니다."</span>
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-base md:text-lg font-light mb-8">
            어쩌면 필요한 건
          </p>
          <h3 className="text-[clamp(2.5rem,7vw,5rem)] font-black text-amber-500 leading-none mb-12">
            딱 한 걸음.
          </h3>
        </ScrollReveal>

        <div className="flex flex-col gap-4 mb-14">
          <ScrollReveal delay={0.3}>
            <p className="text-white/60 text-base md:text-lg font-light pl-4 border-l border-white/20">
              오늘 해야 할 일 하나.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-white/60 text-base md:text-lg font-light pl-4 border-l border-white/20">
              오늘 지켜야 할 약속 하나.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-white/60 text-base md:text-lg font-light pl-4 border-l border-white/20">
              오늘 포기하지 않는 것 하나.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="pt-8">
            <p className="text-[#A52828] text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-[0.08em] leading-none">
              ONE MORE STEP.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
