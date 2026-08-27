// NOBRK — SNS 플랫폼 링크 설정
// ⚠️ URL을 변경하려면 이 파일에서만 수정하면 됩니다.

import { Platform } from '@/lib/types'

export const platforms: Platform[] = [
  {
    id: 'youtube',
    name: 'YouTube Shorts',
    description: '짧은 이야기와 메시지',
    url: 'https://www.youtube.com/@nobrk.project',
    icon: 'youtube',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'NOBRK의 이미지와 이야기',
    url: 'https://www.instagram.com/nobrk.project',
    icon: 'instagram',
  },
  {
    id: 'threads',
    name: 'Threads',
    description: 'NOBRK의 생각과 대화',
    url: 'https://www.threads.net/@nobrk.project',
    icon: 'threads',
  },
]
