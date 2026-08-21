'use client'

// NOBRK — 커뮤니티 메시지 카드 컴포넌트
// 섹션 08, 09에서 사용자 답변을 표시합니다

import { CommunityEntry } from '@/lib/types'

interface CommunityCardProps {
  entry: CommunityEntry
  index?: number
}

export default function CommunityCard({ entry, index = 0 }: CommunityCardProps) {
  return (
    <div
      className="group px-5 py-4 border border-white/8 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500"
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
        &ldquo;{entry.message}&rdquo;
      </p>
    </div>
  )
}
