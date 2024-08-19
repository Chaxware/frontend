<script lang="ts">
	let message;
	let timestamp = '2024-08-04T18:20:39.000Z';

	let date = Intl.DateTimeFormat('en-US', {
		dateStyle: 'short',
		timeStyle: 'short'
	}).format(new Date(timestamp));

	export { message, timestamp };
</script>

<div class="message flex rounded-xl p-3 hover:bg-gray-900">
	<img src={`https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=c0aede,d1d4f9,ffdfbf,ffd5dc,b6e3f4&seed=${message.userId}`} alt="user profile" />
	<div class="flex flex-col">
		<div>
			<span class="name">{message.userId}</span><span class="timestamp ms-2 text-muted">{date}</span>
		</div>
		<span class="message-content">{message.text}</span>
	</div>
</div>

<style lang="scss">
	.message {
		gap: 1rem;
		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}
		.name {
			font-weight: 500;
		}
		.timestamp {
			color: #a6adc8;
			font-size: 0.7rem;
		}
		.message-content {
			color: #cdd6f4;
		}
	}
</style>