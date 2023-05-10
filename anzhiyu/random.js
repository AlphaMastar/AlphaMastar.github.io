var posts=["posts/2c23d359.html","posts/9daba997.html","posts/980297d6.html","posts/4a17b156.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单的博客框架"},{"name":"Anzhiyu","link":"https://github.com/anzhiyu-c/hexo-theme-anzhiyu","avatar":"https://img01.anzhiy.cn/useruploads/135/2023/04/16/643b8a5f8a25b.png","descr":"新一代亚克力主题","siteshot":"https://img01.anzhiy.cn/useruploads/135/2023/04/16/643b8b8de1c1c.png"},{"name":"安知鱼`Blog","link":"https://anzhiy.cn/","avatar":"https://image.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"AkilarのBlog","link":"https://akilar.top/","avatar":"https://avatars.githubusercontent.com/u/48801131?v=4","descr":"充满科技感的博客","siteshot":"https://img01.anzhiy.cn/useruploads/135/2023/04/16/643b83a15a6fc.png"},{"name":"bilibili","link":"https://www.bilibili.com/","avatar":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13901043311%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668567404&t=5cfed1dbe7fa21566de731681b6f5e48","descr":"中国最大的二次元社区"},{"name":"Weibo","link":"https://www.weibo.com/","avatar":"https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png","descr":"中国最大厕所"},{"name":"Twitter","link":"https://twitter.com/","avatar":"https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png","descr":"社交分享平台"},{"name":"GLST","link":"https://steamcommunity.com/dev/managegameservers","avatar":"https://img01.anzhiy.cn/useruploads/135/2023/04/16/643b7f78e567d.png","descr":"CSGO社区服务器申请","siteshot":"https://img01.anzhiy.cn/useruploads/135/2023/04/16/643b7f7942305.png"}];
    var refreshNum = 1;
    var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
    function addFriendLinksInFooter() {
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };