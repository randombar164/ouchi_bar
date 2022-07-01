import { DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect } from "react";
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
    <Dialog open={prop.visible} onClose={prop.onClose}>
      <DialogTitle>材料の候補が見つかりました</DialogTitle>
      <DialogContent>
        <DialogContentText>
          どれか一つをタップして追加してください
        </DialogContentText>
        {prop.ingredients &&
          prop.ingredients.map((ingredient, i) => {
            return (
              <div key={i}>
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
      </DialogContent>
    </Dialog>
  );
};
