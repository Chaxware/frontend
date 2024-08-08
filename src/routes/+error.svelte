<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-[80vh] w-screen flex-col gap-2 text-center pt-28 text-white">
    <h1 class="text-4xl sm:text-7xl font-bold tracking-tight">{$page.status}: {$page.error && $page.error.message} </h1>
    {#if $page.status === 404}
        <p class="text-gray-500">The page you're looking for doesn't exist.</p>
    {:else}
        <p class="text-gray-500">An error occurred while loading this page.</p>
    {/if}
</div>