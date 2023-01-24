/// <reference path="./global.d.ts" />
import { FastifyInstance } from "fastify";
import prismaPlugin from "@sabinthedev/fastify-prisma";
import { appendFile } from "fs";

export default async function (app: FastifyInstance) {
	await app.register(prismaPlugin);

	// @ts-ignore
	app.log.info(await app.getSchema("Recipe").properties.id);

	app.put<{ Params: { id: number }; Body: { rating: number } }>(
		"/recipes/:id/rating",
		{
			schema: {
				body: {
					type: "object",
					properties: {
						rating: {
							// @ts-ignore
							...app.getSchema("Recipe").properties.rating,
							minimum: 1,
							maximum: 5
						},
					},
				},
				params: {
					type: "object",
					properties: {
						// @ts-ignore
						id: app.getSchema("Recipe").properties.id,
					},
				},
			},
		},
		async function (request, reply) {
			const { id } = request.params;
			const { rating } = request.body;

			const recipe = await app.prisma.recipe.update({
				where: {
					id,
				},
				data: {
					rating,
				},
			});

			if (!recipe) {
				reply
					.code(404)
					.send({ error: `Recipe with id:${id} was not found` });
			}

			return recipe;
		}
	);
}
