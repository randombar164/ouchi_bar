import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { usePostApi } from "src/utils/hooks/useApi";

export const useGetUser = () => {
  const { setUuid } = useContext(Context);
  const { loading, response, postFn } = usePostApi("/users", {}, {}, true);
  useEffect(() => {
    const uuid = localStorage.getItem("uuid");
    if (uuid) {
      return;
    }
    if (!response && !loading) {
      postFn();
      return;
    }
    return;
  }, [loading, response]);

  useEffect(() => {
    if (response) {
      const u = response?.user?.uuid;
      setUuid(u);
    }
  }, [response]);

  return;
};
