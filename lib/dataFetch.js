import useSWR from 'swr';

async function fetcher(...args) {
    const res = await fetch(...args);

    if (res.ok)
        return await res.json();

    else {
        const errorMsg = await res.text();
        throw new Error('Error: ' + errorMsg);
    }
}

export function useData(url, options) {
    return useSWR(url, fetcher, options);
}

export function catchErrors(handler) {
    return async (req, res) => {
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
