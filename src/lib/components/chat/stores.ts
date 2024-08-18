import { writable } from 'svelte/store';

const hub: any = writable();
const channel: any = writable();
const messages: any = writable();

export { hub, channel, messages };
