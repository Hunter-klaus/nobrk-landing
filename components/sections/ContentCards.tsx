'use client'

// NOBRK — SECTION 06: CONTENT CARDS
// "오늘, 당신에게 필요한 한 문장"
// 4개의 콘텐츠 카드 + 공유 기능 (이미지 저장 + 링크 복사)

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { contentCards } from '@/data/content'
import { siteConfig } from '@/data/site'

// 카드 공유 기능 — 링크 복사 또는 Web Share API
async function shareCard(message: string) {
  const shareData = {
    title: 'NOBRK — WE MUST GO ON.',
    text: message + '\n\n— NOBRK',
    url: siteConfig.url,
  }

  if (navigator.share && /Mobi/i.test(navigator.userAgent)) {
    try {
      await navigator.share(shareData)
    } catch {
      // 취소한 경우 무시
    }
  } else {
    // 데스크톱: 클립보드 복사
    try {
      await navigator.clipboard.writeText(shareData.text + '\n' + shareData.url)
      return true // 복사 성공
    } catch {
      return false
    }
  }
  return false
}

function ContentCardItem({
  card,
  index,
}: {
  card: (typeof contentCards)[0]
  index: number
}) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const success = await shareCard(card.description.replace(/\n/g, ' '))
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <motion.article
      className="flex flex-col justify-between p-7 md:p-9 bg-[#111111] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 group min-h-[320px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      aria-label={card.title}
    >
      {/* 카테고리 */}
      <div className="mb-6">
        <span className="text-amber-600 text-[10px] tracking-[0.3em] uppercase font-medium">
          {card.category}
        </span>
      </div>

      {/* 본문 */}
      <div className="flex-1">
        <p className="text-white/80 text-sm md:text-base leading-[2] font-light whitespace-pre-line group-hover:text-white transition-colors duration-500">
          {card.description}
        </p>
      </div>

      {/* 하단: 공유 버튼 */}
      <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-white/20 text-[10px] tracking-wider font-light">
          NOBRK
        </span>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-white/30 hover:text-white/70 text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer group/share"
          aria-label={`${card.title} 공유하기`}
        >
          {copied ? (
            <span className="text-amber-500 text-[10px]">복사됨 ✓</span>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
              <span className="text-[10px]">공유하기</span>
            </>
          )}
        </button>
      </div>
    </motion.article>
  )
}

export default function ContentCards() {
  return (
    <section
      id="section-06"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden"
      aria-label="오늘, 당신에게 필요한 한 문장"
    >
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="mb-16 md:mb-20">
          <ScrollReveal>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-5 font-light">
              NOBRK Content
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-tight mb-4">
              오늘, 당신에게
              <br />
              필요한 한 문장
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/40 text-base md:text-lg font-light max-w-md leading-relaxed">
              어떤 날에는 긴 설명보다
              <br />
              한 문장이 더 필요할 때가 있습니다.
            </p>
          </ScrollReveal>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {contentCards.map((card, i) => (
            <ContentCardItem key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
