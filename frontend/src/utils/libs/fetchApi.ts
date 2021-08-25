import camelcaseKeys from "camelcase-keys";

const HOSTNAME = process.env.hostname;

type GetProps = {
    url: string;
    params?: any;
}
export const getData = async (props: GetProps) => {
    const {url, params} = props;
    const data = await fetch(HOSTNAME + url, {
        method: 'GET',
        ...params
    }).then(res => {
        return res.json();
    }).catch(e => {
        console.error(e);
    })

    return data;
}

type PostProps = {
    url: string;
    params?: any;
    body?: any;
}
export const postData = async (props: PostProps) => {
    const {url, params, body} = props;
    const data = await fetch(HOSTNAME + url, {
        method: 'POST',
        body: JSON.stringify(body),
        ...params
    }).then(res => {
        return res.json();
    }).catch(e => {
        console.error(e);
    })

    return data;
}

