# NOBRK 관리자 가이드
## 코딩 없이 사이트를 운영하는 방법

> Supabase 대시보드만 있으면 됩니다. 개발 지식이 없어도 됩니다.

---

## 🗂 Supabase 대시보드 접속

1. [supabase.com](https://supabase.com) → **Sign In**
2. 왼쪽 메뉴에서 **Table Editor** 클릭

---

## 📋 테이블 구조

| 테이블명 | 용도 |
|---------|------|
| `community_reasons` | "나를 계속 가게 하는 것" 메시지 |
| `community_thanks` | "도와준 사람에게" 감사 메시지 |
| `newsletter_subscribers` | 뉴스레터 구독자 이메일 (향후) |

---

## 🚫 부적절한 메시지 숨기기

1. **Table Editor** → 해당 테이블 선택
2. 해당 행(row) 클릭
3. `is_visible` 컬럼을 **false** 로 변경
4. 저장

> ✅ 사이트에서 즉시 사라집니다.

---

## 📊 데이터 내보내기

1. **Table Editor** → 해당 테이블
2. 우측 상단 **Export** → CSV 다운로드

---

## ✏️ 직접 메시지 추가하기

1. Table Editor → 해당 테이블
2. **Insert row** 클릭
3. `message` 컬럼에 내용 입력
4. `is_visible`: true
5. **Save** 클릭

---

## 📧 뉴스레터 구독자 확인 (향후)

- `newsletter_subscribers` 테이블에서 이메일 목록 확인
- CSV로 내보내서 이메일 서비스에 업로드

---

## 🔍 SQL로 통계 보기

**Table Editor** 대신 **SQL Editor**를 사용하면 더 자세한 통계를 볼 수 있습니다:

```sql
-- 오늘 작성된 메시지 수
SELECT COUNT(*) FROM community_reasons
WHERE DATE(created_at) = CURRENT_DATE;

-- 전체 메시지 수
SELECT COUNT(*) FROM community_reasons WHERE is_visible = true;

-- 최근 10개 메시지
SELECT message, created_at FROM community_reasons
ORDER BY created_at DESC LIMIT 10;
```

---

## 🛡 보안 체크리스트

- [ ] Supabase 비밀번호는 절대 공유하지 않기
- [ ] Vercel 환경변수는 Service Role Key가 아닌 Anon Key 사용 (이미 설정됨)
- [ ] 부적절한 메시지는 즉시 `is_visible = false` 처리

---

## 📞 코딩이 필요한 작업

이런 작업은 개발자에게 요청하세요:
- 새로운 섹션 추가
- 디자인 변경
- 로고 파일 교체
- 새로운 기능 추가 (MD 스토어, 멤버십 등)

GitHub 링크를 공유하면 어느 개발자든 쉽게 작업할 수 있습니다.
