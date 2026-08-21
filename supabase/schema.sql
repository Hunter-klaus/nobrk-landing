-- NOBRK — Supabase 데이터베이스 스키마
-- Supabase 대시보드 > SQL Editor에서 이 파일 전체를 붙여넣고 실행하세요.
-- 자세한 방법은 docs/SETUP.md를 참고하세요.

-- ========================================
-- 1. 커뮤니티 월 — "오늘 나를 계속 가게 하는 것"
-- ========================================
CREATE TABLE IF NOT EXISTS community_reasons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL CHECK (char_length(message) >= 1 AND char_length(message) <= 100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  is_visible BOOLEAN DEFAULT TRUE
);

-- 인덱스: 최신 순 조회 최적화
CREATE INDEX IF NOT EXISTS idx_community_reasons_created_at
  ON community_reasons (created_at DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE community_reasons ENABLE ROW LEVEL SECURITY;

-- 정책: 누구나 읽기 가능 (is_visible = true인 것만)
CREATE POLICY "공개 메시지 읽기 허용"
  ON community_reasons FOR SELECT
  USING (is_visible = TRUE);

-- 정책: 누구나 쓰기 가능 (익명 포함)
CREATE POLICY "익명 메시지 쓰기 허용"
  ON community_reasons FOR INSERT
  WITH CHECK (char_length(message) >= 1 AND char_length(message) <= 100);

-- ========================================
-- 2. 감사 메시지 — "도와준 사람에게"
-- ========================================
CREATE TABLE IF NOT EXISTS community_thanks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL CHECK (char_length(message) >= 1 AND char_length(message) <= 100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  is_visible BOOLEAN DEFAULT TRUE
);

CREATE INDEX IF NOT EXISTS idx_community_thanks_created_at
  ON community_thanks (created_at DESC);

ALTER TABLE community_thanks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "공개 감사 메시지 읽기 허용"
  ON community_thanks FOR SELECT
  USING (is_visible = TRUE);

CREATE POLICY "익명 감사 메시지 쓰기 허용"
  ON community_thanks FOR INSERT
  WITH CHECK (char_length(message) >= 1 AND char_length(message) <= 100);

-- ========================================
-- 3. 뉴스레터 구독 (향후 사용 예정)
-- ========================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 뉴스레터는 서버에서만 접근 (anon 읽기 불가)
CREATE POLICY "뉴스레터 구독 쓰기 허용"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$');

-- ========================================
-- 4. 샘플 데이터 (선택사항)
-- ========================================
-- 처음 사이트를 열었을 때 비어있지 않도록 기본 데이터를 넣습니다.
-- 원하지 않으면 이 부분을 실행하지 않아도 됩니다.

INSERT INTO community_reasons (message) VALUES
  ('아직 포기하고 싶지 않은 꿈이 있어서.'),
  ('가족이 있어서.'),
  ('언젠가 나도 누군가에게 힘이 되고 싶어서.'),
  ('나를 믿어준 사람이 있어서.'),
  ('아직 내가 할 수 있는 일이 있다고 믿어서.'),
  ('오늘 하루도 어떻게든 버텼으니까.')
ON CONFLICT DO NOTHING;

INSERT INTO community_thanks (message) VALUES
  ('엄마, 고마워.'),
  ('친구야, 그때 네가 해준 말 덕분에 버텼어.'),
  ('아버지, 아직 잘 살아가고 있습니다.'),
  ('나를 끝까지 믿어준 그 사람에게.'),
  ('그날 밤 전화해줘서 고마워.')
ON CONFLICT DO NOTHING;
