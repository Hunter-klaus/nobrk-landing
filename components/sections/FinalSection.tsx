'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const reasons = [
  '완벽하지 않아도.',
  '늦어도.',
  '두려워도.',
  '넘어져도.',
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 그래서 오늘도 갑니다 */}
        <ScrollReveal>
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black text-white leading-tight mb-12">
            그래서 오늘도 갑니다.
          </h2>
        </ScrollReveal>

        {/* 4가지 조건 */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <span className="text-white/50 text-base md:text-xl font-light tracking-wide px-4 py-2 border border-white/10 rounded-full">
                {reason}
              </span>
            </ScrollReveal>
          ))}
        </div>

        {/* 다시 일어나 한 걸음 더 */}
        <ScrollReveal delay={0.6}>
          <p className="text-white/70 text-lg md:text-2xl font-light mb-8">
            다시 일어나 한 걸음 더.
          </p>
        </ScrollReveal>

        {/* WE MUST GO ON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 mb-16"
        >
          <p className="text-amber-500 text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[0.1em] uppercase leading-none">
            WE MUST GO ON.
          </p>
        </motion.div>

        {/* 구분선 */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto" aria-hidden="true" />
      </div>
    </section>
  )
}
