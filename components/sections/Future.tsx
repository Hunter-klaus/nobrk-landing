'use client'

// NOBRK — SECTION 11: FUTURE
// "이것은 시작일 뿐입니다."
// NOBRK의 비전과 확장 방향

import ScrollReveal from '@/components/ui/ScrollReveal'

const futureItems = [
  'STORIES',
  'CONTENT',
  'COMMUNITY',
  'OBJECTS',
  'DRINKS',
  'LIFESTYLE',
]

export default function Future() {
  return (
    <section
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#111111] overflow-hidden"
      aria-label="NOBRK의 미래"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="mb-20 md:mb-28">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-tight mb-8">
              이것은
              <br />
              시작일 뿐입니다.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-5 max-w-xl">
            <ScrollReveal delay={0.1}>
              <p className="text-white/40 text-base font-light leading-[2]">
                이야기에서 시작해서
                <br />
                콘텐츠가 되고,
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-white/40 text-base font-light leading-[2]">
                콘텐츠에서 시작해서
                <br />
                사람과 연결되고,
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-white/60 text-base font-light leading-[2]">
                언젠가는
                <br />
                우리의 일상 속 작은 물건과
                <br />
                경험이 될 것입니다.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 미래 키워드들 */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {futureItems.map((item, i) => (
              <span
                key={item}
                className="text-white/10 text-xs md:text-sm tracking-[0.3em] uppercase font-light"
                style={{
                  opacity: 0.1 + (i / futureItems.length) * 0.3,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
