import camelcaseKeys from "camelcase-keys";
import {useState, useEffect} from "react";

const hostname = `${process.env.NEXT_PUBLIC_HOST_NAME}:${process.env.NEXT_PUBLIC_API_PORT}`;

type GetProps = {
    url: string;
    params?: any;
}

export const useGetApi = (
    url: string,
    params?: any
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<Error | null>(null);
    
    const fn = async () => {
        setLoading(true);
        await fetch(hostname + url, {
            method: 'GET',
            ...params
        }).then(res => {
            setResponse(camelcaseKeys(res.json(), {deep: true}));
        }).catch(e => {
            console.error(e);
            setError(e);
        });
        setLoading(false);
    }
    useEffect(() => {
        fn();
    }, [url])

    return [loading, response, error];
}

export const usePostApi = (
    url: string,
    params: any = {},
    body: any = {},
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<Error | null>(null);

    const fn = async () => {
        setLoading(true);
        console.log(hostname)
        await fetch(hostname + url, {
            method: 'POST',
            body: JSON.stringify(body),
            ...params
        }).then(res => {
            setResponse(camelcaseKeys(res.json()));
        }).catch(e => {
            console.error(e);
            setError(e);
        });
    }
    useEffect(() => {
        fn();
    }, [url])

    return [loading, response, error];
}

