'use client'

// NOBRK — SECTION 01: HERO
// 첫 화면: 검은 배경, 브랜드명, 조용한 공감의 서두
// 다른 섹션은 절대 수정하지 않습니다.

import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = () => {
    const target = document.querySelector('#section-02')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden py-20"
      aria-label="NOBRK 히어로 섹션"
    >
      {/* 배경 앰비언트 라이트 — 극히 미세한 움직임 */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* 중앙 글로우 */}
        <div className="ambient-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-600/[0.04] blur-[120px]" />
        {/* 우하단 서브 글로우 */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-700/[0.02] blur-[100px]" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-3xl mx-auto">
        {/* 브랜드명 */}
        <motion.h1
          className="text-[clamp(4rem,18vw,14rem)] font-black text-white tracking-[0.05em] leading-none mb-10 select-none"
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.05em' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          NOBRK
        </motion.h1>

        {/* 공감 문장 (지쳤다 → 힘들다 → 누구나 그런 순간이 있다 → 괜찮다) */}
        <motion.div
          className="flex flex-col items-center gap-3 text-center mb-14"
          style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-white/90 text-lg md:text-2xl font-normal tracking-tight mb-2">
            요즘, 많이 지쳤나요?
          </p>
          <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
            열심히 살아왔는데 왜 이렇게 힘든지 모를 때가 있습니다.
          </p>
          <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
            아무것도 하기 싫은 날도, 그저 모든 걸 내려놓고 싶은 날도 있습니다.
          </p>
          <p className="text-amber-500/90 text-base md:text-lg font-light mt-4 tracking-wide">
            괜찮습니다. 누구에게나 그런 날은 있으니까요.
          </p>
        </motion.div>

        {/* CTA 버튼 */}
        <motion.button
          onClick={handleScroll}
          className="group flex flex-col items-center gap-3 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          aria-label="NOBRK 이야기 보기 — 아래로 스크롤"
        >
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase group-hover:text-white/70 transition-colors duration-500">
            NOBRK 이야기 보기
          </span>
          {/* 스크롤 인디케이터 */}
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.button>
      </div>

      {/* 하단 좌우 귀퉁이 텍스트 */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        aria-hidden="true"
      >
        <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase">
          NO BRAKE
        </p>
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-6 md:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        aria-hidden="true"
      >
        <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase">
          QUIET COURAGE
        </p>
      </motion.div>
    </section>
  )
}
