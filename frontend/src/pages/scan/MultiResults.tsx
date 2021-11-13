import { Modal } from "src/components/Modal";
import type { ModalProps } from "src/utils/types/type";
import { ResultCard } from "src/pages/scan/ResultCard";
import { Context } from "src/utils/contexts/provider";
import { useCallback, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useRegisterCode } from "src/utils/hooks/useRegisterCode";

type Props = {
  ingredients: any[];
  code: string;
} & ModalProps;
export const MultiResults: React.VFC<Props> = (prop): JSX.Element => {
  const { concreteIngredients, setConcreteIngredients } = useContext(Context);
  const router = useRouter();

  const { loading, response, registerCode } = useRegisterCode();
  const handleClick = useCallback(
    (asin: string) => {
      registerCode({
        jan_code: prop.code,
        asin: asin,
      });
    },
    [prop]
  );

  useEffect(() => {
    if (!response) {
      return;
    }

    setConcreteIngredients([
      ...concreteIngredients,
      response.concreteIngredients,
    ]);
    router.push("/register");
  }, [response]);
  return (
    <Modal
      isShow={prop.isShow}
      onClose={prop.onClose}
      className="overflow-scroll h-5/6 my-auto max-h-[700px]"
    >
      <div className="py-8 px-6">
        <p className="text-barGray-3 font-bold text-sm">
          どれか一つをタップして追加してください
        </p>
        {prop.ingredients &&
          prop.ingredients.map((ingredient, i) => {
            return (
              <div className="my-4" key={i}>
                <ResultCard
                  imgSrc={ingredient.images.primary.medium.url}
                  name={ingredient.itemInfo.title.displayValue}
                  onClick={() => handleClick(ingredient.asin)}
                />
              </div>
            );
          })}
      </div>
    </Modal>
  );
};
