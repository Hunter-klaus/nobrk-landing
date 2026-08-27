'use client'

// NOBRK — SECTION 02: PERSPECTIVE (QUESTION)
// 지친 마음에 전달하는 NOBRK식 '꾸준함'의 의미
// 첫 번째 섹션의 공감에서 '자신의 속도로 계속 나아감'으로 자연스럽게 연결됩니다.
// 다른 섹션은 절대 수정하지 않습니다.

import ScrollReveal from '@/components/ui/ScrollReveal'

const paceThoughts = [
  '하기 싫은 날에도 아주 조금,',
  '잘되지 않는 날에도 다시 한번,',
  '지쳐서 멈춘 날엔 잠시 쉬었다가.',
]

export default function Question() {
  return (
    <section
      id="section-02"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#F5F0EB] overflow-hidden"
      aria-label="NOBRK가 말하는 나아감의 의미"
    >
      <div className="max-w-4xl mx-auto" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
        {/* 헤딩 메인 메시지 */}
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,5.5vw,4.2rem)] font-black text-white leading-[1.2] mb-12">
            빠르게 갈 필요는
            <br />
            없습니다.
          </h2>
        </ScrollReveal>

        {/* 서브 메시지 */}
        <ScrollReveal delay={0.2}>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-lg">
            남들과 비교할 필요도 없습니다.
            <br />
            느려도 괜찮습니다.
          </p>
        </ScrollReveal>

        {/* 나아감의 담백한 모습들 */}
        <div className="flex flex-col gap-6 mb-24">
          {paceThoughts.map((line, i) => (
            <ScrollReveal key={i} delay={0.1 * i + 0.3}>
              <p className="text-white/45 text-base md:text-lg font-light pl-4 border-l border-white/10">
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* 전환 및 핵심 결론 */}
        <div className="mt-8">
          <ScrollReveal delay={0.1}>
            <p className="text-[#1A1A1A]/60 text-xs md:text-sm tracking-[0.25em] uppercase mb-4 font-medium">
              중요한 것은
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 className="text-[clamp(2rem,6vw,4rem)] font-black text-[#1A1A1A] leading-[1.15] mb-8">
              자신의 속도로
              <br />
              계속 가는 것입니다.
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-amber-600 text-base md:text-xl font-light tracking-wide">
              오늘도, 내일도, 다시.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
