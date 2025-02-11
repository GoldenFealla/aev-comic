export async function load({ fetch, params }) {
	const responseImages = await fetch(
		`https://server.aevteam.com/comic/list-comic-image?code=${params.name}`,
		{
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		}
	);

	let images = await responseImages.json();
	return { images };
}
