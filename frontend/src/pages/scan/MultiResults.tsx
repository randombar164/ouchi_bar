import { useRouter } from "next/router";
import { useCallback, useContext, useEffect } from "react";
import { Modal } from "src/components/Modal";
import { ResultCard } from "src/pages/scan/ResultCard";
import { Context } from "src/utils/contexts/provider";
import { useRegisterCode } from "src/utils/hooks/useRegisterCode";
import type { ModalProps } from "src/utils/types/type";

type Props = {
  ingredients: any[];
  code: string;
} & ModalProps;
export const MultiResults: React.VFC<Props> = (prop): JSX.Element => {
  const { concreteIngredients, setConcreteIngredients } = useContext(Context);
  const router = useRouter();

  const { response, registerCode } = useRegisterCode();
  const handleClick = useCallback(
    (asin: string) => {
      registerCode({
        jan_code: prop.code,
        asin: asin,
      });
    },
    [prop, registerCode]
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
  }, [response, router, concreteIngredients, setConcreteIngredients]);
  return (
    <Modal
      isShow={prop.isShow}
      onClose={prop.onClose}
      className="overflow-scroll my-auto h-5/6 max-h-[700px]"
    >
      <div className="py-8 px-6">
        <p className="text-sm font-bold text-barGray-3">
          どれか一つをタップして追加してください
        </p>
        {prop.ingredients &&
          prop.ingredients.map((ingredient, i) => {
            return (
              <div className="my-4" key={i}>
                <ResultCard
                  imgSrc={ingredient.images.primary.medium.url}
                  name={ingredient.itemInfo.title.displayValue}
                  onClick={() => {
                    return handleClick(ingredient.asin);
                  }}
                />
              </div>
            );
          })}
      </div>
    </Modal>
  );
};
