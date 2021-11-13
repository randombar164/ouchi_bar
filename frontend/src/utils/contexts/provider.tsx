import { ReactNode, useCallback, VFC } from "react";
import { createContext, useEffect, useState } from "react";
import type { concreteIngredientType } from "src/utils/types/type";

type ContextProps = {
  uuid: string | null;
  setUuid: (u: string | null) => void;
  isVisited: boolean;
  concreteIngredients: concreteIngredientType[];
  setConcreteIngredients: (ingredient: concreteIngredientType[]) => void;
};

const defaultContext: ContextProps = {
  uuid: null,
  setUuid: () => {
    /* do nothing */
  },
  isVisited: false,
  concreteIngredients: [],
  setConcreteIngredients: () => {},
};

export const Context = createContext<ContextProps>(defaultContext);

export const ContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [uuid, setUuid] = useState<string | null>(null);
  const [isVisited, setIsVisited] = useState<boolean>(false);
  const [concreteIngredients, setConcreteIngredients] = useState<
    concreteIngredientType[]
  >([]);
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
        concreteIngredients,
        setConcreteIngredients,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
