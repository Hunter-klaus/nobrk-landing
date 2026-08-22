'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Question() {
  return (
    <section
      id="section-02"
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      aria-label="NOBRK 메시지"
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
              'linear-gradient(to bottom, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.80) 40%, rgba(10,10,10,0.92) 70%, rgba(245,240,235,0.97) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* 오렌지 강조 헤드라인 */}
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black text-amber-500 leading-[1.1] mb-16">
            당신은 생각보다<br />강합니다.
          </h2>
        </ScrollReveal>

        {/* 상황 라인 */}
        <div className="flex flex-col gap-8 mb-16">
          <ScrollReveal delay={0.15}>
            <p className="text-white/50 text-[clamp(1.2rem,3vw,2rem)] font-light leading-[1.5] pl-4 border-l border-white/10">
              넘어질 수 있습니다.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/50 text-[clamp(1.2rem,3vw,2rem)] font-light leading-[1.5] pl-4 border-l border-white/10">
              멈출 수도 있습니다.
            </p>
          </ScrollReveal>
        </div>

        {/* 전환 메시지 */}
        <ScrollReveal delay={0.4}>
          <p className="text-white text-[clamp(1.4rem,3.5vw,2.5rem)] font-black leading-[1.3] mb-16">
            하지만 다시 일어날 수 있습니다.
          </p>
        </ScrollReveal>

        {/* 마지막 — warm-white 배경 위 */}
        <ScrollReveal delay={0.55}>
          <p className="text-[#1A1A1A] text-[clamp(1.8rem,5vw,3.5rem)] font-black leading-[1.2]">
            그리고 한 걸음 더.
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}