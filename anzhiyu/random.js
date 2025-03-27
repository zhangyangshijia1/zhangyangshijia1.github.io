var posts=["smallhao/5个技巧教你如何与AI高效对话，让DeepSeek成为你的超级助手！/","smallhao/从图灵测试到GPT-4o：AI用70年完成了人类5000年的“进化/","smallhao/BurpSuite使用介绍（二）/","smallhao/Suite使用介绍（一）/","smallhao/MySQL注入技巧/","smallhao/内网渗透-免杀/","smallhao/平台搭建-DNSLog/","smallhao/信息收集-敏感信息收集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };