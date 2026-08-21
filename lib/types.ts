// NOBRK — TypeScript 타입 정의
// 향후 기능 추가 시 여기에 타입을 추가하세요

export interface ContentCard {
  id: string
  category: string
  title: string
  description: string
  platform?: 'instagram' | 'youtube' | 'threads' | 'all'
  url?: string
  thumbnail?: string
  date?: string
  featured?: boolean
}

export interface CommunityEntry {
  id: string
  message: string
  created_at: string
  is_visible?: boolean
}

export interface Platform {
  id: string
  name: string
  description: string
  url: string
  icon: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  ogDescription: string
  url: string
}

// 향후 Content Hub 확장을 위한 타입
export interface ContentHubItem {
  id: string
  title: string
  body: string
  platform: 'youtube' | 'instagram' | 'threads'
  status: 'idea' | 'draft' | 'scheduled' | 'published'
  scheduled_at?: string
  published_at?: string
  stats?: {
    views?: number
    likes?: number
    shares?: number
    saves?: number
    comments?: number
  }
}

// 향후 뉴스레터 구독을 위한 타입
export interface NewsletterSubscriber {
  email: string
  subscribed_at?: string
}
