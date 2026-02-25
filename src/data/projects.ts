import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CYBER_DECK_DASHBOARD',
    description: 'A crypto-currency analytics dashboard styled like a 1980s mainframe terminal.',
    descriptionCN: '一个风格类似80年代主机终端的加密货币分析仪表板。',
    techStack: ['React', 'D3.js', 'WebSockets'],
    imageUrl: 'https://picsum.photos/400/300?random=1',
    link: '#'
  },
  {
    id: '2',
    title: 'NEON_CITY_RENDERER',
    description: 'WebGL procedural city generator. Infinite drive through a sunset grid.',
    descriptionCN: 'WebGL 程序化城市生成器。在日落网格中无限驰骋。',
    techStack: ['Three.js', 'GLSL', 'Vite'],
    imageUrl: 'https://picsum.photos/400/300?random=2',
    link: '#'
  },
  {
    id: '3',
    title: 'LO_FI_BEAT_MAKER',
    description: 'In-browser sequencer and sampler for creating chill beats to code to.',
    descriptionCN: '浏览器内的音序器和采样器，用于创作适合编程的 Lo-Fi 节拍。',
    techStack: ['WebAudio API', 'Tone.js', 'Vue'],
    imageUrl: 'https://picsum.photos/400/300?random=3',
    link: '#'
  },
  {
    id: '4',
    title: 'TERMINAL_CHAT_BOT',
    description: 'AI interface that feels like WarGames. "Shall we play a game?"',
    descriptionCN: '感觉像《战争游戏》的 AI 界面。“想玩个游戏吗？”',
    techStack: ['Node.js', 'Gemini API', 'Socket.io'],
    imageUrl: 'https://picsum.photos/400/300?random=4',
    link: '#'
  }
];
