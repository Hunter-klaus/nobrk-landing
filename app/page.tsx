import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Question from '@/components/sections/Question'
import Reversal from '@/components/sections/Reversal'
import OneMoreStep from '@/components/sections/OneMoreStep'
import Action from '@/components/sections/Action'
import Philosophy from '@/components/sections/Philosophy'
import FinalSection from '@/components/sections/FinalSection'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* HERO */}
        <Hero />

        {/* 01. 질문으로 시작 */}
        <Question />

        {/* 02. 여기서 반전 */}
        <Reversal />

        {/* 03. NOBRK 핵심 */}
        <OneMoreStep />

        {/* 04. 행동으로 전환 */}
        <Action />

        {/* 05. Philosophy */}
        <Philosophy />

        {/* 06. NOBRK의 결론 */}
        <FinalSection />
      </main>
      <Footer />
    </>
  )
}
