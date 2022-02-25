import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useContext } from "react";
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
  
  const [results, setResults] = useState<string[]>([]);
  const [isShow, setIsShow] = useState(false);
  const [isScan, setIsScan] = useState(true);
  const scannerRef = useRef<any>(null);

  const { loading, response, searchByCode } = useSearchByCode();

  const handleClose = useCallback(() => {
    setIsShow(false);
    setIsScan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  useEffect(() => {
    if (results.length < 1) {
      return;
    }
    if (loading) {
      return;
    }
    searchByCode(results[0]);
    setIsShow(true);
    setIsScan(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

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
        code={results[0]}
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
      <div
        ref={scannerRef}
        id="scan-area"
        className="relative mt-16 w-full h-screen"
      >
        <canvas
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="absolute top-0 w-full h-full drawingBuffer"
        />
        {isScan && (
          <Scanner
            scannerRef={scannerRef}
            onDetected={(result: string) => {
              return setResults([...results, result]);
            }}
          />
        )}
      </div>
      <div className="fixed bottom-0 z-30 w-full h-12 bg-gray-800" />
    </>
  );
};

export default ScanPage;
