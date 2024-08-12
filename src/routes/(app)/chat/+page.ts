import { error, type Load } from '@sveltejs/kit';

const resourceUrl =
	process.env.NODE_ENV === 'production'
		? 'https://chaxback.chax.workers.dev'
		: 'http://localhost:8787';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ fetch }) => {
	try {
		const chatResourceUrl = `${resourceUrl}/chat`;
		const messageResourceUrl = `${resourceUrl}/chat/F2yEZsidaaIA3gKHHZoIj/zt4hyS3bpE5SM0agIGmDM`;

		const chatRes = fetch(chatResourceUrl).then((res) => res.json());
		const messageRes = fetch(messageResourceUrl).then((res) => res.json());

		const [chatData, messageData] = await Promise.all([chatRes, messageRes]);
        
		return {
			status: 200,
			hubs: chatData.hubs,
			messages: messageData.messages
		};
	} catch (err) {
		return error(500, "Couldn't load hubs");
	}
};
