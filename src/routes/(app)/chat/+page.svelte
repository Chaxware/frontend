<script lang="ts">
	import { Paperclip, Send } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex">
	<div class="flex h-dvh border-r-[1px] border-gray-600 w-80 w">
		<div class="border-r-[1px] border-gray-600">sidebar</div>
		<div class="border-b-[1px] border-gray-600 h-fit w-full py-4 px-4">{`{serverName}`}</div>
	</div>
	<div class="flex flex-1 flex-col">
		<div class="border-b-[1px] border-gray-600 py-4 px-8">{`{channelName}`}</div>
        <div class="py-4 px-8 flex flex-col flex-1">
            <div class="flex-1">
                messages
            </div>
            <div class="messageBox">
                <div class="fileUploadWrapper">
                  <label for="file">
                    <Paperclip  />
                  </label>
                  <input type="file" id="file" name="file" />
                </div>
                <input required placeholder="Write some sweet words..." type="text" id="messageInput" />
                <button id="sendButton">
                    <Send />
                </button>
              </div>
            
        </div>
	</div>
</div>

<style lang="scss">

.messageBox {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid  #4b5563;
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
