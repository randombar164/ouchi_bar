import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "src/utils/contexts/provider";
import { pushHome } from "src/utils/hooks/pushHome";
import { useSearchByCode } from "src/utils/hooks/useSearchByCode";

import { MultiResults } from "./MultiResults";
import { NoResult } from "./NoResult";
import { Scanner } from "./Scanner";
import { SingleResult } from "./SingleResult";

const ScanPage: React.VFC = (): JSX.Element => {
  const { uuid } = useContext(Context);
  if (!uuid) pushHome();

  const [code, setCode] = useState<string>("");
  const [isShow, setIsShow] = useState(false);
  const [isScan, setIsScan] = useState(true);
  const [error, setError] = useState<Error>();

  const { loading, response, searchByCode } = useSearchByCode();

  const handleClose = useCallback(() => {
    setIsShow(false);
    setIsScan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      console.error(error);
    }
    searchByCode(code);
    setIsShow(true);
    setIsScan(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <>
      <SingleResult
        ingredient={response?.concreteIngredient}
        isShow={isShow && !!response?.foundFromDatabase}
        onClose={handleClose}
      />
      <MultiResults
        ingredients={response?.result}
        isShow={
          isShow && !response?.foundFromDatabase && response?.result?.length > 0
        }
        onClose={handleClose}
        code={code}
      />
      <NoResult
        isShow={
          isShow &&
          !response?.foundFromDatabase &&
          response?.result?.length == 0
        }
        onClose={handleClose}
      />
      <div className="fixed top-0 z-30 py-4 w-full bg-gray-800">
        <Link href="/register">
          <div className="inline-block py-2 px-4 ml-3 text-sm font-bold text-red-500 bg-white rounded-full border-2 border-white">
            &lt; 登録画面に戻る
          </div>
        </Link>
      </div>
      <Scanner isScan={isScan} setCode={setCode} setError={setError} />
    </>
  );
};

export default ScanPage;
