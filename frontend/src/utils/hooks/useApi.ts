import camelcaseKeys from "camelcase-keys";
import { useCallback, useState } from "react";

const hostname = `${process.env.NEXT_PUBLIC_API_ORIGIN}`;

export const useGetApi = <T>(url: string, params?: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async () => {
    setLoading(true);
    await fetch(hostname + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...params,
    })
      .then(async (res) => {
        if (!res.ok) {
          console.error("サーバーエラー");
        }
        const jsonedRes = await res.json();
        setResponse(camelcaseKeys(jsonedRes, { deep: true }));
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, params]);

  return { loading, error, response, getFn };
};

export const usePostApi = <T>(url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const postFn = useCallback(
    async (body: any) => {
      setLoading(true);
      await fetch(hostname + url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
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
          return;
        });
    },
    [url]
  );

  return { loading, error, response, postFn };
};
