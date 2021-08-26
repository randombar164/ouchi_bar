import type { ReactNode, VFC } from "react";
import { createContext, useEffect, useState } from "react";

type ContextProps = {
  uuid: string | null;
  setUuid: (u: string | null) => void;
};

const defaultContext: ContextProps = {
  uuid: null,
  setUuid: () => {
    /* do nothing */
  },
};

export const Context = createContext<ContextProps>(defaultContext);

export const ContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [uuid, setUuid] = useState<string | null>(null);
  useEffect(() => {
    console.log("called");
    setUuid(localStorage.getItem("uuid"));
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
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
