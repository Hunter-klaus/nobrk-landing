'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = () => {
    const target = document.querySelector('#section-02')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden"
      aria-label="NOBRK 히어로"
    >
      {/* 시네마틱 배경 이미지 */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/hero_bg.jpg"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.60) 45%, rgba(10,10,10,0.20) 100%), ' +
              'linear-gradient(to right, rgba(10,10,10,0.50) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* 앰비언트 글로우 */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <div className="ambient-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-600/[0.03] blur-[120px]" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* NOBRK — 2pt 작게: clamp(4rem→3.5rem, 18vw→16vw, 14rem→12rem) */}
        <motion.h1
          className="text-[clamp(3.5rem,16vw,12rem)] font-black text-white tracking-[0.05em] leading-none mb-5 select-none"
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.05em' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          NOBRK
        </motion.h1>

        {/* WE MUST GO ON — 1~2pt 크게: text-sm md:text-base → text-base md:text-lg */}
        <motion.p
          className="text-white/65 text-base md:text-lg tracking-[0.4em] uppercase mb-10 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          WE MUST GO ON.
        </motion.p>

        {/* 강력한 동기부여 서브타이틀 */}
        <motion.p
          className="text-white/35 text-sm md:text-base font-light mb-16 max-w-sm leading-[1.9] tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          포기하고 싶은 그 순간이,<br />
          당신이 가장 강해지는 순간이다.
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={handleScroll}
          className="group flex flex-col items-center gap-3 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          aria-label="NOBRK 이야기 시작 - 아래로 스크롤"
        >
          <span className="text-white/35 text-xs tracking-[0.3em] uppercase group-hover:text-amber-500/70 transition-colors duration-500">
            NOBRK 이야기 시작
          </span>
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-white/25 to-transparent"
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.button>
      </div>

      {/* 하단 코너 텍스트 */}
      <motion.div className="absolute bottom-8 left-6 md:left-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} aria-hidden="true">
        <p className="text-white/12 text-[10px] tracking-[0.3em] uppercase">NO BRAKE</p>
      </motion.div>
      <motion.div className="absolute bottom-8 right-6 md:right-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} aria-hidden="true">
        <p className="text-white/12 text-[10px] tracking-[0.3em] uppercase">2026</p>
      </motion.div>
    </section>
  )
}