# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# RetroDeck 个人作品集网站使用手册

欢迎使用 **RetroDeck**！这是一款基于 React 和 Tailwind CSS 构建的复古未来主义风格个人网站。

## 1. 快速开始

### 安装与运行
如果你已经按照之前提供的步骤下载了代码：

1.  打开终端，进入项目目录。
2.  运行 `npm install` 安装依赖。
3.  运行 `npm run dev` 启动本地服务器。

---

## 2. 网站配置指南

所有的核心内容管理都集中在 `src/constants.ts` 文件中。你不需要深入修改组件代码即可更新网站内容。

### 修改基本信息 (网站名称、Logo、联系方式)
打开 `src/constants.ts`，找到顶部的 **APP_CONFIG** 部分：

```typescript
export const APP_CONFIG = {
  name: 'RETRO_DECK',      // 显示在 Loading 画面和顶部状态栏
  version: 'v2.0',         // 网站版本号
  initials: 'RD',          // 侧边栏显示的 Logo 缩写 (2-3个字母)
  email: 'hello@retrodeck.net', // 在“联系我”页面显示的邮箱
  location: 'San Francisco, CA' // 在“联系我”页面显示的地址
};
```

### 添加/修改博客文章
在 `src/constants.ts` 中找到 **BLOG_POSTS** 数组。
你可以直接复制一个对象来添加新文章：

```typescript
{
  id: '4', // 确保 ID 唯一
  title: 'My New Post Title', // 英文标题
  titleCN: '我的新文章标题',   // 中文标题
  date: '2024-03-21',
  excerpt: 'English summary of the post...',
  excerptCN: '文章的中文摘要...',
  readTime: '5 MIN',
  tags: ['REACT', 'LIFE']
}
```
**注意**：目前的博客系统是“只读展示”模式，点击文章不会跳转（符合复古系统的“日志查看”风格）。如果你需要跳转到外部博客（如掘金、知乎），可以在 `types.ts` 的 `BlogPost` 接口中添加 `link` 字段，并修改 `views/Blog.tsx` 来使用 `<a>` 标签包裹标题。

### 修改作品集 (Projects)
在 `src/constants.ts` 中找到 **PROJECTS** 数组。

```typescript
{
  id: '5',
  title: 'PROJECT_NAME',
  description: 'English description.',
  descriptionCN: '中文项目描述。',
  techStack: ['Python', 'AI'], // 技术栈标签
  imageUrl: 'https://你的图片地址.com/image.jpg',
  link: 'https://github.com/yourname/project' // 项目链接
}
```

### 修改界面文本 (中英文翻译)
在 `src/constants.ts` 中找到 **TRANSLATIONS** 对象。
这里包含了 `EN` (英文) 和 `CN` (中文) 两套完整的界面文案。你可以随意修改任何你觉得不合适的翻译。

---

## 3. 常见问题

**Q: 如何修改网页浏览器标签页上的标题？**
A: 打开根目录下的 `index.html`，修改 `<title>` 标签的内容：
```html
<title>你的名字 - 个人主页</title>
```

**Q: 图片加载不出来怎么办？**
A: 确保 `constants.ts` 中的 `imageUrl` 是有效的网络链接。如果你有本地图片，请将图片放入 `public/` 文件夹，然后使用 `/filename.jpg` 作为路径。

**Q: 404 页面怎么测试？**
A: 在顶部状态栏有一个 "ERR_TEST" 按钮（仅在大屏幕显示），点击即可进入 404 故障页面效果。

---

祝你使用愉快！
