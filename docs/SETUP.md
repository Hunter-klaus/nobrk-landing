# NOBRK 배포 가이드
## GitHub + Vercel + Supabase 설정 방법

> **비개발자를 위한 단계별 안내입니다. 스크린샷처럼 따라 하면 됩니다.**

---

## 📋 순서 요약

1. GitHub 계정 만들기
2. GitHub에 코드 올리기
3. Vercel 계정 만들기 + 자동 배포 연결
4. Supabase 계정 만들기 + DB 설정
5. Vercel에 환경변수 등록
6. 완료 ✓

---

## STEP 1 — GitHub 계정 만들기

1. [github.com](https://github.com) 에 접속
2. **Sign up** 클릭
3. 이메일, 비밀번호, 사용자명 입력
4. 이메일 인증 완료

---

## STEP 2 — GitHub에 코드 올리기

### 방법 A: GitHub Desktop 사용 (GUI, 추천)

1. [desktop.github.com](https://desktop.github.com) 에서 **GitHub Desktop** 설치
2. 설치 후 GitHub 계정으로 로그인
3. 메뉴에서 **File → Add Local Repository** 클릭
4. 폴더 선택: `C:\Users\i5\.gemini\antigravity\scratch\nobrk-landing`
5. **"Create a repository" 링크** 클릭 (처음 올리는 경우)
6. 리포지토리 이름: `nobrk-landing`
7. **Publish repository** 클릭
8. **Keep this code private** 선택 (비공개 권장)
9. **Publish Repository** 클릭

> ✅ 이제 GitHub에 코드가 올라갔습니다!

### 방법 B: 커맨드라인 사용

```bash
cd C:\Users\i5\.gemini\antigravity\scratch\nobrk-landing
git init
git add .
git commit -m "feat: NOBRK landing page initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nobrk-landing.git
git push -u origin main
```

---

## STEP 3 — Vercel 계정 만들기 + 배포

1. [vercel.com](https://vercel.com) 접속
2. **Sign Up** → **Continue with GitHub** 클릭
3. GitHub 계정으로 로그인 (권한 허용)
4. 대시보드에서 **Add New → Project** 클릭
5. `nobrk-landing` 리포지토리 선택 → **Import** 클릭
6. 설정 확인:
   - Framework Preset: **Next.js** (자동 감지됨)
   - Root Directory: `./`
7. **Deploy** 클릭

> ✅ 약 1~2분 후 `https://nobrk-landing.vercel.app` 주소로 사이트가 열립니다!

> 💡 **앞으로 코드를 수정하면 자동으로 배포됩니다.** GitHub Desktop에서 "Commit + Push"만 하면 됩니다.

---

## STEP 4 — Supabase 계정 만들기 + DB 설정

### 4-1. 계정 생성

1. [supabase.com](https://supabase.com) 접속
2. **Start your project** 클릭
3. GitHub 계정으로 로그인

### 4-2. 프로젝트 생성

1. **New Project** 클릭
2. 설정:
   - Name: `nobrk`
   - Database Password: 복잡한 비밀번호 (메모해 두세요)
   - Region: **Northeast Asia (Seoul)** 선택
3. **Create new project** 클릭
4. 약 1~2분 대기

### 4-3. 데이터베이스 스키마 설정

1. 왼쪽 메뉴에서 **SQL Editor** 클릭
2. **New query** 클릭
3. 이 프로젝트의 `supabase/schema.sql` 파일 내용을 전체 복사
4. SQL Editor에 붙여넣기
5. **Run** 버튼 클릭 (또는 Ctrl+Enter)

> ✅ 테이블이 생성되었습니다!

### 4-4. API 키 복사

1. 왼쪽 메뉴 하단 **Settings** 클릭
2. **API** 탭 클릭
3. 다음 두 값을 복사해 놓기:
   - **Project URL** (예: `https://abcdefgh.supabase.co`)
   - **anon public** key (긴 문자열)

---

## STEP 5 — Vercel에 환경변수 등록

> 이 단계가 Supabase와 사이트를 연결하는 단계입니다.

1. [vercel.com](https://vercel.com) 대시보드 접속
2. `nobrk-landing` 프로젝트 클릭
3. 상단 **Settings** 탭 클릭
4. 왼쪽 **Environment Variables** 클릭
5. 아래 두 항목을 각각 추가:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | 4-4에서 복사한 Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 4-4에서 복사한 anon public key |

6. 각 항목 입력 후 **Save** 클릭
7. **Deployments** 탭 → 최신 배포 오른쪽 `...` → **Redeploy** 클릭

> ✅ 이제 커뮤니티 메시지가 Supabase에 저장됩니다!

---

## STEP 6 — 완료 확인

- 사이트 주소 접속 (예: `https://nobrk-landing.vercel.app`)
- 커뮤니티 섹션에서 메시지 입력 후 제출
- Supabase 대시보드 → **Table Editor** → `community_reasons` 테이블에서 확인

---

## 🔧 나중에 수정하는 방법

### SNS 링크 변경

`data/platforms.ts` 파일을 열어서 URL만 수정하면 됩니다:

```typescript
url: 'https://youtube.com/@NOBRK',  // ← 여기를 바꾸세요
```

### 콘텐츠 카드 수정

`data/content.ts` 파일을 수정하면 됩니다.

### 변경사항 반영

GitHub Desktop에서:
1. 수정된 파일 확인
2. 하단에 커밋 메시지 입력 (예: "링크 업데이트")
3. **Commit to main** 클릭
4. **Push origin** 클릭
5. → Vercel이 자동으로 재배포합니다 (1~2분)

---

## 🌐 도메인 연결 (선택사항)

도메인을 구매했다면:

1. Vercel 프로젝트 → Settings → Domains
2. 도메인 입력 후 Add
3. 도메인 등록 업체에서 DNS 설정 (Vercel이 안내해 줌)

---

## ❓ 자주 묻는 질문

**Q: 커뮤니티 글을 삭제하고 싶어요**
A: Supabase 대시보드 → Table Editor → 해당 테이블 → 해당 행의 `is_visible` 컬럼을 `false`로 바꾸면 됩니다. (코딩 없이 클릭으로 가능)

**Q: 사이트 URL을 바꾸고 싶어요**
A: Vercel 대시보드 → Settings → Domains에서 원하는 주소로 추가할 수 있습니다.

**Q: 로고 파일을 교체하고 싶어요**
A: `public/logo/` 폴더에 파일을 넣고, `components/layout/Navigation.tsx`에서 로고 부분을 이미지로 교체하면 됩니다. (개발자에게 요청하면 됩니다)
