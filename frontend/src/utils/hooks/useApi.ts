import camelcaseKeys from "camelcase-keys";
import { useEffect, useState } from "react";

const hostname = `${process.env.NEXT_PUBLIC_HOST_NAME}:${process.env.NEXT_PUBLIC_API_PORT}`;

export const useGetApi = (url: string, params: any = {}, lazy = false) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = async () => {
    setLoading(true);
    await fetch(hostname + url, {
      method: "GET",
      ...params,
    })
      .then((res) => {
        setResponse(camelcaseKeys(res.json(), { deep: true }));
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      });
    setLoading(false);
  };
  useEffect(() => {
    if (!lazy) getFn();
  }, [url]);

  return { loading, response, error, getFn };
};

export const usePostApi = (
  url: string,
  params: any = {},
  body: any = {},
  lazy = false
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const postFn = async () => {
    setLoading(true);
    const jsonedRes = await fetch(hostname + url, {
      method: "POST",
      body: JSON.stringify(body),
      ...params,
    })
      .then((res) => {
        if (!res.ok) {
          console.error("サーバーエラー");
        }
        return res.json();
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      });
    setResponse(camelcaseKeys(jsonedRes));
  };

  useEffect(() => {
    if (!lazy) postFn();
  }, [url]);

  return { loading, response, error, postFn };
};
