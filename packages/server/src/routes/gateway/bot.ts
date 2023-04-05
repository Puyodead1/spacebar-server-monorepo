import { SessionStartLimit } from "@spacebarchat/utils";
import { NowRequestHandler } from "fastify-now";

type Get = NowRequestHandler<{
	Reply: {
		url: string;
		shards: number;
		session_start_limit: SessionStartLimit;
	};
}>;

export const GET: Get = async (req, rep) => {
	return {
		url: "ws://localhost:3001/",
		shards: 9,
		session_start_limit: {
			total: 1000,
			remaining: 999,
			reset_after: 14400000,
			max_concurrency: 1,
		},
	};
};

GET.opts = {
	schema: {
		description:
			"Returns an object based on the information in Get Gateway, plus additional metadata that can help during the operation of large or sharded bots. Unlike the Get Gateway, this route should not be cached for extended periods of time as the value is not guaranteed to be the same per-call, and changes as the bot joins/leaves guilds.",
		security: [{ bearerAuth: [] }],
		response: {
			200: {
				type: "object",
				properties: {
					url: { type: "string" },
					shards: { type: "number" },
					session_start_limit: {
						type: "object",
						properties: {
							total: { type: "number" },
							remaining: { type: "number" },
							reset_after: { type: "number" },
							max_concurrency: { type: "number" },
						},
					},
				},
				example: {
					url: "ws://localhost:3001/",
					shards: 9,
					session_start_limit: {
						total: 1000,
						remaining: 999,
						reset_after: 14400000,
						max_concurrency: 1,
					},
				},
			},
		},
	},
};
