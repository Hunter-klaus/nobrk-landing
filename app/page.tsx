// NOBRK — 메인 페이지
// 모든 섹션을 순서대로 조립합니다

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Question from '@/components/sections/Question'
import Message from '@/components/sections/Message'
import Philosophy from '@/components/sections/Philosophy'
import OneMoreStep from '@/components/sections/OneMoreStep'
import ContentCards from '@/components/sections/ContentCards'
import ContentPlatform from '@/components/sections/ContentPlatform'
import CommunityWall from '@/components/sections/CommunityWall'
import SomeoneWhoHelped from '@/components/sections/SomeoneWhoHelped'
import Share from '@/components/sections/Share'
import Future from '@/components/sections/Future'
import FinalSection from '@/components/sections/FinalSection'

export default function HomePage() {
  return (
    <>
      {/* 상단 네비게이션 — 고정 */}
      <Navigation />

      {/* 메인 콘텐츠 */}
      <main>
        {/* S01 — HERO */}
        <Hero />

        {/* S02 — QUESTION: 우리는 왜 계속 가야 할까요? */}
        <Question />

        {/* S03 — MESSAGE: 괜찮습니다 */}
        <Message />

        {/* S04 — PHILOSOPHY: 나를 구하는 가장 빠른 길 */}
        <Philosophy />

        {/* S05 — ONE MORE STEP: FALL → GO ON */}
        <OneMoreStep />

        {/* S06 — CONTENT CARDS: 오늘, 당신에게 필요한 한 문장 */}
        <ContentCards />

        {/* S07 — CONTENT PLATFORM: YouTube, Instagram, Threads */}
        <ContentPlatform />

        {/* S08 — COMMUNITY WALL: 오늘 당신을 계속 가게 하는 것 */}
        <CommunityWall />

        {/* S09 — SOMEONE WHO HELPED: 도와준 사람 */}
        <SomeoneWhoHelped />

        {/* S10 — SHARE: 같이 가자 */}
        <Share />

        {/* S11 — FUTURE: 이것은 시작일 뿐 */}
        <Future />

        {/* S12 — FINAL: NOBRK / WE MUST GO ON. */}
        <FinalSection />
      </main>

      {/* 푸터 */}
      <Footer />
    </>
  )
}
