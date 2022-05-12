// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'GEE',
    link: '/GEE/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: 'GEE-Python', link: '/GEE-Python/' },
        ],
      },
	  {
        items: [
          { text: 'GEE-JavaScript', link: '/GEE-JavaScript/' },
        ],
      },
	  {
        items: [
          { text: 'GEE-API', link: '/GEE-API/' },
        ],
      },
      {
        items: [
          { text: 'GEE数据', link: '/GEE-DATA/' },
        ],
      }
    ],
  },
  {
    text: 'PIE',
    link: '/PIE/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: 'PIE-Python', link: '/PIE-Python/' },

        ],
      },
      {
        items: [
          { text: 'PIE-JavaScript', link: '/PIE-JavaScript/' }
        ],
      },
	  {
        items: [
          { text: 'PIE数据', link: '/PIE-DATA/' }
        ],
      }
    ],
  },
  
  {
    text: 'MPC',
    link: '/daohang_web/',
    items: [
      { text: 'MPC-Python', link: '/MPC-Python/' },
      { text: 'MPC数据', link: '/MPC-DATA/'},
    ],
  },
  {
    text: 'AI Earth',
    link: '/AI_Earth/',
    items: [
      { text: 'AI-Earth数据', link: '/AI-Earth-DATA/' },
    ],
  },
  {
    text: '其他',
    items: [
      { text: '网站时间线', link: '/archives/' },
      { text: '关于网站', link: '/about/' },
      { text: '留言板', link: '/pages/8f0e4d/' },
      { text: '遥感论坛', link: 'https://www.rserforum.com/' },
      { text: '我要投稿', link: 'http://pics.landcover100.com/pics//image/20211128020929.png'},
    ],
  },


]
