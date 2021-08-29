import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { usePostApi } from "src/utils/hooks/useApi";

const requestBody = {
  concrete_ingredient_ids: [
    670, 671, 76, 587, 419, 262, 256, 189, 179, 494, 495, 496, 461,
  ],
};

export const useRegisterIngredients = () => {
  const { uuid } = useContext(Context);
};
