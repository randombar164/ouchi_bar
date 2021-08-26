import { useEffect } from "react";
import { usePostApi } from "src/utils/hooks/useApi";

export const useGetUser = (
  uuid: string | null,
  setUuid: (u: string) => void
) => {
  const { loading, response, postFn } = usePostApi("/users", {}, {}, true);
  console.log(uuid);
  useEffect(() => {
    if (uuid) {
      return;
    }
    console.log(loading, response);
    if (!response && !loading) {
      postFn();
      return;
    }
    return;
  }, [loading, uuid]);

  useEffect(() => {
    if (response) {
      console.log(response);
      const u = response?.user?.uuid;
      console.log(u);
      setUuid(u);
    }
  }, [response]);

  return;
};
