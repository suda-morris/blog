module.exports = {
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容",
            buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga': 'UA-135980716-1'
    },
    '@vuepress/medium-zoom': true,
    'mathjax': true,
}