<script lang="ts">
	import { Paperclip, Search, Send } from 'lucide-svelte';
	import type { PageData } from './$types';
	import Message from '@/components/chat/Message.svelte';
	import ChannelList from '@/components/chat/ChannelList/ChannelList.svelte';
    import Sidebar from '@/components/chat/Sidebar.svelte';

	let ChannelsList = [
		{ name: 'General' },
		{ name: 'Random' },
		{ name: 'Design' }
	];

    let profiles: any = {
        "Shamblonaut": "https://mighty.tools/mockmind-api/content/human/57.jpg",
        "FoodieFan": "https://mighty.tools/mockmind-api/content/human/58.jpg",
        "TasteTester": "https://mighty.tools/mockmind-api/content/human/59.jpg",
        "PastryPro": "https://mighty.tools/mockmind-api/content/human/60.jpg",
        "SpiceQueen": "https://mighty.tools/mockmind-api/content/human/61.jpg",
        "ChefMike": "https://mighty.tools/mockmind-api/content/human/62.jpg",
        "BakerBella": "https://mighty.tools/mockmind-api/content/human/63.jpg",
        "FoodLover99": "https://mighty.tools/mockmind-api/content/human/64.jpg",
    }
	export let data: PageData;
    const {hubs, messages} = data;
</script>

<div class="flex">
	<div class="w flex h-dvh w-80 border-r-[1px] border-gray-600">
		<Sidebar {hubs}/>
		<div class="w-full">
			<div class="border-b-[1px] border-gray-600 px-4 py-4">{hubs[0].name}</div>
			<div class="p-2">
				<div class="searchBox">
					<Search size={18} color="#A6ADC8" />
					<input required placeholder="Search" type="text" id="searchInput" />
				</div>
				<div class="pt-4">
					<ChannelList channels={ChannelsList} {hubs}/>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-1 flex-col">
		<div class="border-b-[1px] border-gray-600 px-8 py-4">{hubs[0].channels[0].name}</div>
		<div class="flex flex-1 flex-col ps-8 pe-7">
			<div class="flex flex-col-reverse overflow-y-scroll pb-4" style="height: calc(100dvh - 9rem);">
                {#if messages.length === 0}
                    <div class="text-center text-gray-400">No messages yet</div>
                {/if}
                {#each messages.slice() as message}
                    <Message user={{name: message.userId, profile: profiles[message.userId]}} message={message.text} timestamp={message.createdAt}/>
                {/each}
			</div>
			<div class="messageBox">
				<div class="fileUploadWrapper">
					<label for="file">
						<Paperclip color="#A6ADC8" />
					</label>
					<input type="file" id="file" name="file" />
				</div>
				<input required placeholder="Write some sweet words..." type="text" id="messageInput" />
				<button id="sendButton">
					<Send color="#A6ADC8" />
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.searchBox {
		display: flex;
		padding: 8px 10px;
		border-radius: 4px;
		font-size: 0.9rem;
		background-color: #313244;
	}

	#searchInput {
		width: 100%;
		height: 100%;
		background-color: transparent;
		outline: none;
		border: none;
		padding-left: 10px;
		color: white;
		flex: 1;
	}

	.messageBox {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12px 20px;
		border-radius: 4px;
		border: 1px solid #4b5563;
	}

	#file {
		display: none;
	}

	#messageInput {
		width: 200px;
		height: 100%;
		background-color: transparent;
		outline: none;
		border: none;
		padding-left: 10px;
		color: white;
		flex: 1;
	}
</style>
