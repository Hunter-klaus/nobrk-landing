// NOBRK — 사이트 기본 설정
// 사이트 메타데이터, 브랜드 정보 등을 여기서 관리합니다

import { SiteConfig } from '@/lib/types'

export const siteConfig: SiteConfig = {
  name: 'NOBRK',
  tagline: 'WE MUST GO ON.',
  description:
    '지쳐도 괜찮습니다. 잠시 멈춰도 괜찮습니다. 다시 한 걸음이면 충분합니다. NOBRK는 사람들에게 희망과 용기를 전하는 라이프스타일 Movement입니다.',
  ogDescription: '오늘도 한 걸음. 내일도 한 걸음.',
  url: 'https://nobrk.vercel.app',
}

// 브랜드 컬러 (Tailwind 클래스와 함께 사용)
export const brandColors = {
  black: '#0A0A0A',
  warmWhite: '#F5F0EB',
  charcoal: '#1A1A1A',
  amber: '#D4601A',
  amberLight: '#E87A35',
  gray: '#888888',
  grayLight: '#AAAAAA',
}

// 브랜드 핵심 메시지
export const brandMessages = {
  mainPhilosophy: '나를 구하는 가장 빠른 길은 남을 구하려 애쓰는 길이다.',
  hero: {
    subtitle: '지친 당신에게, 다시 한 걸음의 이유를.',
    cta: 'NOBRK 이야기 보기',
  },
  share: {
    title: '같이 가자.',
    text: '혹시 지금 힘든 사람이 있다면, 이 페이지를 보내주세요.',
  },
}
