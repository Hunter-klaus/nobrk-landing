'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const reasons = [
  '완벽하지 않아도...',
  '늦어도...',
  '두려워도...',
  '넘어져도...',
]

export default function FinalSection() {
  return (
    <section
      id="section-06"
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 bg-[#0A0A0A] overflow-hidden"
      aria-label="06. NOBRK 결론"
    >
      {/* 시네마틱 배경 */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/final_bg.jpg"
          alt=""
          fill
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.60) 50%, rgba(10,10,10,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* 아직 끝나지 않았으니까요. */}
        <ScrollReveal>
          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black text-white leading-tight mb-14">
            아직 끝나지 않았으니까요.
          </h2>
        </ScrollReveal>

        {/* 4가지 조건 — 테두리 없이 점점점으로 감성적인 연결 */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <span className="text-white/45 text-base md:text-xl font-light tracking-widest">
                {reason}
              </span>
            </ScrollReveal>
          ))}
        </div>

        {/* 다시 일어나 한 걸음 더 */}
        <ScrollReveal delay={0.6}>
          <p className="text-white/70 text-lg md:text-2xl font-light mb-10 tracking-wide">
            다시 일어나 한 걸음 더.
          </p>
        </ScrollReveal>

        {/* WE MUST GO ON. — 줄바꿈 없이 한 줄로 유지 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 mb-16"
        >
          <p className="text-amber-500 text-[clamp(2rem,6.5vw,5.5rem)] font-black tracking-[0.08em] uppercase leading-none whitespace-nowrap">
            WE MUST GO ON.
          </p>
        </motion.div>

        {/* 구분선 */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto" aria-hidden="true" />
      </div>
    </section>
  )
}
