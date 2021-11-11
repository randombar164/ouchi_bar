import React, { useState, useRef, useLayoutEffect } from "react";
import Quagga, {
  QuaggaJSResultObject,
  QuaggaJSResultCallbackFunction,
} from "@ericblade/quagga2";
import { Scanner } from "./Scanner";

const ScanPage: React.VFC = (): JSX.Element => {
  const [results, setResults] = useState<QuaggaJSResultObject[]>([]);
  const scannerRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div className="w-full py-4 bg-gray-800 fixed top-0 z-30">
        <button className="block text-sm ml-3 font-bold py-2 px-4 text-red-500 bg-white rounded-full border-2 border-white">
          &lt; 登録画面に戻る
        </button>
      </div>
      <div ref={scannerRef} className="relative w-full h-screen">
        <canvas
          className="drawingBuffer absolute top-0"
          width="375"
          height="800"
        />
        <Scanner
          scannerRef={scannerRef}
          onDetected={(result: QuaggaJSResultObject) =>
            setResults([...results, result])
          }
        />
      </div>
      <div className="z-30 w-full h-12 bg-gray-800 fixed bottom-0" />
    </>
  );
};
//ここに、カメラ起動中のUIも書いてOK

export default ScanPage;
