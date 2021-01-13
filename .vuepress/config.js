const sidebar = require('./siderbar.js');
module.exports = {
    "title": "去年夏天",
    "description": "去年夏天的博客",
    "dest": "public",
    // "base": '/my_blog/',
    "base": "/",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    // 插件
    "plugins": ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting"],
    // 主题
    "theme": "reco",
    // 主题配置
    "themeConfig": {
        "mode": 'light',
        "subSidebar": 'auto',
        // 评论配置
        "valineConfig": {
            "appId": 'EX7Hwx6C1KWBtvUCWHKj3CXi-gzGzoHsz',
            "appKey": '2MjJsBaPxWhi8LmoJsIMojyk',
        },
        // 导航
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            // {
            //   "text": "Docs",
            //   "icon": "reco-message",
            //   "items": [
            //     {
            //       "text": "vuepress-reco",
            //       "link": "/docs/theme-reco/"
            //     }
            //   ]
            // },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/huage404",
                        "icon": "reco-github"
                    }
                ]
            }
        ],
        sidebar,
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "目录索引"
            },
            "tag": {
                "location": 3,
                "text": "标签索引"
            }
        },
        "friendLink": [
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        // 开启搜索
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        // 侧边栏名字
        "author": "去年夏天",
        // 作者头像
        "authorAvatar": "/avatar.jpg",
        "record": "2021 加油！！！",
        "startYear": "2021"
    },
    "markdown": {
        "lineNumbers": true
    }
}
