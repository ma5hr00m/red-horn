<script>
  import { fly } from 'svelte/transition';
  import FriendCard from "$lib/components/card/FriendCard.svelte";
  export const friendsList = [
  { name: 'ek1ng', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=761042182&s=160', href: 'https://ek1ng.com', description: 'Web方向CTFer，安全行业' },
  { name: 'ripple', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3331491980&s=160', href: 'https://rippleqaq.top', description: '学霸，中国时区美国作息' },
  { name: 'ch405', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1286518974&s=160', href: 'https://ch405.live', description: 'Misc方向CTFer，面面俱到' },
  { name: 'zbwer', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1641064392&s=160', href: 'https://blog.zbwer.work', description: 'Frontend Web Developer' },
  { name: 'Ec3o', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2499302531&s=160', href: 'https://ec3o.fun', description: 'Web方向CTFer' },
  { name: 'mysid', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=821675766&s=160', href: 'http://mysid.top', description: 'Web方向CTFer，渗透/Java特攻' },
  { name: 'Pinpe', avatar: 'https://agu-img.oss-cn-hangzhou.aliyuncs.com/blog/a2bb7859939871165f438ab2f96d72b8343dae41.jpg%40150w_150h.jpg', href: 'https://pinpe.top', description: '一个属于自己的云朵' },
  { name: 'smilkes', avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1937683643&s=160', href: 'http://smilkes.site', description: '机器学习研究' },
];
</script>

<div class="container">
  <section>
    <h2>志趣相仿的朋友们</h2>
    <p></p>
  </section>
  <div class="friends" in:fly={{ duration: 300, y: -1, opacity: 0 }} out:fly={{ duration: 300 }}>
    {#each friendsList as friend}
      <FriendCard friend={friend}></FriendCard>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    width: fit-content;
    height: fit-content;
		margin: 0 auto;
		padding: 2rem;
    background: #fff;
    color: #4f4a4a;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .5rem;
    border: solid 1px #ddd;
  }
  section {
    margin-bottom: 2rem;
  }
  .friends {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem 2rem;
    justify-content: start;
  }
</style>