import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-docs-demo/",
  head: [["link", { rel: "icon", href: "/vitepress-docs-demo/logo.png" }]],
  title: "SimonXu Wiki Site",
  description: "A VitePress Site",
  themeConfig: {
    // sidebar: false, // 关闭侧边栏
    // aside: "left", // 设置右侧侧边栏在左侧显示
    outlineTitle: "Directory",
    outline: [2, 6],
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home', items: [
          { text: 'About', link: '/about' },
          { text: 'Contact', link: '/contact' },
          { text: 'Demo', link: '/markdown-demo' }
        ]
      },
      { text: 'Demo', link: '/markdown-demo' },
      { text: 'Front End', link: '/front-end/react' },
      { text: 'Backend End', link: '/backend/rabbitmq' },
      // { text: '两边栏演示', link: '/两边栏演示' }

    ],

    //   sidebar: {
    //     '/':[
    //       {
    //         text: 'Demo',
    //         items: [
    //           { text: 'Markdown Demo', link: '/markdown-demo' },
    //           { text: 'Runtime API Demo', link: '/api-demo' }
    //         ]
    //       }
    //     ],
    //     '/front-end/react/':[
    //     {
    //       text: 'Front End',
    //       items: [
    //         { text: 'react入门', link: '/front-end/react/react入门.md' },
    //         { text: 'react精通', link: '/front-end/react/react镜头.md' },
    //         { text: 'react飞升', link: '/front-end/react/react飞升md' },
    //       ]
    //     }
    //     ]
    // },

    sidebar: {
      '/': [
        {
          text: 'Demo',
          items: [
            { text: 'Markdown Demo', link: '/markdown-demo' },
            { text: 'Runtime API Demo', link: '/api-demo' }
          ]
        }
      ],
      '/front-end/react': [
        {
          text: 'Front End',
          items: set_sidebar("front-end/react")
        }
      ],
      '/backend/rabbitmq': [
        {
          text: 'Backend End',
          items: set_sidebar("backend/rabbitmq")
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SimonXu666j' }
    ],
    footer: {
      copyright: "Copyright@ 2026 Simon Xu"
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }
  },
})
