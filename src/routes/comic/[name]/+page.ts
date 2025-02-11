export async function load({ fetch, params }) {
	let result: any;

	async function getData(name: string) {
		const response = await fetch(`/api/comic/${name}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		result = await response.json();
		console.log(result);
	}

	getData(params.name);
}
