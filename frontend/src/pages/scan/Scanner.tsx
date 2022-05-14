import type { Exception, Result } from "@zxing/library";
import {
  BarcodeFormat,
  BrowserMultiFormatReader,
  DecodeHintType,
} from "@zxing/library";
import { useEffect } from "react";

type Props = {
  isScan: boolean;
  setCode: (code: string) => void;
  setError: (error: Exception) => void;
};

const timeout = 2000;
const scale = 0.9;

let videoStream: MediaStream;

export const Scanner: React.VFC<Props> = ({ isScan, setCode, setError }) => {
  const hints = new Map();

  const formats = [
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_128,
  ];

  hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
  const barcodeReader = new BrowserMultiFormatReader(hints);

  const constrains = { video: true };
  useEffect(() => {
    const video = document.querySelector("#scanner-video") as HTMLVideoElement;
    const canvas = document.querySelector(
      "#scanner-canvas"
    ) as HTMLCanvasElement;
    const img = document.querySelector("#scanner-image") as HTMLImageElement;

    navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
      videoStream = stream;
      video.srcObject = stream;
      video.play();

      const canvasRect = canvas.getBoundingClientRect();

      const scanFrame = () => {
        if (videoStream) {
          canvas.getContext("2d")?.drawImage(
            video,

            // source x, y, w, h
            canvasRect.x,
            canvasRect.y,
            canvas.width,
            canvas.height
          );

          canvas.toBlob((blob) => {
            console.log(blob);
            const url = URL.createObjectURL(blob);

            img.onload = async () => {
              console.log(url);
              barcodeReader
                .decodeFromImageUrl(url)
                .then((res) => {
                  found(res);
                  // console.log("then");
                })
                .catch((err) => {
                  notFound(err);
                  // console.log("err");
                })
                .finally(() => {
                  releaseMemory(img);
                  // console.log("finally");
                });
              img.onload = null;
              setTimeout(scanFrame, timeout);
            };
            console.log(img.src);
            img.src = url;
          });
        }
      };
      scanFrame();
    });
  }, []);

  const found = (result: Result) => {
    setCode(result.getText());
    console.log("-------------");
    console.log(result.getText());
  };

  const notFound = (err: Exception) => {
    setError(err);
    // console.error(err);
  };

  const releaseMemory = (img: HTMLImageElement) => {
    URL.revokeObjectURL(img.src);
  };

  return (
    <>
      <div className="flex relative justify-center items-center h-screen">
        <div className="absolute inset-0 z-10 m-auto bg-gray-700">
          {/*eslint-disable-next-line jsx-a11y/media-has-caption*/}
          <video
            id="scanner-video"
            className="object-cover absolute inset-0 z-20 m-auto w-full h-screen"
          ></video>
        </div>
        <div className="z-40 w-full">
          <p className="text-base font-bold text-center text-white">
            枠内にバーコードを入れてください
          </p>
          <canvas
            id="scanner-canvas"
            className="z-40 m-auto w-11/12 h-32 border-4 border-white border-solid"
          ></canvas>
        </div>
      </div>
      <img
        id="scanner-image"
        src=""
        alt="スキャナーイメージ"
        className="m-auto w-full"
      />
    </>
  );
};
