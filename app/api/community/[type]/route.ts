// NOBRK — 커뮤니티 메시지 API
// GET: 메시지 목록 조회
// POST: 새 메시지 저장

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params
  const tableName =
    type === 'reasons' ? 'community_reasons' : 'community_thanks'

  const supabase = getSupabaseClient()
  if (!supabase) {
    return NextResponse.json(
      { error: 'Supabase not configured' },
      { status: 503 }
    )
  }

  const { data, error } = await supabase
    .from(tableName)
    .select('id, message, created_at')
    .eq('is_visible', true)
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params
  const tableName =
    type === 'reasons' ? 'community_reasons' : 'community_thanks'

  const body = await request.json()
  const message = (body.message || '').trim()

  // 유효성 검사
  if (!message) {
    return NextResponse.json({ error: '메시지를 입력해주세요.' }, { status: 400 })
  }
  if (message.length > 100) {
    return NextResponse.json(
      { error: '100자 이내로 입력해주세요.' },
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

  const { data, error } = await supabase
    .from(tableName)
    .insert([{ message, is_visible: true }])
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}
