<script lang=ts>
	import { ExternalLink } from 'lucide-svelte';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import { Separator } from '@/components/ui/separator';

</script>

<div class="flex h-[80vh] w-screen flex-col items-center justify-center gap-2 text-center">
	<!-- <a href="/changelog">
		<Button class="flex flex-row items-center gap-2 border-blue-900 text-blue-400" variant="outline"
			>Alpha v0.0.1 released
			<ExternalLink size={18} />
		</Button>
	</a> -->
	<h1 class="text-4xl sm:text-7xl font-bold tracking-tight">Customizable, open-source<br /> chat app.</h1>
    <p class="text-gray-500">Give Chax a try - start chatting now</p>
    <Separator class="invisible my-2" />
	<div class="h-fit flex gap-2 p-4 border border-blue-600/40 border-dashed flex-row lg:w-1/3">
		<Input placeholder="Name" class="w-full border-gray-700"/>
        <a href="/chat"><Button>Chat now</Button></a>
	</div>
</div>
