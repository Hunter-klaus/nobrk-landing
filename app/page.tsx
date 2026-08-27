// NOBRK — 메인 페이지
// 1단계 Hero -> 2단계 Question -> 3단계 Philosophy 순서로 자연스럽게 배치합니다.

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Question from '@/components/sections/Question'
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
        {/* S01 — HERO (1단계: 요즘, 많이 지쳤나요?) */}
        <Hero />

        {/* S02 — QUESTION (2단계: 빠르게 갈 필요는 없습니다) */}
        <Question />

        {/* S03 — PHILOSOPHY (3단계: 결국 중요한 건 꾸준함입니다) */}
        <Philosophy />

        {/* S04 — ONE MORE STEP */}
        <OneMoreStep />

        {/* S05 — CONTENT CARDS: 오늘, 당신에게 필요한 한 문장 */}
        <ContentCards />

        {/* S06 — CONTENT PLATFORM: YouTube, Instagram, Threads */}
        <ContentPlatform />

        {/* S07 — COMMUNITY WALL: 오늘 당신을 계속 가게 하는 것 */}
        <CommunityWall />

        {/* S08 — SOMEONE WHO HELPED: 도와준 사람 */}
        <SomeoneWhoHelped />

        {/* S09 — SHARE: 같이 가자 */}
        <Share />

        {/* S10 — FUTURE: 이것은 시작일 뿐 */}
        <Future />

        {/* S11 — FINAL: NOBRK / WE MUST GO ON. */}
        <FinalSection />
      </main>

      {/* 푸터 */}
      <Footer />
    </>
  )
}
