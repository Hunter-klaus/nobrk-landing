// NOBRK — 콘텐츠 카드 데이터
// 섹션 06 "오늘, 당신에게 필요한 한 문장"에 표시되는 카드들입니다.
// 카드를 추가하거나 수정하려면 이 파일을 편집하세요.

import { ContentCard } from '@/lib/types'

export const contentCards: ContentCard[] = [
  {
    id: '001',
    category: 'FOR SOMEONE WHO IS TIRED',
    title: '오늘 아무것도 하지 못했다면',
    description:
      '오늘 아무것도 하지 못했다고\n너무 자신을 미워하지 마세요.\n\n오늘을 버틴 것도\n분명 당신이 해낸 일입니다.',
    platform: 'instagram',
    url: '#',
    date: '2026-08-22',
    featured: true,
  },
  {
    id: '002',
    category: 'ONE MORE STEP',
    title: '인생 전체를 오늘 해결할 필요는 없습니다',
    description:
      '인생 전체를\n오늘 해결할 필요는 없습니다.\n\n오늘은\n오늘만 살아도 됩니다.',
    platform: 'instagram',
    url: '#',
    date: '2026-08-22',
    featured: true,
  },
  {
    id: '003',
    category: 'NOBRK THOUGHT',
    title: '다시 시작할 수 있는 사람',
    description:
      '포기하지 않는 것보다\n다시 시작할 수 있는 사람이 되는 것이\n더 중요할지도 모릅니다.',
    platform: 'threads',
    url: '#',
    date: '2026-08-22',
    featured: true,
  },
  {
    id: '004',
    category: 'FOR YOU',
    title: '이 글을 보고 있는 당신에게',
    description:
      '이 글을 보고 있는 당신에게.\n\n아직 끝난 게 아닙니다.',
    platform: 'instagram',
    url: '#',
    date: '2026-08-22',
    featured: true,
  },
]

// 콘텐츠 카테고리 색상 매핑
export const categoryColors: Record<string, string> = {
  'FOR SOMEONE WHO IS TIRED': '#D4601A',
  'ONE MORE STEP': '#888888',
  'NOBRK THOUGHT': '#FFFFFF',
  'FOR YOU': '#D4601A',
}
