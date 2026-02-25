import type { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'THE_FUTURE_IS_ANALOG.TXT',
    titleCN: '未来是模拟的.TXT',
    date: '1999-12-31',
    excerpt: 'Why we are returning to tactile interfaces in a digital world. The importance of physical feedback.',
    excerptCN: '为什么我们在数字世界中回归触觉交互。论物理反馈的重要性。',
    readTime: '5 MIN',
    tags: ['DESIGN', 'UX', 'RETRO']
  },
  {
    id: '2',
    title: 'SYNTHWAVE_CODING_SESSIONS.LOG',
    titleCN: '合成波编程会话.LOG',
    date: '2023-10-15',
    excerpt: 'Optimizing your workflow with the perfect retro-wave playlist and terminal setup.',
    excerptCN: '用完美的复古合成波歌单和终端设置优化你的工作流。',
    readTime: '3 MIN',
    tags: ['MUSIC', 'DEV', 'VIBES']
  },
  {
    id: '3',
    title: 'REACT_HOOKS_MANUAL_V1.PDF',
    titleCN: 'REACT_HOOKS_手册_V1.PDF',
    date: '2024-02-20',
    excerpt: 'Deep dive into useMemo and why you are probably using it wrong. A guide for the perplexed.',
    excerptCN: '深入探讨 useMemo 以及为什么你可能用错了。困惑者指南。',
    readTime: '8 MIN',
    tags: ['REACT', 'TYPESCRIPT']
  }
];
