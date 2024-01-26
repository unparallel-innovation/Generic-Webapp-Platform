import useSWR from 'swr';


async function fetcher(...args:any[]) {
	//@ts-ignore
	const res = await fetch(...args);

	if (res.ok)
		return await res.json();

	else {
		const errorMsg = await res.text();
		throw new Error('Error: ' + errorMsg);
	}
}

export function useData(url:string, options:any) {
	return useSWR(url, fetcher, options);
}

export function catchErrors(handler:any) {
	return async (req:any, res:any) => {
		try {
			const ret = await handler(req, res);
			res.status(200).send(ret);
		} catch (e) {

			let status = 500;
			let message = '';

			res
				.status(status)
				.send(message);
		}
	};
}
