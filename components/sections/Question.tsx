'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Question() {
  return (
    <section
      id="section-01"
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      aria-label="01. 질문으로 시작"
    >
      {/* 시네마틱 배경 — 비 맞은 도시 밤거리 */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/question_bg.jpg"
          alt=""
          fill
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.80) 40%, rgba(10,10,10,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6 font-light">
            01 / QUESTION
          </p>
          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black text-white leading-[1.15] mb-12">
            지금, 포기하고 싶나요?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-lg">
            누구에게나 그런 순간이 옵니다.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6 mb-16">
          <ScrollReveal delay={0.25}>
            <p className="text-white/40 text-base md:text-lg font-light pl-4 border-l border-white/15 leading-relaxed">
              아무리 노력해도<br />뜻대로 되지 않을 때.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p className="text-white/40 text-base md:text-lg font-light pl-4 border-l border-white/15 leading-relaxed">
              열심히 달려왔는데<br />나만 제자리인 것 같을 때.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <p className="text-white/40 text-base md:text-lg font-light pl-4 border-l border-white/15 leading-relaxed">
              실패하고,<br />무너지고,<br />다시 일어날 힘조차 없을 때.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.55}>
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm md:text-base font-light mb-4">
              그때 우리는 스스로에게 묻습니다.
            </p>
            <p className="text-amber-500 text-[clamp(1.4rem,3.5vw,2.5rem)] font-black leading-tight">
              "이제 그만해도 되지 않을까?"
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
