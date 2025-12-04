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
      { text: 'blog', link: '/posts'}

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
      ],
      '/posts': [
        {
          text: 'blog',
          items: set_sidebar("posts")
        }
      ]
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1764750794549" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1726" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1727"></path></svg>'
        },
        link: "https://gitee.com/simonxu666",
      },
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
