import { NowRequestHandler } from "fastify-now";

type Get = NowRequestHandler<{
	Reply: {
		url: string;
	};
}>;

export const GET: Get = async (req, rep) => {
	return {
		url: "ws://localhost:3001",
	};
};

GET.opts = {
	schema: {
		description:
			"Returns an object with a valid WSS URL which the app can use when Connecting to the Gateway. Apps should cache this value and only call this endpoint to retrieve a new URL when they are unable to properly establish a connection using the cached one.",
		response: {
			200: {
				type: "object",
				properties: {
					url: { type: "string" },
				},
				example: {
					url: "ws://localhost:3001/",
				},
			},
		},
	},
};
