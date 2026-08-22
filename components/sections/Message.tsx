'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const messages = [
  '쓰러져도 괜찮다.',
  '쉬어도 괜찮다.',
  '다시 시작해도 괜찮다.',
]

export default function Message() {
  return (
    <section
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#F5F0EB] overflow-hidden"
      aria-label="NOBRK 메시지"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-16 md:gap-24 mb-24 md:mb-36">
          {messages.map((msg, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <p className="text-[clamp(1.8rem,5vw,4rem)] font-light text-[#1A1A1A] leading-[1.2] tracking-tight">
                {msg}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="border-t border-[#1A1A1A]/10 pt-16">
            <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black text-[#1A1A1A] leading-none tracking-[-0.02em]">
              WE MUST
              <br />
              GO ON.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
