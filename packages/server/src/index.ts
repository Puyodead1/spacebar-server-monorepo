import Swagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";
import Fastify, { FastifyInstance } from "fastify";
import { registerRoutes } from "./loader";

const fastify: FastifyInstance = Fastify({ logger: true });

(async () => {
	await registerRoutes(fastify);
	await fastify.register(Swagger, {
		swagger: {
			swagger: "3.1.0",
			info: {
				title: "Spacebar API",
				description: "",
				version: "0.0.1",
			},
			externalDocs: {
				url: "https://spacebar.chat",
				description: "Find more info here",
			},
			consumes: ["application/json"],
			produces: ["application/json"],
			tags: [],
			definitions: {},
			securityDefinitions: {
				bearer: {
					type: "apiKey",
					name: "bearer",
					in: "header",
				},
			},
		},
	});
	await fastify.register(SwaggerUI);

	fastify.listen({ port: 3000 });
})();
