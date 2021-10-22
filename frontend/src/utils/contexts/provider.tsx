import type { ReactNode, VFC } from "react";
import { createContext, useEffect, useState } from "react";

type ContextProps = {
  uuid: string | null;
  setUuid: (u: string | null) => void;
  isVisited: boolean;
};

const defaultContext: ContextProps = {
  uuid: null,
  setUuid: () => {
    /* do nothing */
  },
  isVisited: false,
};

export const Context = createContext<ContextProps>(defaultContext);

export const ContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [uuid, setUuid] = useState<string | null>(null);
  const [isVisited, setIsVisited] = useState<boolean>(false);

  useEffect(() => {
    setUuid(localStorage.getItem("uuid"));
    setIsVisited(true);
  }, []);

  return (
    <Context.Provider
      value={{
        uuid,
        setUuid: (u: string | null) => {
          setUuid(u);
          if (!u) {
            localStorage.removeItem("uuid");
            return;
          }
          localStorage.setItem("uuid", u);
        },
        isVisited,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
