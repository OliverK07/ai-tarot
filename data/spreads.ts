import { Spread } from '@/types/tarot';

export const spreads: Spread[] = [
  {
    id: 'single',
    name: '單張牌',
    positions: ['指引'],
    description: '簡單直接的單張牌,提供當下最需要的指引和洞見。',
  },
  {
    id: 'three-card',
    name: '三張牌:過去/現在/未來',
    positions: ['過去', '現在', '未來'],
    description: '探索過去的影響、當前的狀況,以及未來的走向。',
  },
  {
    id: 'five-card',
    name: '五張牌:情境分析',
    positions: ['當前狀態', '面臨挑戰', '指引建議', '近期未來', '最終結果'],
    description: '深入分析當前情境,了解挑戰、獲得建議,並看見可能的未來。',
  },
];
