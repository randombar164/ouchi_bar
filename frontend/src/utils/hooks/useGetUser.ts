import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { usePostApi } from "src/utils/hooks/useApi";

export const useGetUser = () => {
  const { setUuid } = useContext(Context);
  const { loading, response, postFn } = usePostApi("/commands/register_user", {});
  const getUserFn = () => {
    const uuid = localStorage.getItem("uuid");
    if (uuid) {
      return;
    }
    if (!response && !loading) {
      postFn();
      const u = response?.user?.uuid;
      setUuid(u);
      return;
    }
    return;
  };

  return { getUserFn };
};
