'use client'

// NOBRK — SECTION 05: ONE MORE STEP
// 검은 배경
// FALL → REST → BREATHE → TRY AGAIN → GO ON
// 각 단어가 스크롤에 따라 순차적으로 나타납니다

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { word: 'FALL', ko: '넘어져도', opacity: 'text-white/25' },
  { word: 'REST', ko: '쉬어도', opacity: 'text-white/35' },
  { word: 'BREATHE', ko: '숨 고르고', opacity: 'text-white/50' },
  { word: 'TRY AGAIN', ko: '다시 시작해도', opacity: 'text-white/70' },
  { word: 'GO ON', ko: null, opacity: 'text-white', isFinal: true },
]

function StepWord({
  word,
  ko,
  opacity,
  isFinal,
  index,
}: {
  word: string
  ko: string | null
  opacity: string
  isFinal?: boolean
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${isFinal ? 'items-center' : 'items-start'} gap-2`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className={`font-black leading-none tracking-[-0.02em] ${opacity} ${
          isFinal
            ? 'text-[clamp(3rem,12vw,9rem)] text-white'
            : 'text-[clamp(2rem,7vw,5.5rem)]'
        }`}
      >
        {word}
      </span>
      {ko && (
        <span className="text-white/20 text-sm md:text-base font-light tracking-wider pl-1">
          {ko}
        </span>
      )}
    </motion.div>
  )
}

export default function OneMoreStep() {
  return (
    <section
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#1A1A1A] overflow-hidden"
      aria-label="다시 한 걸음"
    >
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-amber-800/[0.06] blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* 섹션 제목 */}
        <div className="mb-20 md:mb-28">
          <motion.p
            className="text-white/20 text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            One More Step
          </motion.p>
        </div>

        {/* 단어 시퀀스 */}
        <div className="flex flex-col gap-12 md:gap-16 mb-8">
          {steps.slice(0, -1).map((step, i) => (
            <div key={step.word}>
              <StepWord {...step} index={i} />
              {/* 화살표 구분자 */}
              <motion.div
                className="mt-6 text-white/10 text-sm font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                aria-hidden="true"
              >
                ↓
              </motion.div>
            </div>
          ))}
        </div>

        {/* 최종 GO ON */}
        <div className="flex flex-col items-start gap-2 mt-8">
          <StepWord {...steps[steps.length - 1]} index={4} />
          <motion.p
            className="text-amber-500/60 text-sm tracking-widest mt-4 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            WE MUST GO ON.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
