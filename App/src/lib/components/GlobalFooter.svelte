<script>
	import SocialLinksList from './socialLinksList.svelte';
	export let socialLinks = [
		{
			href: 'https://x.com/Usami_Kinoko',
			title: 'Twitter',
		},
		{
			href: 'https://github.com/ma5hr00m',
			title: 'GitHub',
		}
	];
</script>

<footer>
  <div class="container">
    <section>
      <p>
        &copy; 2024 Usami Kinoko. All rights reserved.
      </p>
    </section>
    <SocialLinksList {socialLinks} />  
  </div>
</footer>

<style lang="scss">
  footer {
    padding: 0 9rem 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .container {
    padding: 1rem 2rem;
    background: #fff;
    border-radius: 0 0 .5rem .5rem;
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
		min-width: 980px;
		max-width: 980px;
  }
</style>