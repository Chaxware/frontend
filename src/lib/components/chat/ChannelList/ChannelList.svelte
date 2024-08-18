<script lang="ts">
	import { Hash } from 'lucide-svelte';
	import Channel from './Channel.svelte';

	export let channels = [{ name: 'General' }, { name: 'Random' }],
		hub;
</script>

<div class="channel-list">
	<div class="flex items-center gap-2 text-[#cdd6f4]">
		<div class="rounded bg-[#313244] p-1">
			<Hash size={18} color="#A6ADC8" />
		</div>
		Channels
	</div>
	<div class="flex flex-col gap-2 pt-2">
		{#each hub.channels as channel}
			<Channel {channel} />
		{/each}
	</div>
</div>
