import { FastifyInstance, RouteOptions } from "fastify";
import { join } from "path";
import { walk } from "walk";

export async function registerRoutes(
	server: FastifyInstance,
	routesDir = "routes",
) {
	return await new Promise((resolve) => {
		const path = join(`${__dirname}/${routesDir}`);
		const files: string[] = [];
		const walker = walk(path);
		walker.on("file", (root, { name }, next) => {
			files.push(join(`${root}/${name}`));
			next();
		});
		walker.on("end", async () => {
			for (const file of files) {
				const routes = await import(file);
				Object.keys(routes).forEach((key) => {
					let route: RouteOptions = routes[key];
					if (!route || !route.method || !route.handler || !route.url)
						return;
					route = route as RouteOptions;
					let clean = file.replace(join(`${__dirname}/routes/`), "");
					clean = clean.substring(0, clean.lastIndexOf("."));
					route.url = `/${clean}${
						route.url.startsWith("/") ? "" : "/"
					}${route.url}`;
					route.url = route.url.replace(/\\/g, "/");
					const paths = route.url.split("/");
					const cPaths: string[] = [];
					for (const path of paths) {
						if (path.startsWith("[") && path.endsWith("]"))
							cPaths.push(`:${path.slice(1, path.length - 1)}`);
						else cPaths.push(path);
					}
					route.url = cPaths.join("/");
					if (route.url.includes("/index/"))
						route.url = route.url.replace("/index/", "/");
					if (route.url.endsWith("/"))
						route.url = route.url.slice(0, route.url.length - 1);
					if (route.url.length < 1) route.url = "/";
					server.route(routes[key]);
				});
			}
			return resolve(true);
		});
	});
}
