import { useCallback, useEffect, useState } from "react";

import { useGetApi } from "./useApi";

export const useSearchByCode = () => {
  const [barcode, setBarcode] = useState("");
  const { loading, response, getFn } = useGetApi(
    `/v2/queries/search_concrete_ingredient_from_jan_code?jan_code=${barcode}`
  );

  const searchByCode = useCallback(
    (code: string) => {
      setBarcode(code);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [barcode]
  );

  useEffect(() => {
    if (barcode.length < 1) {
      return;
    }
    getFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barcode]);
  return { loading, response, searchByCode };
};
