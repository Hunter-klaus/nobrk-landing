'use client'

// NOBRK — SECTION 12: FINAL
// 마지막 섹션 — 검은 배경, 최소한의 요소
// 모바일 완전 중앙 정렬 + 텍스트 잘림 방지

import { motion } from 'framer-motion'

export default function FinalSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-32 bg-[#0A0A0A] overflow-hidden"
      aria-label="NOBRK 마지막 메시지"
    >
      {/* 배경 앰비언트 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="ambient-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-700/[0.04] blur-[100px]" />
      </div>

      {/* 콘텐츠 래퍼 — w-full + px로 가로 100% 보장 */}
      <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center text-center">

        {/* NOBRK */}
        <motion.h2
          className="font-black text-white leading-none mb-6 select-none"
          style={{
            fontSize: 'clamp(3.5rem, 16vw, 13rem)',
            letterSpacing: '0.05em',
            wordBreak: 'keep-all',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          NOBRK
        </motion.h2>

        {/* 슬로건 — 모바일에서 잘리지 않도록 whitespace-nowrap 제거, 충분한 padding */}
        <motion.p
          className="text-white/40 text-xs md:text-sm tracking-[0.4em] uppercase font-light mb-16 w-full"
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
          className="text-white/40 text-base md:text-lg font-light tracking-wide mb-4 w-full"
          style={{ wordBreak: 'keep-all' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          오늘도 여기까지 왔으니까.
        </motion.p>

        <motion.p
          className="text-amber-500/70 text-sm md:text-base font-light tracking-[0.15em] w-full"
          style={{ wordBreak: 'keep-all' }}
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
