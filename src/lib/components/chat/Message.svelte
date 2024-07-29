<script lang="ts">
    let user = {
        name: "John Doe",
        profile: "https://mighty.tools/mockmind-api/content/human/57.jpg",
    };
    let message = "How you doing?";

    export { user, message };
</script>

<div class="message flex">
    <img src="{user.profile}" alt="user profile" />
    <div class="flex flex-col">
        <div>
            <span class="name">{user.name}</span><span class="timestamp ms-2 text-muted"
                >Today at 12:02 AM</span
            >
        </div>
        <span class="message-content">{message}</span>
    </div>
</div>

<style lang=scss>
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