import { Container, getContainer } from '@cloudflare/containers';
import { Hono } from 'hono';

export class JavaContainer extends Container {
	defaultPort = 8080;
	sleepAfter = '2m';
}

const app = new Hono<{
	Bindings: { CONTAINER: DurableObjectNamespace<JavaContainer> };
}>();

app.all('/*', async (c) => {
	const container = getContainer(c.env.CONTAINER);
	return await container.fetch(c.req.raw);
});

export default app;
