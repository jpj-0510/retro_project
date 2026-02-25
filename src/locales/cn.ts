import { APP_CONFIG } from '../config';

export const CN_TRANSLATIONS = {
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
};
