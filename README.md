# NOBRK Landing Page

**WE MUST GO ON.**

지친 당신에게, 다시 한 걸음의 이유를.

---

## 기술 스택

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (스크롤 애니메이션)
- **Supabase** (커뮤니티 DB)
- **Vercel** (배포 + Analytics)

## 프로젝트 구조

```
nobrk-landing/
├── app/                    # Next.js App Router
│   ├── api/                # API 라우트 (커뮤니티, 뉴스레터)
│   ├── layout.tsx          # SEO 메타데이터, 전역 설정
│   └── page.tsx            # 메인 페이지 (12개 섹션 조립)
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── sections/           # 각 섹션 컴포넌트 (Hero ~ Final)
│   └── ui/                 # 공통 UI 컴포넌트
├── data/                   # ⚡ 여기서 콘텐츠 수정!
│   ├── content.ts          # 콘텐츠 카드 4개
│   ├── community.ts        # 커뮤니티 샘플 데이터
│   ├── platforms.ts        # SNS 링크 (YouTube, Instagram, Threads)
│   └── site.ts             # 사이트 기본 설정
├── lib/
│   ├── supabase.ts         # Supabase 클라이언트
│   └── types.ts            # TypeScript 타입 정의
├── supabase/
│   └── schema.sql          # DB 스키마 (Supabase에서 실행)
└── docs/
    ├── SETUP.md            # GitHub/Vercel/Supabase 가입 & 배포 가이드
    └── ADMIN.md            # 관리자 가이드 (코딩 없이 운영)
```

## 빠른 시작

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 환경변수 설정

`.env.example`을 복사해서 `.env.local`을 만들고, Supabase 값을 채웁니다:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 배포

- **GitHub** → **Vercel** 자동 배포
- `main` 브랜치에 push하면 자동으로 배포됩니다

자세한 배포 방법은 [docs/SETUP.md](docs/SETUP.md)를 참고하세요.

## 콘텐츠 수정 방법

| 수정 대상 | 파일 |
|----------|------|
| SNS 링크 | `data/platforms.ts` |
| 콘텐츠 카드 | `data/content.ts` |
| 사이트 기본 정보 | `data/site.ts` |
| 커뮤니티 샘플 데이터 | `data/community.ts` |

---

NOBRK © 2026. WE MUST GO ON.
