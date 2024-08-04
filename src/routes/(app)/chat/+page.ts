import { error, type Load } from '@sveltejs/kit';

const resourceUrl = process.env.NODE_ENV === 'production' 
? "https://chaxback.chax.workers.dev"
: "http://localhost:8787";

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ fetch }) => {
	const chatResourceUrl = `${resourceUrl}/chat`;
	const res = await fetch(chatResourceUrl);
    const messageResourceUrl = `${resourceUrl}/chat/F2yEZsidaaIA3gKHHZoIj/zt4hyS3bpE5SM0agIGmDM`;
    const res2 = await fetch(messageResourceUrl);

	if (res.ok && res2.ok) {
		return {
			status: res.status,
			hubs: await res.json(),
            messages: await res2.json()
		};
	}

	return {
		status: res.status,
		error: error(404, `Could not load hubs`)
	};
};
