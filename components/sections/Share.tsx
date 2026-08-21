'use client'

// NOBRK — SECTION 10: SHARE
// "혹시 지금 힘든 사람이 있다면, 이 페이지를 보내주세요."
// Web Share API + 링크 복사

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/data/site'

export default function Share() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareData = {
      title: 'NOBRK — WE MUST GO ON.',
      text: '지쳐도 괜찮습니다. 잠시 멈춰도 괜찮습니다. 다시 한 걸음이면 충분합니다.\n\n같이 가자.',
      url: siteConfig.url,
    }

    // 모바일: Web Share API
    if (navigator.share && /Mobi/i.test(navigator.userAgent)) {
      try {
        await navigator.share(shareData)
      } catch {
        // 취소 시 무시
      }
    } else {
      // 데스크톱: 클립보드 복사
      try {
        await navigator.clipboard.writeText(siteConfig.url)
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      } catch {
        // 복사 실패 시 fallback
        const textArea = document.createElement('textarea')
        textArea.value = siteConfig.url
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      }
    }
  }

  return (
    <section
      className="relative min-h-[70vh] flex flex-col items-center justify-center py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden"
      aria-label="NOBRK 공유하기"
    >
      {/* 배경 글로우 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-700/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* 메인 메시지 */}
        <ScrollReveal>
          <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black text-white leading-[1.2] mb-6">
            혹시 지금
            <br />
            힘든 사람이 있다면
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-base md:text-lg font-light mb-12">
            그 사람에게 이 페이지를 보내주세요.
          </p>
        </ScrollReveal>

        {/* "같이 가자" 핵심 문구 */}
        <ScrollReveal delay={0.3}>
          <div className="mb-16">
            <p className="text-[clamp(3rem,10vw,7rem)] font-black text-white/90 leading-none tracking-tight">
              &ldquo;같이 가자.&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* 공유 버튼 */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col items-center gap-4">
            <motion.button
              onClick={handleShare}
              className="px-10 py-4 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm tracking-[0.3em] uppercase transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="NOBRK 페이지 공유하기"
            >
              {copied ? '링크가 복사되었습니다 ✓' : 'NOBRK 공유하기'}
            </motion.button>
            {copied && (
              <motion.p
                className="text-amber-500 text-xs tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                role="status"
              >
                {siteConfig.url}
              </motion.p>
            )}
            <p className="text-white/15 text-[10px] tracking-wider mt-2">
              모바일에서는 바로 공유할 수 있습니다
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
