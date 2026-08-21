// NOBRK — Supabase 클라이언트 설정
// 환경변수는 .env.local 파일에 설정합니다
// Vercel 배포 시 Vercel 대시보드에서 환경변수를 설정합니다

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 클라이언트 컴포넌트에서 사용하는 Supabase 클라이언트
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 환경변수가 설정되었는지 확인하는 함수
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}
