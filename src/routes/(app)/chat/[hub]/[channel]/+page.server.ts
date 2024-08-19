import type { Actions } from '@sveltejs/kit';

const src_url =
	process.env.NODE_ENV === 'production'
		? 'https://chax-backend.vercel.app'
		: 'http://localhost:3000';

export const actions: Actions = {   
	default: async ({ request, params }) => {
		const formData = await request.formData();
		const message = formData.get('message');
		const userId = formData.get('userId');

		await fetch(`${src_url}/chat/${params.hub}/${params.channel}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ text: message, userId: userId })
		})
			.then((res) => res.json())
	}
};
