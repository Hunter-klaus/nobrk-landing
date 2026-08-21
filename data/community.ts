// NOBRK — 커뮤니티 샘플 데이터
// Supabase가 연결되기 전 또는 데이터가 없을 때 보여주는 기본 답변들입니다.
// Supabase 연결 후에는 실제 사용자 데이터로 대체됩니다.

import { CommunityEntry } from '@/lib/types'

export const sampleReasons: CommunityEntry[] = [
  {
    id: 'sample-1',
    message: '아직 포기하고 싶지 않은 꿈이 있어서.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'sample-2',
    message: '가족이 있어서.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'sample-3',
    message: '언젠가 나도 누군가에게 힘이 되고 싶어서.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'sample-4',
    message: '나를 믿어준 사람이 있어서.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'sample-5',
    message: '아직 내가 할 수 있는 일이 있다고 믿어서.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'sample-6',
    message: '오늘 하루도 어떻게든 버텼으니까.',
    created_at: new Date().toISOString(),
  },
]

export const sampleThanks: CommunityEntry[] = [
  {
    id: 'thanks-1',
    message: '엄마, 고마워.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'thanks-2',
    message: '친구야, 그때 네가 해준 말 덕분에 버텼어.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'thanks-3',
    message: '아버지, 아직 잘 살아가고 있습니다.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'thanks-4',
    message: '나를 끝까지 믿어준 그 사람에게.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'thanks-5',
    message: '그날 밤 전화해줘서 고마워.',
    created_at: new Date().toISOString(),
  },
]
