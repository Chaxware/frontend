<script lang="ts">
	import { Hash } from 'lucide-svelte';
    export let channelName = "General";
</script>

<div class="channel">
	<div class="rounded bg-[#313244] p-1">
		<Hash size={18} color="#A6ADC8" />
	</div>
	{channelName}
</div>

<style lang="scss">
	.channel {
		display: flex;
		align-items: center;
		padding: 8px 10px;
		border-radius: 4px;
		border: 1px solid #4b5563;
		font-size: 0.9rem;
		gap: 0.5rem;
		color: #cdd6f4;
	}
</style>
