import type { VFC } from "react";
import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { useGetUser } from "src/utils/hooks/useGetUser";

const SakaguraPage: VFC = () => {
  const { uuid } = useContext(Context);
  useGetUser();
  return <div className="text-sm">{uuid}</div>;
};

export default SakaguraPage;
