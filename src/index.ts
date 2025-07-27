import { Container, getContainer } from '@cloudflare/containers';

export class JavaContainer extends Container {
	defaultPort = 8080;
	sleepAfter = '2m';
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const container = getContainer(env.CONTAINER);
		return await container.fetch(request);
	},
} satisfies ExportedHandler<Env>;
