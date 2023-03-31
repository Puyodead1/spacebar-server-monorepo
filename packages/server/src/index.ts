import Swagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";
import fastify, { FastifyInstance } from "fastify";
import fastifyNow from "fastify-now";
import path from "path";

const app: FastifyInstance = fastify({ logger: true });

(async () => {
	await app.register(fastifyNow, {
		routesFolder: path.join(__dirname, "./routes"),
		pathPrefix: "/api",
	});
	await app.register(Swagger, {
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
	await app.register(SwaggerUI);

	app.listen({ port: 3000 });
})();
