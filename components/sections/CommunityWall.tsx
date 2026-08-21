'use client'

// NOBRK — SECTION 08: COMMUNITY WALL
// "오늘 당신을 계속 가게 하는 것은 무엇인가요?"
// 사용자 입력 → Supabase DB 저장 → 실시간 표시

import { useState, useEffect, useCallback } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CommunityCard from '@/components/ui/CommunityCard'
import { sampleReasons } from '@/data/community'
import { CommunityEntry } from '@/lib/types'

const MAX_CHARS = 100

export default function CommunityWall() {
  const [input, setInput] = useState('')
  const [entries, setEntries] = useState<CommunityEntry[]>(sampleReasons)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isLoading, setIsLoading] = useState(true)

  // Supabase에서 메시지 불러오기
  const fetchEntries = useCallback(async () => {
    try {
      const res = await fetch('/api/community/reasons')
      if (!res.ok) throw new Error('fetch failed')
      const data: CommunityEntry[] = await res.json()
      if (data && data.length > 0) {
        setEntries(data)
      }
    } catch {
      // Supabase 미연결 시 샘플 데이터 유지
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEntries()
  }, [fetchEntries])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || trimmed.length > MAX_CHARS) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const res = await fetch('/api/community/reasons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })

      if (res.ok) {
        const newEntry: CommunityEntry = await res.json()
        setEntries((prev) => [newEntry, ...prev])
        setInput('')
        setSubmitStatus('success')
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        throw new Error('submit failed')
      }
    } catch {
      // Supabase 미연결 시 로컬에만 추가
      const localEntry: CommunityEntry = {
        id: `local-${Date.now()}`,
        message: trimmed,
        created_at: new Date().toISOString(),
      }
      setEntries((prev) => [localEntry, ...prev])
      setInput('')
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="section-08"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden"
      aria-label="커뮤니티 월 — 오늘 당신을 계속 가게 하는 것"
    >
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="mb-16">
          <ScrollReveal>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-5 font-light">
              Community
            </p>
            <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black text-white leading-[1.15] mb-6">
              오늘 당신을 계속 가게 하는 것은
              <br />
              무엇인가요?
            </h2>
          </ScrollReveal>
        </div>

        {/* 입력 폼 */}
        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="mb-16" noValidate>
            <div className="relative">
              {/* 프리픽스 텍스트 */}
              <div className="flex items-start gap-3 p-5 md:p-6 border border-white/10 focus-within:border-white/25 transition-colors duration-300 bg-white/[0.02]">
                <span className="text-white/40 text-sm font-light mt-[2px] shrink-0 leading-relaxed">
                  나는
                </span>
                <div className="flex-1">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
                    placeholder="________ 때문에 계속 갑니다."
                    className="w-full bg-transparent text-white text-sm font-light leading-relaxed resize-none outline-none placeholder:text-white/20 min-h-[60px]"
                    rows={2}
                    aria-label="오늘 나를 계속 가게 하는 이유"
                    disabled={isSubmitting}
                  />
                  {/* 글자 수 표시 */}
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className={`text-[10px] tracking-wider ${
                        input.length > 90 ? 'text-amber-500' : 'text-white/20'
                      }`}
                      aria-live="polite"
                      aria-label={`${input.length}자 / ${MAX_CHARS}자`}
                    >
                      {input.length} / {MAX_CHARS}
                    </span>
                  </div>
                </div>
              </div>

              {/* 제출 버튼 */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting || !input.trim()}
                  className="px-6 py-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                  aria-label="나의 이유 남기기"
                >
                  {isSubmitting ? '남기는 중...' : '나의 이유 남기기'}
                </button>

                {/* 피드백 메시지 */}
                {submitStatus === 'success' && (
                  <span className="text-amber-500 text-xs tracking-wider" role="status">
                    ✓ 남겨졌습니다.
                  </span>
                )}
              </div>
            </div>
          </form>
        </ScrollReveal>

        {/* 커뮤니티 응답 카드들 */}
        <ScrollReveal delay={0.1}>
          {isLoading ? (
            <div className="text-white/20 text-sm text-center py-12">불러오는 중...</div>
          ) : (
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {entries.map((entry, i) => (
                <div key={entry.id} className="break-inside-avoid">
                  <CommunityCard entry={entry} index={i} />
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
