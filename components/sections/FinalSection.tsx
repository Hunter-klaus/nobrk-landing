'use client'

// NOBRK — SECTION 12: FINAL
// 마지막 섹션 — 검은 배경, 최소한의 요소
// "오늘도 여기까지 왔으니까. 내일, 한 걸음 더."

import { motion } from 'framer-motion'

export default function FinalSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 bg-[#0A0A0A] overflow-hidden"
      aria-label="NOBRK 마지막 메시지"
    >
      {/* 배경 앰비언트 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="ambient-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-700/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 text-center">
        {/* NOBRK */}
        <motion.h2
          className="text-[clamp(4rem,18vw,14rem)] font-black text-white tracking-[0.05em] leading-none mb-6 select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          NOBRK
        </motion.h2>

        {/* 슬로건 */}
        <motion.p
          className="text-white/40 text-sm md:text-base tracking-[0.5em] uppercase font-light mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          WE MUST GO ON.
        </motion.p>

        {/* 구분선 */}
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto mb-12"
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          aria-hidden="true"
        />

        {/* 마지막 메시지 */}
        <motion.p
          className="text-white/40 text-base md:text-lg font-light tracking-wide mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          오늘도 여기까지 왔으니까.
        </motion.p>

        <motion.p
          className="text-amber-500/70 text-sm md:text-base font-light tracking-[0.2em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          내일, 한 걸음 더.
        </motion.p>
      </div>
    </section>
  )
}
