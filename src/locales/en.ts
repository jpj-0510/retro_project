import { APP_CONFIG } from '../config';

export const EN_TRANSLATIONS = {
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
};
