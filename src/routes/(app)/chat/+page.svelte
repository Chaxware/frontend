<script lang="ts">
	import { Paperclip, Search, Send, Hash } from 'lucide-svelte';
	import type { PageData } from './$types';
	import Message from '@/components/chat/Message.svelte';
	import ChannelList from '@/components/chat/ChannelList/ChannelList.svelte';

    let ChannelsList = [
        { name: "General" },
        { name: "Random" },
        { name: "Design" },
        { name: "Development" },
        { name: "Marketing" },
        { name: "Sales" },
        { name: "Support" },
        { name: "Management" },
    ];

	export let data: PageData;
</script>

<div class="flex">
	<div class="w flex h-dvh w-80 border-r-[1px] border-gray-600">
		<div class="border-r-[1px] border-gray-600">sidebar</div>
		<div class="w-full">
			<div class="border-b-[1px] border-gray-600 px-4 py-4">{`{serverName}`}</div>
			<div class="p-2">
				<div class="searchBox">
					<Search size={18} color="#A6ADC8" />
					<input required placeholder="Search" type="text" id="searchInput" />
				</div>
				<div class="pt-4">
                    <ChannelList channels={ChannelsList}/>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-1 flex-col">
		<div class="border-b-[1px] border-gray-600 px-8 py-4">{`{channelName}`}</div>
		<div class="flex flex-1 flex-col px-8 py-4">
			<div class="flex flex-1 flex-col justify-end gap-4 pb-4">
				<Message message="How you doing?" />
				<Message message="I am doing fine. What about you?" />
				<Message message="I am fine too. How is the project coming along?" />
				<Message message="Which project?" />
				<Message message="Chax the chat app" />
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
