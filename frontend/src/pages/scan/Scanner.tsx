import Modal from "@mui/material/Modal";
import type { Exception, Result } from "@zxing/library";
import { NotFoundException } from "@zxing/library";
import { BarcodeFormat, DecodeHintType } from "@zxing/library";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

type Props = {
  setCode: (code: string) => void;
  setError: (error: Exception) => void;
  setIsScan: (scanning: boolean) => void;
  isScan: boolean;
};

const videoConstraints = {
  facingMode:
    // "user",
    { exact: "environment" },
};

export const Scanner: React.VFC<Props> = ({
  setCode,
  setError,
  setIsScan,
  isScan,
}) => {
  const [res, setRes] = useState("");
  const codeReader = new BrowserMultiFormatReader();
  const formats = [
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_128,
  ];
  const hints = new Map();
  useEffect(() => {
    hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hints]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    if (isScan) {
      captureStart((result, error) => {
        if (error) {
          setError(error);
        }
        setRes(result.getText());
        setCode(result.getText());
      });
    } else {
      captureStop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScan]);

  const captureStart = (
    callback: (result: Result, error: Exception | undefined) => void,
    stopOnCapture = true
  ) => {
    codeReader.decodeFromVideoDevice("", videoRef.current, (result, error) => {
      if (result) {
        // setScanResult(result);
        if (stopOnCapture === true) {
          captureStop();
        }
        callback(result, error);
      }
      if (error && !(error instanceof NotFoundException)) {
        console.error(error);
      }
    });
  };
  const captureStop = () => {
    // setIsRunning(false);
    codeReader.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {!res ? (
        <div className="z-10 -mt-10 w-full text-center">
          <p className="py-2 font-bold text-white">
            枠内にバーコードを入れてください
          </p>
          {/*eslint-disable-next-line jsx-a11y/media-has-caption*/}
          <video
            id="scanner-video"
            ref={videoRef}
            className="object-cover z-20 m-auto w-11/12 h-40 border-4 border-white border-dashed"
          ></video>
        </div>
      ) : (
        <div className="flex z-10 justify-center items-center py-4 w-11/12 text-center bg-white rounded-lg">
          <p className="font-bold">
            バーコードを認識しました
            <br />
            {res}
          </p>
        </div>
      )}
      <div className="absolute inset-0 m-auto w-full h-screen bg-black">
        <Webcam
          audio={false}
          className="object-cover w-full h-full opacity-90 blur-sm"
          ref={webcamRef}
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  );
};
