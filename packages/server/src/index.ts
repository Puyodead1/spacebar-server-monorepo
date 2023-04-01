import FastifyJWT from "@fastify/jwt";
import FastifySwagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";
import Fastify, { FastifyInstance } from "fastify";
import FastifyNow from "fastify-now";
import path from "path";
import prismaPlugin from "./plugins/prisma";

const app: FastifyInstance = Fastify({ logger: true });

app.register(prismaPlugin);
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
app.register(FastifyJWT, {
	secret: "spacebar.chat", // TODO: config
	verify: {
		extractToken: (req) => {
			return req.headers["authorization"];
		},
	},
});
app.register(FastifyNow, {
	routesFolder: path.join(__dirname, "./routes"),
	pathPrefix: "/api",
});

// TODO: validate JWT on all routes unless they have unauthenticated: true

(async () => {
	await app.ready();
	await app.listen({ port: 3000 });
})();
