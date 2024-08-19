<script type="ts">
	import { Bell, Settings } from 'lucide-svelte';

	export let hubs;
</script>

<div class="flex w-24 flex-col items-center gap-8 border-r-[1px] border-gray-600 p-3">
	<img
		src="https://avatars.githubusercontent.com/u/169491224?s=200&v=4"
		alt="server logo"
		class=""
	/>
	<Bell color="#A6ADC8" />
	<div class="flex flex-col gap-4">
		{#each hubs as hubInfo}
			<div class="flex flex-col">
				<a href="/chat/{hubInfo.id}" data-sveltekit-preload-data="tap">
					<img
						src={`https://ui-avatars.com/api/?name=${hubInfo.name}&background=c0aede&color=fff`}
						alt=""
						class="aspect-square cursor-pointer rounded-full object-cover"
					/>
				</a>
				<span class="mt-2 text-center text-xs">{hubInfo.name}</span>
			</div>
		{/each}
	</div>
	<div class="mt-auto flex flex-col items-center gap-4">
		<Settings color="#A6ADC8" />
		<hr class="w-full border-gray-600" />
		<img
			src="https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=c0aede&seed=Shamblonaut"
			alt="pfp"
			class="rounded-full"
            height="50" 
            width="50"
		/>
	</div>
</div>
