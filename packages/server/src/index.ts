import FastifySwagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";
import fastify, { FastifyInstance } from "fastify";
import fastifyNow from "fastify-now";
import path from "path";

const app: FastifyInstance = fastify({ logger: true });
app.register(FastifySwagger, {
	openapi: {
		info: {
			title: "Spacebar API",
			description: "",
			version: "0.0.1",
		},
		externalDocs: {
			url: "https://spacebar.chat",
			description: "Find more info here",
		},
		servers: [
			{
				url: "/",
				description: "Development server",
			},
		],
		tags: [],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
	},
});
app.register(SwaggerUI);
app.register(fastifyNow, {
	routesFolder: path.join(__dirname, "./routes"),
	pathPrefix: "/api",
});

(async () => {
	await app.ready();
	await app.listen({ port: 3000 });
})();
