<script lang="ts">
	import { Paperclip, Search, Send } from 'lucide-svelte';
	import Message from '@/components/chat/Message.svelte';
	import Sidebar from '@/components/chat/Sidebar.svelte';
	import { hub, channel, messages } from '@/components/chat/stores';
	import ChannelList from '@/components/chat/ChannelList/ChannelList.svelte';
	import { enhance } from '$app/forms';

	export let data: any;
	let { hubs } = data;

	let msg: string = '';
</script>

<div class="flex">
	<div class="w flex h-dvh w-80 border-r-[1px] border-gray-600">
		<Sidebar {hubs} />
		<div class="w-full">
			<div class="border-b-[1px] border-gray-600 px-4 py-4">
				{$hub.name}
			</div>
			<div class="p-2">
				<div class="searchBox">
					<Search size={18} color="#A6ADC8" />
					<input required placeholder="Search" type="text" id="searchInput" />
				</div>
				<div class="pt-4">
					<ChannelList hub={$hub} />
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-1 flex-col">
		<div class="border-b-[1px] border-gray-600 px-8 py-4">
			{$channel.name}
		</div>
		<div class="flex flex-1 flex-col pe-7 ps-8">
			<div
				class="flex flex-col-reverse overflow-y-scroll pb-4"
				style="height: calc(100dvh - 9rem);"
			>
				{#if $messages.length === 0}
					<div class="text-center text-gray-400">No messages yet</div>
				{/if}
				{#each $messages as message}
					<Message {message} timestamp={message.createdAt} />
				{/each}
			</div>
			<div class="messageBox">
				<div class="fileUploadWrapper">
					<label for="file">
						<Paperclip color="#A6ADC8" />
					</label>
					<input type="file" id="file" name="file" />
				</div>
				<form
					method="POST"
					class="flex w-full"
					use:enhance
					on:submit={() => {
						msg = '';
						console.log('cleared');
					}}
				    >
					<input type="hidden" name="userId" value="Shamblonaut" />
					<input
						placeholder="Write some sweet words..."
						type="text"
						name="message"
						id="messageInput"
						bind:value={msg}
						autocomplete="off"
					/>
					<button id="sendButton" type="submit">
						<Send color="#A6ADC8" />
					</button>
				</form>
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
