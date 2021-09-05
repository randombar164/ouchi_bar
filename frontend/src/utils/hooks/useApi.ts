import camelcaseKeys from "camelcase-keys";
import { useCallback, useState } from "react";

const hostname = `${process.env.NEXT_PUBLIC_HOST_NAME}:${process.env.NEXT_PUBLIC_API_PORT}`;

export const useGetApi = (url: string, params: any = {}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async () => {
    setLoading(true);
    await fetch(hostname + url, {
      method: "GET",
      ...params,
    })
      .then(async (res) => {
        if (!res.ok) {
          console.error("サーバーエラー");
        }
        const jsonedRes = await res.json();
        setResponse(camelcaseKeys(jsonedRes));
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, error, response, getFn };
};

export const usePostApi = (url: string, params: any = {}, body: any = {}) => {
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
    setLoading(false);
  };

  return { loading, response, error, postFn };
};
