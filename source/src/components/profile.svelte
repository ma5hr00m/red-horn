<script>
	import SocialLink from '@/components/socialLink.svelte';

	const socialLinks = [
		{
			icon: 'hugeicons:github',
			title: 'GitHub',
			link: 'https://github.com/ma5hr00m'
		},
		{
			icon: 'hugeicons:new-twitter',
			title: 'Twitter',
			link: 'https://x.com/Usami_Kinoko'
		},
		{
			icon: 'hugeicons:notebook-02',
			title: 'Blog',
			link: 'https://ma5hr00m.github.io'
		},
		{
			icon: 'hugeicons:colors',
			title: 'Pixiv',
			link: 'https://www.pixiv.net/users/86286425'
		}
	];
</script>

<div class="profile">
  <div class="avatarContainer">
    <img class="avatar" src="./src/assets/avatar.webp" alt="avatar" />
  </div>
  <div class="profileContent">
    <h1 class="name">Usami Kinoko</h1>
    <p class="oldName">
      <span>旧昵称 Ma5hr00m</span>
      <span>旧昵称拼写比较麻烦，不方便记忆</span>
    </p>
    <section class="description">
      <p>杭州某大学在读本科生，网络工程专业</p>
      <p>
        Vidar-Team & HDU Help 成员，主攻 <b class="bold">Web 安全</b>和
        <b class="bold">Web 前后端开发</b>
      </p>
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