import { redirect, type Load } from '@sveltejs/kit';
import { hub, channel, messages } from '@/components/chat/stores';

const src_url =
	process.env.NODE_ENV === 'production'
		? 'https://chaxback.chax.workers.dev'
		: 'http://localhost:3000';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ fetch, params }) => {
	const msg_src_url = `${src_url}/chat/${params.hub}/${params.channel}`;

	const hub_res = fetch(`${src_url}/chat/${params.hub}`).then((res) => res.json());

	const hub_list_res = fetch(`${src_url}/chat`).then((res) => res.json());

	const [hub_res_data, hub_list_data] = await Promise.all([hub_res, hub_list_res]);

    hub.set(hub_res_data);

    console.log(hub_list_data)

	if (params.channel === undefined) {
        console.log(hub_res_data.channels[0].id)
		redirect(301, `/chat/${params.hub}/${hub_res_data.channels[0].id}`);
	}

	if (params.channel !== undefined) {
		channel.set(
			hub_res_data.channels.find((channel: { id: string }) => channel.id === params.channel)
		);
		const msgRes = await fetch(msg_src_url).then((res) => res.json());
		messages.set(msgRes.messages);
	}

	return {
		status: 200,
		hubs: hub_list_data.hubs
	};
};
