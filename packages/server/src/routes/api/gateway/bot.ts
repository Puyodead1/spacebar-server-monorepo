import { RouteOptions } from "fastify";

export const index: RouteOptions = {
	method: "GET",
	url: "/",
	handler: async function (req, res) {
		return { message: "gateway bot" };
	},
};
