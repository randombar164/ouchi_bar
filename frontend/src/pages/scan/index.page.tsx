import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "src/utils/contexts/provider";
import { useSearchByCode } from "src/utils/hooks/useSearchByCode";

import { MultiResults } from "./MultiResults";
import { NoResult } from "./NoResult";
import { Scanner } from "./Scanner";
import { SingleResult } from "./SingleResult";

const ScanPage: React.VFC = (): JSX.Element => {
  const [code, setCode] = useState<string>("");
  const [resultVisible, setResultVisible] = useState(false);
  const [isScan, setIsScan] = useState(true);
  const [error, setError] = useState<Error>();

  const { loading, response, searchByCode } = useSearchByCode();

  const handleClose = useCallback(() => {
    setResultVisible(false);
    setIsScan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultVisible]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      console.error(error);
    }
    searchByCode(code);
    setResultVisible(true);
    setIsScan(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <>
      <SingleResult
        ingredient={response?.concreteIngredient}
        visible={resultVisible && !!response?.foundFromDatabase}
        onClose={handleClose}
      />
      <MultiResults
        ingredients={response?.result}
        visible={
          resultVisible &&
          !response?.foundFromDatabase &&
          response?.result?.length > 0
        }
        onClose={handleClose}
        code={code}
      />
      <NoResult
        visible={
          resultVisible &&
          !response?.foundFromDatabase &&
          response?.result?.length == 0
        }
        onClose={handleClose}
      />
      <div className="fixed top-0 z-30 py-4 w-full bg-black bg-opacity-75">
        <Link href="/register">
          <button className="inline-block py-3 px-6 ml-3 font-bold text-red-500 bg-white rounded-full border-2 border-white">
            &lt; 登録画面に戻る
          </button>
        </Link>
      </div>
      <Scanner
        isScan={isScan}
        setIsScan={setIsScan}
        setCode={setCode}
        setError={setError}
      />
    </>
  );
};

export default ScanPage;
