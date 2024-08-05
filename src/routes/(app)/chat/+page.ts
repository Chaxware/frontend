import { error, type Load } from '@sveltejs/kit';

const resourceUrl = process.env.NODE_ENV === 'production' 
? "https://chaxback.chax.workers.dev"
: "http://localhost:8787";

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ fetch }) => {    
    
    const chatRequest = async () => {
        const chatResourceUrl = `${resourceUrl}/chat`;
        const chatRes = await fetch(chatResourceUrl);
        const chatData = await chatRes.json();
        return chatData.hubs;
    }

    const messageRequest = async () => {
        const messageResourceUrl = `${resourceUrl}/chat/F2yEZsidaaIA3gKHHZoIj/zt4hyS3bpE5SM0agIGmDM`;
        const messageRes = await fetch(messageResourceUrl);
        const messageData = await messageRes.json();
        return messageData.messages;
    }
    
    if (chatRequest && messageRequest) {
        return {
            status: 200,
            hubs: await chatRequest(),
            messages: await messageRequest()
        };
    }
    return error(500, "Couldn't load hubs");
};
