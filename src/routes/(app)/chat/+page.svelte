<script lang="ts">
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let api: CarouselAPI;

	let count = 0;
	let current = 0;

	$: if (api) {
		count = api.scrollSnapList().length;
		current = api.selectedScrollSnap() + 1;
		api.on('select', () => {
			current = api.selectedScrollSnap() + 1;
		});
	}

	export let data: any;
</script>

<h1 class="p-10 text-center text-5xl font-bold">Hubs discovery</h1>

<Carousel.Root class="m-auto w-full max-w-xs" bind:api>
	<Carousel.Content>
		{#each data.hubs as hub, i (i)}
			<Carousel.Item class="bg-transparent">
				<a href={`/chat/${hub.id}`}>
					<div class="p-1">
						<Card.Root>
							<Card.Content
								class="flex aspect-square flex-col items-center justify-center gap-5 p-6"
							>
								<img
									src={`https://ui-avatars.com/api/?name=${hub.name}&background=c0aede&color=fff`}
									alt="hub avatar"
									class="aspect-square w-2/4 cursor-pointer rounded-full object-cover"
								/>
								<span class="text-4xl font-semibold">{hub.name}</span>
							</Card.Content>
						</Card.Root>
					</div>
				</a>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
<div class="text-muted-foreground py-2 text-center text-sm">
    Hub {current} of {count}
</div>
