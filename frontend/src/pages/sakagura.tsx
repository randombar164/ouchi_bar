import type { VFC } from "react";
import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { useGetUser } from "src/utils/hooks/useGetUser";

const SakaguraPage: VFC = () => {
  const { uuid, setUuid } = useContext(Context);
  console.log(uuid);
  useGetUser(uuid, setUuid);
  return <div className="text-sm">{uuid}</div>;
};

export default SakaguraPage;
