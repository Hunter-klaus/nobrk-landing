'use client'

// NOBRK — SECTION 04: PHILOSOPHY
// 브랜드 핵심 철학 — "나를 구하는 가장 빠른 길"
// 어두운 톤앤매너 유지

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Philosophy() {
  return (
    <section
      id="section-04"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden"
      aria-label="NOBRK 브랜드 철학"
    >
      <div className="max-w-4xl mx-auto">
        {/* 섹션 제목 */}
        <ScrollReveal>
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-8 font-light">
            NOBRK Philosophy
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white leading-tight mb-20">
            우리는 혼자 가는
            <br />
            브랜드가 아닙니다.
          </h2>
        </ScrollReveal>

        {/* 핵심 철학 문장 */}
        <ScrollReveal delay={0.2}>
          <div className="relative py-12 md:py-16">
            {/* 좌측 포인트 라인 */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-600 to-transparent" aria-hidden="true" />
            <blockquote className="pl-6 md:pl-12">
              <p
                className="font-light text-white leading-[1.5]"
                style={{
                  fontSize: 'clamp(1.15rem, 3.5vw, 2.8rem)',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                }}
              >
                나를 구하는 가장 빠른 길은
                <br />
                <span className="font-black text-amber-500">남을 구하려 애쓰는 길이다.</span>
              </p>
              <p className="text-white/40 text-xs md:text-sm font-light mt-4 tracking-wider">
                - 『그리스인 조르바』에서...
              </p>
            </blockquote>
          </div>
        </ScrollReveal>

        {/* 설명 단락들 */}
        <div className="mt-16 flex flex-col gap-8 max-w-2xl">
          <ScrollReveal delay={0.1}>
            <p className="text-white/50 text-base md:text-lg font-light leading-[1.9]">
              우리는 때때로
              <br />
              누군가의 말 한마디 때문에 다시 일어납니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-base md:text-lg font-light leading-[1.9]">
              누군가의 작은 도움 때문에
              <br />
              하루를 버틸 수 있습니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-white/50 text-base md:text-lg font-light leading-[1.9]">
              그리고 언젠가는
              <br />
              우리가 누군가에게
              <br />
              그런 사람이 될 수도 있습니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-white/70 text-base md:text-lg font-light leading-[1.9]">
              NOBRK는 그 연결을 믿습니다.
            </p>
          </ScrollReveal>
        </div>

        {/* 마무리 */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 md:mt-28">
            <p className="text-white/20 text-sm tracking-[0.4em] uppercase font-light">
              WE MUST GO ON.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
