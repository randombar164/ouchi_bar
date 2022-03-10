import type { Exception, Result } from "@zxing/library";
import {
  BarcodeFormat,
  BrowserMultiFormatReader,
  DecodeHintType,
  NotFoundException,
} from "@zxing/library";
import { useEffect, useRef } from "react";

type Props = {
  isScan: boolean;
  setCode: (code: string) => void;
  setError: (error: Exception) => void;
};

export const Scanner: React.VFC<Props> = ({ isScan, setCode, setError }) => {
  const codeReader = new BrowserMultiFormatReader();
  const formats = [
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_128,
  ];
  const videoRef = useRef<HTMLVideoElement>(null);
  const hints = new Map();

  useEffect(() => {
    hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hints]);

  useEffect(() => {
    if (isScan) {
      captureStart((result, error) => {
        if (error) {
          setError(error);
        }
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
    <div className="relative h-screen">
      {/*eslint-disable-next-line jsx-a11y/media-has-caption*/}
      <video
        id="video"
        className="object-cover absolute h-screen"
        ref={videoRef}
        style={{ border: "1px solid gray" }}
      ></video>
    </div>
  );
};
