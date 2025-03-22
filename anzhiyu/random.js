var posts=["smallhao/BurpSuite使用介绍（二）/","smallhao/Suite使用介绍（一）/","smallhao/MySQL注入技巧/","smallhao/内网渗透-免杀/","smallhao/平台搭建-DNSLog/","smallhao/信息收集-敏感信息收集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };