import { useCallback, useContext, useEffect } from "react";
import { Context } from "src/utils/contexts/provider";
import { usePostApi } from "src/utils/hooks/useApi";

type UserType = {
  user: {
    id: number;
    uuid: string;
    createdAt: string;
    updatedAt: string;
  }[];
};

export const useGetUser = () => {
  const { setUuid } = useContext(Context);
  const { loading, response, postFn } = usePostApi<UserType>(
    "/v3/commands/register_user"
  );
  const getUserFn = useCallback(async () => {
    const uuid = localStorage.getItem("uuid");
    if (uuid) {
      return;
    }
    if (!response && !loading) {
      await postFn({});
      return;
    }
    return;
  }, [loading, response, postFn]);

  useEffect(() => {
    if (!response) {
      return;
    }
    const u = response?.user?.uuid;
    //なぜだろう？ちゃんとuuidは記述してあるはず
    setUuid(u);
  }, [response]);

  return { getUserFn };
};
