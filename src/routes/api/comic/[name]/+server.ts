import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ platform, params }) => {
	if (!platform) return new Response('platform undefined');
	if (!params.name) return new Response('params name required');

	const queryTitle = await platform.env.DB.prepare(
		`SELECT * FROM comic WHERE code=${params.name}`
	).run();
	const queryPage = await platform.env.DB.prepare(
		`SELECT * FROM image WHERE code=${params.name}`
	).run();

	const result = {
		title: queryTitle.success ? queryTitle.results : 'Error',
		pages: queryPage.success ? queryPage.results : []
	};

	if (queryTitle.success && queryPage.success) {
		return new Response(JSON.stringify(result));
	}
	return new Response('error querying');
};
