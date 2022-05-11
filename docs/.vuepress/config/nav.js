// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'GEE',
    link: '/data-gis/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: 'GEE函数', link: '/data-gis-jichu/' },
        ],
      },
      {
        items: [
          { text: 'GEE数据', link: '/data-gis-shange/' },
        ],
      }
    ],
  },
  {
    text: 'PIE',
    link: '/data-rs/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: 'PIE函数', link: '/data-rs-sat/' },

        ],
      },
      {
        items: [
          { text: 'PIE教程', link: '/data-rs-product/' }
        ],
      }
    ],
  },
  
  {
    text: 'MPC',
    link: '/daohang_web/',
    items: [
      { text: 'MPC函数', link: 'https://www.rserforum.com/' },
      { text: 'MPC教程', link: 'http://pics.landcover100.com/pics//image/20211128020929.png'},
    ],
  },
  {
    text: '其他',
    items: [
      // { text: '常用网站导航', link: '/daohang_web/' },
      // { text: '内容分类', link: '/categories/' },
      { text: '网站时间线', link: '/archives/' },
      { text: '关于网站', link: '/about/' },
      { text: '留言板', link: '/pages/8f0e4d/' },
      { text: '遥感论坛', link: 'https://www.rserforum.com/' },
      { text: '我要投稿', link: 'http://pics.landcover100.com/pics//image/20211128020929.png'},
    ],
  },


]
