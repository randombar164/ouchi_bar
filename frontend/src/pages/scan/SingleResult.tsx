import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import { Modal } from "src/components/Modal";
import { ResultCard } from "src/pages/scan/ResultCard";
import { Context } from "src/utils/contexts/provider";
import type { ModalProps } from "src/utils/types/type";

type Props = {
  ingredient: any;
} & ModalProps;

export const SingleResult: React.VFC<Props> = (prop): JSX.Element => {
  const { concreteIngredients, setConcreteIngredients } = useContext(Context);
  const router = useRouter();
  const handleClick = useCallback(() => {
    setConcreteIngredients([...concreteIngredients, prop.ingredient]);
    router.push("/register");
  }, [prop, concreteIngredients, setConcreteIngredients, router]);
  return (
    <Modal isShow={prop.visible} onClose={prop.onClose} className="mt-48">
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
