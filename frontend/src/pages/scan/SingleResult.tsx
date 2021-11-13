import { Modal } from "src/components/Modal";
import type { ModalProps, IngredientCardProps } from "src/utils/types/type";
import { ResultCard } from "src/pages/scan/ResultCard";
import { Context } from "src/utils/contexts/provider";
import { useCallback, useContext } from "react";
import { useRouter } from "next/router";

type Props = {
  ingredient: any;
} & ModalProps;

export const SingleResult: React.VFC<Props> = (prop): JSX.Element => {
  const { concreteIngredients, setConcreteIngredients } = useContext(Context);
  const router = useRouter();
  const handleClick = useCallback(() => {
    setConcreteIngredients([...concreteIngredients, prop.ingredient]);
    router.push("/register");
  }, [prop, setConcreteIngredients, router]);
  return (
    <Modal isShow={prop.isShow} onClose={prop.onClose} className="mt-48">
      <div className="py-8 px-6">
        {prop.ingredient && (
          <ResultCard
            imgSrc={prop.ingredient.imgSrc}
            name={prop.ingredient.name}
            onClick={handleClick}
          />
        )}
      </div>
    </Modal>
  );
};
