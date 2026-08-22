'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  { word: 'FALL',      color: 'text-white/20' },
  { word: 'REST',      color: 'text-white/25' },
  { word: 'BREATHE',   color: 'text-white/32' },
  { word: 'TRY AGAIN', color: 'text-white/42' },
  { word: 'GO ON',     color: 'text-[#A52828]', isAccent: true },
]

interface StepProps { word: string; color: string; isAccent?: boolean; index: number }

function StepWord({ word, color, isAccent, index }: StepProps) {
  return (
    <ScrollReveal delay={index * 0.12}>
      <p className={`font-black tracking-[0.08em] leading-none select-none ${color} ${
        isAccent
          ? 'text-[clamp(3rem,8vw,6rem)]'
          : 'text-[clamp(2rem,5vw,4rem)]'
      }`}>
        {word}
      </p>
    </ScrollReveal>
  )
}

export default function OneMoreStep() {
  return (
    <section
      id="section-04"
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      aria-label="ONE MORE STEP"
    >
      {/* 시네마틱 배경 — 위로 향하는 계단 */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/onemorestep_bg.jpg"
          alt=""
          fill
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* 매우 어두운 오버레이 — 텍스트 완전 가독 */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(10,10,10,0.88)',
          }}
        />
        {/* 중앙에서 살짝 이미지 비쳐보임 */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 60%, rgba(10,10,10,0.50) 0%, rgba(10,10,10,0.92) 70%)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* 앰비언트 */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-amber-800/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-20 md:mb-28">
          <ScrollReveal>
            <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-4">One More Step</p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {steps.slice(0, -1).map((step, i) => (
            <div key={step.word}>
              <StepWord {...step} index={i} />
              <motion.div
                className="mt-5 text-white/10 text-sm font-light"
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

        {/* GO ON — RED accent, 더 크게 */}
        <div className="flex flex-col items-start gap-2 mt-10">
          <StepWord {...steps[steps.length - 1]} index={4} />
          <motion.p
            className="text-amber-500/55 text-sm tracking-widest mt-5 font-light"
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