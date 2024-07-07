<script>
  import SocialLink from "@/components/socialLink.svelte";
  import Icon from '@iconify/svelte';

  const socialLinks = [
    {
      icon: "hugeicons:github",
      title: "GitHub",
      link: "https://github.com/ma5hr00m",
    },
    {
      icon: "hugeicons:new-twitter",
      title: "Twitter",
      link: "https://x.com/Usami_Kinoko",
    },
    {
      icon: "hugeicons:notebook-02",
      title: "Blog",
      link: "https://ma5hr00m.github.io",
    },
    {
      icon: "hugeicons:colors",
      title: "Pixiv",
      link: "https://www.pixiv.net/users/86286425",
    },
  ];
</script>

<header>
  <div class="notice">
    <span></span>
    <span>绝赞开发中</span>
  </div>
</header>
<div class="container">
  <main>
    <div class="profile">
      <div class="avatarContainer">
        <img class="avatar" src="src/assets/avatar.webp" alt="avatar" />
      </div>
      <div class="profileContent">
        <h1 class="name">Usami Kinoko</h1>
        <p class="oldName">
          <span>旧昵称 Ma5hr00m</span>
          <span>旧昵称拼写比较麻烦，不方便记忆</span>
        </p>
        <section class="description">
          <p>杭州某大学在读本科生，网络工程专业</p>
          <p>Vidar-Team & HDU Help 成员，主攻 <b class="bold">Web 安全</b>和 <b class="bold">Web 前后端开发</b></p>
          <p>日常折腾各种技术，热爱分享，喜欢 UI/UX 设计以及像素艺术</p>
        </section>
      </div>
    </div>
    <div class="socialLinks"> 
      <ul>
        {#each socialLinks as socialLink}
          <li>
            <SocialLink {socialLink} />
          </li>
        {/each}
      </ul>
    </div>
  </main>
</div>
<footer>
  <p>© 2024 Usami Kinoko. All rights reserved.</p>
</footer>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .profile {
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .avatarContainer {
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    width: 10rem;
    height: 10rem;
    border-radius: .5rem;
    transition: all .3s cubic-bezier(0.5, 2, 0.5, 1);
  }
  .avatar:hover {
    transform: translateY(-1rem);
  }
  .name, .oldName, .description {
    font-family: 'lxgw';
    text-align: center;
  }
  .name {
    font-weight: 700;
    font-size: 2.5rem;
    color: #EFB621;
    margin: 0 1rem .25rem 1rem;
    transition: color .3s;
  }
  .oldName {
    position: relative;
    height: 1rem;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 1rem;
    color: #aaa;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .oldName > :first-child,
  .oldName > :last-child {
    transition: opacity .6s;
  }
  .oldName > :first-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  .oldName > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .oldName:hover > :first-child {
    opacity: 0;
  }
  .oldName:hover > :last-child {
    opacity: 1;
  }
  .description {
    letter-spacing: 1px;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
    margin: 0 2rem;
  }
  .bold {
    position: relative;
    font-weight: 700;
    color: #EFB621;
  }
  .bold:hover {
    cursor: pointer;
  }
  .bold::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #EFB621;
    transition: width .3s;
  }
  .bold:hover::after {
    width: 100%;
  }
  .socialLinks {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    gap: 2rem;
    margin: 0 6rem;
    flex-wrap: wrap; /* 允许子元素换行 */
    justify-content: center;
    margin-bottom: .5rem;
  }
  footer {
    position: fixed;
    bottom: 1.25rem;
    color: #777;
  }
  header {
    position: fixed;
    top: 2rem;  
  }
  .notice {
    display: flex;
    align-items: center;
  }
  .notice > :first-child {
    position: relative;
    height: .6rem;
    width: .6rem;
    border-radius: 50%;
    margin-right: .5rem;
    animation: blink 2s infinite;
  }
  @keyframes blink {
    0% { background-color: #4AE235; }
    50% { background-color: #2f552a; }
    100% { background-color: #4AE235; }
  }
  .notice > :last-child {
    letter-spacing: 2px;
    font-size: 1rem;
    font-weight: 400;
    color: #eee;
  }
</style>