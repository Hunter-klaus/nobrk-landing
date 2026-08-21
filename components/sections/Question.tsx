'use client'

// NOBRK — SECTION 02: QUESTION
// 검은 배경에서 따뜻한 흰색으로 전환
// 공감 메시지를 순차적으로 보여줍니다

import ScrollReveal from '@/components/ui/ScrollReveal'

const situationLines = [
  '일이 잘 풀리지 않을 때.',
  '사랑하는 사람과 멀어졌을 때.',
  '오랫동안 준비했던 일이 실패했을 때.',
  '나만 뒤처진 것 같을 때.',
  '아무도 내 마음을 알아주지 않을 때.',
]

export default function Question() {
  return (
    <section
      id="section-02"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#F5F0EB] overflow-hidden"
      aria-label="우리는 왜 계속 가야 할까요"
    >
      <div className="max-w-4xl mx-auto">
        {/* 메인 질문 */}
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black text-white leading-[1.1] mb-12">
            우리는 왜
            <br />
            계속 가야 할까요?
          </h2>
        </ScrollReveal>

        {/* 도입부 */}
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-lg">
            누구에게나
            <br />
            멈추고 싶은 순간이 있습니다.
          </p>
        </ScrollReveal>

        {/* 상황별 문장들 */}
        <div className="flex flex-col gap-6 mb-24">
          {situationLines.map((line, i) => (
            <ScrollReveal key={i} delay={0.1 * i + 0.3}>
              <p className="text-white/40 text-base md:text-lg font-light pl-4 border-l border-white/10">
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* 전환 구간 — 따뜻한 배경으로 넘어가는 지점 */}
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
