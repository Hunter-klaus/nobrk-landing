// NOBRK — SNS 플랫폼 링크 설정
// ⚠️ URL을 변경하려면 이 파일에서만 수정하면 됩니다.
// 예: url: 'https://youtube.com/@NOBRK'

import { Platform } from '@/lib/types'

export const platforms: Platform[] = [
  {
    id: 'youtube',
    name: 'YouTube Shorts',
    description: '짧은 이야기와 메시지',
    // 🔧 여기에 실제 YouTube 채널 URL을 입력하세요
    url: 'https://youtube.com/@NOBRK',
    icon: 'youtube',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'NOBRK의 이미지와 이야기',
    // 🔧 여기에 실제 Instagram URL을 입력하세요
    url: 'https://instagram.com/nobrk_official',
    icon: 'instagram',
  },
  {
    id: 'threads',
    name: 'Threads',
    description: 'NOBRK의 생각과 대화',
    // 🔧 여기에 실제 Threads URL을 입력하세요
    url: 'https://threads.net/@nobrk_official',
    icon: 'threads',
  },
]
