<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import Button from './ui/button/button.svelte';
</script>

<nav class="">
	<div
		class="sticky top-0 mx-auto flex max-w-screen-xl flex-row items-center justify-between gap-2 px-8 py-6"
	>
		<a href="/">
			<img src={logo} alt={'Chax logo'} width={50} />
		</a>
		<div class="space-x-6">
			<a href="/about">About</a>
			<a href="/safety">Safety</a>
			<a href="/blog">Blog</a>
		</div>
		<Button class="text-white">Join</Button>
	</div>
</nav>
