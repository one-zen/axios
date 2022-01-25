module.exports = {
  lang: 'zh-CN',
  base: '/ts-axios-doc/',
  dest: 'dist',
  title: 'TypeScript 从零实现 axios',
  description: '学习使用 TypeScript 从零实现 axios 库',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // theme: 'reco',
  markdown: {
    code: { lineNumbers: false },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          }
        },
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      {
        text: '初识 TypeScript',
        // link: '/chapter1/',
        collapsable: false,
        children: [
          '/chapter1/README.md',
          '/chapter1/install.md',
          '/chapter1/start.md',
        ],
      },
      {
        text: 'TypeScript 常用语法',
        collapsable: false,
        children: [
          '/chapter2/type',
          '/chapter2/declare',
          '/chapter2/interface',
          '/chapter2/class',
          '/chapter2/function',
          '/chapter2/generic',
          '/chapter2/inference',
          '/chapter2/advance',
        ],
      },
      {
        text: 'ts-axios 项目初始化',
        collapsable: false,
        children: ['/chapter3/require', '/chapter3/init', '/chapter3/base'],
      },
      {
        text: 'ts-axios 基础功能实现',
        collapsable: false,
        children: [
          '/chapter4/url',
          '/chapter4/data',
          '/chapter4/header',
          '/chapter4/response',
          '/chapter4/response-header',
          '/chapter4/response-data',
        ],
      },
      {
        text: 'ts-axios 异常情况处理',
        collapsable: false,
        children: ['/chapter5/error', '/chapter5/enhance'],
      },
      {
        text: 'ts-axios 接口扩展',
        collapsable: false,
        children: [
          '/chapter6/extend',
          '/chapter6/overload',
          '/chapter6/generic',
        ],
      },
      {
        text: 'ts-axios 拦截器实现',
        collapsable: false,
        children: ['/chapter7/interceptor'],
      },
      {
        text: 'ts-axios 配置化实现',
        collapsable: false,
        children: [
          '/chapter8/merge',
          '/chapter8/transform',
          '/chapter8/create',
        ],
      },
      {
        text: 'ts-axios 取消功能实现',
        collapsable: false,
        children: ['/chapter9/cancel'],
      },
      {
        text: 'ts-axios 更多功能实现',
        collapsable: false,
        children: [
          '/chapter10/withCredentials',
          '/chapter10/xsrf',
          '/chapter10/upload-download',
          '/chapter10/auth',
          '/chapter10/validateStatus',
          '/chapter10/paramsSerializer',
          '/chapter10/baseURL',
          '/chapter10/static',
        ],
      },
      {
        text: 'ts-axios 单元测试',
        collapsable: false,
        children: [
          '/chapter11/preface',
          '/chapter11/jest',
          '/chapter11/helpers',
          '/chapter11/requests',
          '/chapter11/headers',
          '/chapter11/instance',
          '/chapter11/interceptor',
          '/chapter11/mergeConfig',
          '/chapter11/cancel',
          '/chapter11/more',
        ],
      },
      {
        text: 'ts-axios 部署与发布',
        collapsable: false,
        children: ['/chapter12/build-deploy', '/chapter12/demo'],
      },
      {
        text: '课程总结',
        collapsable: false,
        children: ['/chapter13/summary'],
      },
    ],
  },
}
