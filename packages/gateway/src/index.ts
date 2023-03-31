import fastifyWebsocket from "@fastify/websocket";
import fastify from "fastify";

const app = fastify({ logger: true });
app.register(fastifyWebsocket);
app.register(async function (_) {
	app.get("/", { websocket: true }, (connection, req) => {
		// TODO: handle websocket events
	});
});

app.listen({ port: 3001 }, (err) => {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
});
