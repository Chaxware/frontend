<script>
	import "@fontsource/geist-sans"
	import "@fontsource/geist-sans/100.css"
	import "@fontsource/geist-sans/500.css"
	import "@fontsource/geist-sans/600.css"
	import "@fontsource/geist-sans/700.css"
	import "@fontsource/geist-sans/800.css"
	import "@fontsource/geist-sans/900.css"
	import Navbar from '@/components/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
</script>

<main class="text-white dark:bg-[#1e1e2e]">
	<ModeWatcher />
	<Navbar />
	<slot class=""></slot>
</main>
