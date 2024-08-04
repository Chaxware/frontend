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
        {#each hubs as hub}
            <div class="flex flex-col">
                <img
                    src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyfGVufDB8fDB8fHww"
                    alt=""
                    class="aspect-square cursor-pointer rounded-full object-cover"
                />
                <span class="mt-2  text-center text-xs">{hub.name}</span>
            </div>
        {/each}
    </div>
    <div class="mt-auto flex flex-col items-center gap-4">
        <Settings color="#A6ADC8" />
        <hr class="w-full border-gray-600">
        <img
            src="https://mighty.tools/mockmind-api/content/human/57.jpg"
            alt="pfp"
            class="rounded-full"
        />
    </div>
</div>