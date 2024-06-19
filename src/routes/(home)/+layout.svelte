<script>
	import Navbar from '@/components/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<main class="text-white dark:bg-[#1e1e2e]">
	<ModeWatcher />
	<Navbar />
	<slot class=""></slot>
</main>
