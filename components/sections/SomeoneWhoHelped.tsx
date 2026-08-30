'use client'

// NOBRK — SECTION 09: SOMEONE WHO HELPED YOU
// "당신이 계속 갈 수 있도록 도와준 사람은 누구인가요?"
// NOBRK 핵심 철학 "나를 구하는 길은 남을 구하려 애쓰는 길"과 연결

import { useState, useEffect, useCallback } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CommunityCard from '@/components/ui/CommunityCard'
import { sampleThanks } from '@/data/community'
import { CommunityEntry } from '@/lib/types'

const MAX_CHARS = 100

export default function SomeoneWhoHelped() {
  const [input, setInput] = useState('')
  const [entries, setEntries] = useState<CommunityEntry[]>(sampleThanks)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isLoading, setIsLoading] = useState(true)

  const fetchEntries = useCallback(async () => {
    try {
      const res = await fetch('/api/community/thanks')
      if (!res.ok) throw new Error('fetch failed')
      const data: CommunityEntry[] = await res.json()
      if (data && data.length > 0) {
        setEntries(data)
      }
    } catch {
      // 샘플 데이터 유지
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

    try {
      const res = await fetch('/api/community/thanks', {
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
        throw new Error()
      }
    } catch {
      const localEntry: CommunityEntry = {
        id: `local-thanks-${Date.now()}`,
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
      id="section-09"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#111111] overflow-hidden"
      aria-label="도와준 사람에게 감사 메시지"
    >
      {/* 배경 */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" aria-hidden="true" />

      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="mb-16">
          <ScrollReveal>
            <p className="text-amber-600/70 text-xs tracking-[0.15em] mb-5 font-light leading-relaxed">
              <span className="inline-block">나를 구하는 가장 빠른 길은</span>{' '}
              <br className="sm:hidden" />
              <span className="inline-block">남을 구하려 애쓰는 길이다.</span>
            </p>
            <h2 className="text-[clamp(1.45rem,4vw,3.2rem)] font-black text-white leading-[1.3]">
              <span className="inline-block">당신이 계속 갈 수 있도록</span>
              <br />
              <span className="inline-block">도와준 사람은 누구인가요?</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 입력 폼 */}
        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="mb-16" noValidate>
            <div className="p-5 md:p-6 border border-white/10 focus-within:border-white/25 transition-colors duration-300 bg-white/[0.02]">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
                placeholder="그 사람에게 하고 싶은 말..."
                className="w-full bg-transparent text-white text-sm font-light leading-relaxed resize-none outline-none placeholder:text-white/20 min-h-[80px]"
                rows={3}
                aria-label="그 사람에게 하고 싶은 말"
                disabled={isSubmitting}
              />
              <div className="flex items-center justify-between mt-2">
                <span
                  className={`text-[10px] tracking-wider ${
                    input.length > 90 ? 'text-amber-500' : 'text-white/20'
                  }`}
                  aria-live="polite"
                >
                  {input.length} / {MAX_CHARS}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting || !input.trim()}
                className="px-6 py-3 border border-amber-600/30 text-amber-600/60 hover:text-amber-500 hover:border-amber-500/60 disabled:opacity-30 disabled:cursor-not-allowed text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                aria-label="감사 메시지 남기기"
              >
                {isSubmitting ? '남기는 중...' : '전하기'}
              </button>

              {submitStatus === 'success' && (
                <span className="text-amber-500 text-xs tracking-wider" role="status">
                  ✓ 전해졌습니다.
                </span>
              )}
            </div>
          </form>
        </ScrollReveal>

        {/* 감사 메시지 카드들 */}
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
