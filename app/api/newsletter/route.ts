// NOBRK — 뉴스레터 구독 API (향후 사용 예정)
// 현재는 Supabase에 이메일을 저장하는 구조만 준비되어 있습니다.

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const email = (body.email || '').trim().toLowerCase()

  // 이메일 유효성 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: '올바른 이메일 주소를 입력해주세요.' },
      { status: 400 }
    )
  }

  const supabase = getSupabaseClient()
  if (!supabase) {
    return NextResponse.json(
      { error: 'Supabase not configured' },
      { status: 503 }
    )
  }

  const { error } = await supabase
    .from('newsletter_subscribers')
    .upsert([{ email }], { onConflict: 'email' })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 201 })
}
