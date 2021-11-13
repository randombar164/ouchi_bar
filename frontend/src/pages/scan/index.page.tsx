import React, { useState, useRef, useCallback, useEffect } from "react";
import { Scanner } from "./Scanner";
import { NoResult } from "./NoResult";
import { useSearchByCode } from "src/utils/hooks/useSearchByCode";
import { SingleResult } from "./SingleResult";
import { MultiResults } from "./MultiResults";
import Link from "next/link";

const ScanPage: React.VFC = (): JSX.Element => {
  const [results, setResults] = useState<string[]>([]);
  const [isShow, setIsShow] = useState(false);
  const scannerRef = useRef<HTMLDivElement | null>(null);

  const { loading, response, searchByCode } = useSearchByCode();

  console.log(results);

  const handleClose = useCallback(() => {
    setIsShow(false);
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
      <div className="w-full py-4 bg-gray-800 fixed top-0 z-30">
        <Link href="/register">
          <div className="inline-block text-sm ml-3 font-bold py-2 px-4 text-red-500 bg-white rounded-full border-2 border-white">
            &lt; 登録画面に戻る
          </div>
        </Link>
      </div>
      <div ref={scannerRef} className="relative w-full h-screen mt-16">
        <canvas
          className="drawingBuffer absolute top-0"
          width="375"
          height="800"
        />
        <Scanner
          scannerRef={scannerRef}
          onDetected={(result: string) => setResults([...results, result])}
        />
      </div>
      <div className="z-30 w-full h-12 bg-gray-800 fixed bottom-0" />
    </>
  );
};
//ここに、カメラ起動中のUIも書いてOK

export default ScanPage;
