'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const situationLines = [
  '일이 잘 풀리지 않을 때.',
  '실패했을 때.',
  '나만 뒤처진 것 같을 때.',
  '사랑하는 사람과 멀어졌을 때.',
  '아무것도 될 것 같지 않을 때.',
]

export default function Question() {
  return (
    <section
      id="section-02"
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      aria-label="우리는 왜 계속 가야 할까요"
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
        {/* 상단 완전 어둡게 → 중단 살짝 보이게 → 하단 warm-white로 전환 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.80) 40%, rgba(10,10,10,0.92) 70%, rgba(245,240,235,0.97) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 큰 질문 */}
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black text-white leading-[1.1] mb-12">
            우리는 왜
            <br />
            계속 가야 할까요?
          </h2>
        </ScrollReveal>

        {/* 서브 */}
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-lg">
            누구에게나
            <br />
            멈추고 싶은 순간이 있습니다.
          </p>
        </ScrollReveal>

        {/* 상황 라인 */}
        <div className="flex flex-col gap-6 mb-24">
          {situationLines.map((line, i) => (
            <ScrollReveal key={i} delay={0.1 * i + 0.3}>
              <p className="text-white/35 text-base md:text-lg font-light pl-4 border-l border-white/10">
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* 전환 — warm white 위 dark text */}
        <div className="mt-8">
          <ScrollReveal delay={0.1}>
            <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-black text-[#1A1A1A] leading-tight mb-12">
              그럴 때 꼭
              <br />
              강해져야 할까요?
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mb-8">
              <p className="text-amber-600 text-[clamp(1.2rem,3vw,2rem)] font-light tracking-wide">
                아니요.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <h3 className="text-[clamp(2rem,6vw,4rem)] font-black text-[#1A1A1A] leading-[1.1]">
              다시 한 걸음이면
              <br />
              됩니다.
            </h3>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}