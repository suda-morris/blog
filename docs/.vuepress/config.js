const pluginsConf = require("../../config/pluginsConf");
const navConf = require("../../config/navConf");
const sidebarConf = require("../../config/sidebarConf");

module.exports = {
    title: "suda-morris 个人博客",
    description: "记录学习生活，探索未知领域",
    host: "localhost",
    port: 8080,
    base: "/blog/",
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    plugins: pluginsConf,
    themeConfig: {
        repo: 'suda-morris/blog',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑此页面',
        lastUpdated: '上次更新',
        nav: navConf,
        sidebar: sidebarConf
    }
}
