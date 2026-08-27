'use client'

// NOBRK — SECTION 03: PERSPECTIVE / CONSISTENCY (PHILOSOPHY)
// NOBRK가 전하는 핵심 가치 — '꾸준함'과 매일 반복되는 작은 행동의 힘
// 첫 번째, 두 번째 섹션과 자연스럽게 이어집니다.
// 다른 섹션은 절대 수정하지 않습니다.

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Philosophy() {
  return (
    <section
      id="section-04"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden"
      aria-label="NOBRK 핵심 가치 — 꾸준함"
    >
      <div className="max-w-4xl mx-auto" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
        {/* 섹션 카테고리 라벨 */}
        <ScrollReveal>
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-8 font-light">
            NOBRK Core Value
          </p>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black text-white leading-tight mb-20">
            결국 중요한 건
            <br />
            꾸준함입니다.
          </h2>
        </ScrollReveal>

        {/* 핵심 명제 블록 */}
        <ScrollReveal delay={0.2}>
          <div className="relative py-12 md:py-16">
            {/* 좌측 포인트 라인 */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-600 to-transparent" aria-hidden="true" />
            <blockquote className="pl-6 md:pl-12">
              <p
                className="font-light text-white leading-[1.6]"
                style={{
                  fontSize: 'clamp(1.2rem, 3.8vw, 2.6rem)',
                }}
              >
                잘하는 것보다 <span className="font-bold text-amber-500">계속하는 것.</span>
                <br />
                빠르게 가는 것보다 <span className="font-bold text-white">멈추지 않는 것.</span>
              </p>
            </blockquote>
          </div>
        </ScrollReveal>

        {/* 세부 담백한 문장들 */}
        <div className="mt-16 flex flex-col gap-8 max-w-2xl">
          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-base md:text-lg font-light leading-[1.9]">
              매일 대단한 일을 해낼 필요는 없습니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/60 text-base md:text-lg font-light leading-[1.9]">
              하기 싫은 날에도 한 번 더,
              <br />
              지쳐서 멈춘 날에도 다시 시작하고,
              <br />
              자신의 속도로 매일 작은 걸음을 이어가는 것.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-white/80 text-base md:text-lg font-normal leading-[1.9] mt-2">
              결국 우리를 앞으로 데려가는 건
              <br />
              그 작은 행동들의 반복입니다.
            </p>
          </ScrollReveal>
        </div>

        {/* 마무리 문구 */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 md:mt-28 border-t border-white/[0.06] pt-12">
            <p className="text-white/40 text-sm md:text-base tracking-wider font-light">
              오늘도 하고, 내일도 하고, 다시.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
