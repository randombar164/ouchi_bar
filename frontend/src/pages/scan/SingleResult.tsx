import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
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
    <Dialog open={prop.visible} onClose={prop.onClose}>
      <DialogTitle>材料が見つかりました</DialogTitle>
      <DialogContent>
        {prop.ingredient ||
          (true && (
            <ResultCard
              imgSrc={prop.ingredient.imgSrc}
              name={prop.ingredient.name}
              onClick={handleClick}
            />
          ))}
      </DialogContent>
    </Dialog>
  );
};
