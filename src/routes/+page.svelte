<script>
	import { ExternalLink } from 'lucide-svelte';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import { Separator } from '@/components/ui/separator';
</script>

<div class="flex h-[80vh] w-screen flex-col items-center justify-center gap-2 text-center">
	<a href="/changelog">
		<Button class="flex flex-row items-center gap-2 border-blue-900 text-blue-400" variant="outline"
			>Alpha v0.01 released
			<ExternalLink size={18} />
		</Button>
	</a>
	<h1 class="text-7xl font-bold tracking-tight">Customizable, open-source<br /> chat app.</h1>
    <p class="text-gray-500">Give chax a try - make an account.</p>
    <Separator class="invisible my-2" />
	<div class="h-fit flex gap-2 p-4 border border-blue-600/40 border-dashed flex-row lg:w-2/4">
		<Input placeholder="Email" class="w-full border-gray-700" />
        <Button>Get started</Button>
	</div>
</div>
