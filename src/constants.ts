import type { BlogPost, Project } from './types';

// ==========================================
// 1. 全局站点配置 (GLOBAL CONFIG)
// 在这里修改你的网站名称、个人信息等
// ==========================================
export const APP_CONFIG = {
  name: 'RETRO_DECK',      // 网站名称 (Loading画面, 顶部状态栏)
  version: 'v2.0',         // 版本号
  initials: 'RD',          // 侧边栏 Logo 缩写
  email: 'hello@retrodeck.net', // 联系邮箱
  location: 'San Francisco, CA' // 物理坐标
};

// ==========================================
// 2. 语言翻译 (TRANSLATIONS)
// 这里管理中英文界面的所有文本
// ==========================================
export const TRANSLATIONS = {
  EN: {
    nav: {
      HOME: 'SYS',
      BLOG: 'LOG',
      PORTFOLIO: 'DSK',
      CONTACT: 'COM'
    },
    home: {
      greeting: 'HELLO_',
      world: 'WORLD',
      role: 'CREATIVE_DEVELOPER // AUDIO_VISUAL',
      status: 'SYSTEM STATUS: ONLINE',
      intro: '"Building interfaces that bridge the gap between nostalgic analog warmth and modern digital precision."'
    },
    blog: {
      title: '/LOGS',
      tag: 'READ_ONLY',
      readMore: 'READ'
    },
    portfolio: {
      title: 'PROJECT_ARCHIVE',
      subtitle: 'SELECTED WORKS 2020-2025',
      launch: 'LAUNCH_PROJECT'
    },
    contact: {
      title: 'ESTABLISH_UPLINK',
      subtitle: 'SEND ENCRYPTED MESSAGE',
      systemMsgTitle: 'SYSTEM_MSG:',
      systemMsgBody: 'Currently accepting transmission packets regarding freelance operations, collaborative coding sessions, and retro hardware discussions.',
      freq: 'FREQUENCY',
      coords: 'COORDINATES',
      userId: 'USER_ID',
      enterName: 'ENTER_NAME',
      enterEmail: 'ENTER_EMAIL',
      packet: 'DATA_PACKET',
      typeMsg: 'TYPE_MESSAGE_HERE...',
      transmit: 'TRANSMIT_DATA',
      sending: 'UPLOADING...',
      sent: 'TRANSMISSION_COMPLETE'
    },
    loading: {
      bootTitle: 'SYSTEM BOOT ' + APP_CONFIG.version,
      loading: 'LOADING...',
      logs: [
        "BIOS_CHECK... OK",
        "LOADING_KERNEL... OK",
        "MOUNTING_DRIVES... OK",
        "INIT_GRAPHICS... OK",
        "LOADING_ASSETS... OK",
        "STARTING_RETRO_OS..."
      ]
    },
    notFound: {
      title: 'SECTOR_NOT_FOUND',
      desc: 'The data packet you requested could not be located in the memory banks. It may have been corrupted or deleted by the administrator.',
      reboot: 'REBOOT_SYSTEM',
      header: 'SYSTEM_ERROR'
    }
  },
  CN: {
    nav: {
      HOME: '系统',
      BLOG: '日志',
      PORTFOLIO: '作品',
      CONTACT: '联络'
    },
    home: {
      greeting: '你好_',
      world: '世界',
      role: '创意开发者 // 音视效',
      status: '系统状态: 在线',
      intro: '“构建连接复古模拟温情与现代数字精度的交互界面。”'
    },
    blog: {
      title: '/日志',
      tag: '只读模式',
      readMore: '阅读'
    },
    portfolio: {
      title: '项目归档',
      subtitle: '精选作品 2020-2025',
      launch: '启动项目'
    },
    contact: {
      title: '建立连接',
      subtitle: '发送加密消息',
      systemMsgTitle: '系统消息:',
      systemMsgBody: '当前接收关于自由职业、协作编程及复古硬件讨论的数据包传输。',
      freq: '通讯频率',
      coords: '物理坐标',
      userId: '用户ID',
      enterName: '输入名称',
      enterEmail: '输入邮箱',
      packet: '数据包内容',
      typeMsg: '在此输入消息...',
      transmit: '发送数据',
      sending: '上传中...',
      sent: '传输完成'
    },
    loading: {
      bootTitle: '系统启动 ' + APP_CONFIG.version,
      loading: '加载资源...',
      logs: [
        "BIOS 自检... 完成",
        "加载内核... 完成",
        "挂载驱动器... 完成",
        "初始化图形... 完成",
        "加载资源... 完成",
        "正在启动 " + APP_CONFIG.name + "..."
      ]
    },
    notFound: {
      title: '扇区未找到',
      desc: '您请求的数据包无法在内存库中定位。它可能已被管理员损坏或删除。',
      reboot: '重启系统',
      header: '系统错误'
    }
  }
};

// ==========================================
// 3. 博客文章 (BLOG POSTS)
// 在这里添加、修改或删除你的博客文章
// ==========================================
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

// ==========================================
// 4. 作品集 (PROJECTS)
// 在这里展示你的项目作品
// ==========================================
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