// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['script', { src: 'https://cdn.jsdelivr.net/npm/twikoo@1.5.9/dist/twikoo.all.min.js' }],
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '遥感云计算教程网,Google earth engine,PIE Engine,Microsoft Planetary Computer',
    },
  ],
  // [
  //   'meta',
  //   {
  //     name: 'sogou_site_verification',
  //     content: 'y15XLjhNaO',
  //   },
  // ],
  // 添加百度推送


  // 添加百度统计
  // ['meta', { name: 'baidu-site-verification', content: 'xxx' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  
      // 添加百度统计
[
        "script",
        {},
        `
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?652dff4a97cfefc427de3ef43c1e47a5";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
          `
],
//头条js提交收录
[
  "script",
  {},
  `
  var el = document.createElement("script");
  el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?8ae9cf0555bf22d591de9aea9d413c2a30ff9ef735fde1460c92e0e306d05f3ffd9a9dcb5ced4d7780eb6f3bbd089073c2a6d54440560d63862bbf4ec01bba3a";
  el.id = "ttzz";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(el, s);
})();
    `
],
//360js提交收录
[
  "script",
  {},
  `
  var src = "https://s.ssl.qhres2.com/ssl/ab77b6ea7f3fbf79.js";
  document.write('<script src="' + src + '" id="sozz"><\/script>');
  })();
    `
]





  //[
  //  'script',
  //  {
  //    'data-ad-client': 'ca-pub-7828333725993554',
  //    async: 'async',
  //    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //  },
  //], // 网站关联Google AdSense 与 html格式广告支持
]
