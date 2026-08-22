// NOBRK - OUR STORY (Main Landing Page)
// Sections: Hero, Question, Philosophy, OneMoreStep, Message, FinalSection

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Question from '@/components/sections/Question'
import Philosophy from '@/components/sections/Philosophy'
import OneMoreStep from '@/components/sections/OneMoreStep'
import Message from '@/components/sections/Message'
import FinalSection from '@/components/sections/FinalSection'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* S01 - HERO */}
        <Hero />

        {/* S02 - WHY WE GO ON */}
        <Question />

        {/* S03 - NOBRK PHILOSOPHY */}
        <Philosophy />

        {/* S04 - ONE MORE STEP */}
        <OneMoreStep />

        {/* S05 - MESSAGE */}
        <Message />

        {/* S06 - FINAL MESSAGE */}
        <FinalSection />
      </main>
      <Footer />
    </>
  )
}