import type { Exception, Result } from "@zxing/library";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  isScan: boolean;
  setCode: (code: string) => void;
  setError: (error: Exception) => void;
};

type RefProps = {
  video: HTMLVideoElement;
  canvas: HTMLCanvasElement;
  frame: HTMLDivElement;
};

let videoStream: MediaStream;

export const Scanner: React.VFC<Props> = ({ isScan, setCode, setError }) => {
  const [res, setRes] = useState<string>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const barcodeReader = new BrowserMultiFormatReader();
  console.log("aaa");
  const scanFrame = ({ video, canvas, frame }: RefProps) => {
    const frameRect = frame.getBoundingClientRect();
    if (videoStream) {
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(
        video,

        // source x, y, w, h
        frameRect.x,
        frameRect.y,
        frame.clientWidth,
        frame.clientHeight
      );

      // dataURL
      const url = canvas.toDataURL();
      console.log(url);

      barcodeReader
        // .decodeFromImage(img) // decodes but doesn't show img
        .decodeFromImage(undefined, url)
        .then(found) // calls onFoundBarcode with the barcode string
        .catch(notfound)
        .finally(() => {
          releaseMemory(url);
        });

      // requestAnimationFrame(() => {
      //   scanFrame({ video, canvas, frame });
      // }); // repeat
      setTimeout(() => {
        scanFrame({ video, canvas, frame });
      }, 2000); // repeat
    }

    // blob
    // canvas.toBlob(async (blob) => {
    //   const url = URL.createObjectURL(blob);

    //   console.log(url);
    //   img.setAttribute("src", url); // load the image blob
    //   console.log(img);

    //   barcodeReader
    //     // .decodeFromImage(img) // decodes but doesn't show img
    //     .decodeFromImage(undefined, url)
    //     .then(found) // calls onFoundBarcode with the barcode string
    //     .catch(notfound)
    //     .finally(releaseMemory);

    //   img.onload = null;
    //   setTimeout(() => {
    //     scanFrame({ video, canvas, frame, img });
    //   }, timeout); // repeat
    // });
  };

  const found = (result: Result) => {
    console.log("--------------------");
    setRes(result.getText());
    console.log(result.getText());
  };

  const notfound = (err: Error) => {
    setRes(err.message);
    console.log("err");
    if (err.name !== "NotFoundException") {
      console.error(err);
    }
  };

  const releaseMemory = (url: string) => {
    URL.revokeObjectURL(url); // release image blob memory
  };

  const openScanner = ({ video, canvas, frame }: RefProps) => {
    const constrains = {
      // video: {
      //   facingMode: {
      //     exact: "environment",
      //   },
      // },
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
      videoStream = stream;
      video.srcObject = stream;
      video.play();
      canvas.width = frame.clientWidth;
      canvas.height = frame.clientHeight;

      scanFrame({ video, canvas, frame });
    });
  };

  useLayoutEffect(() => {
    console.log("called frame");
    if (videoRef.current && canvasRef.current && frameRef.current) {
      openScanner({
        video: videoRef.current,
        canvas: canvasRef.current,
        frame: frameRef.current,
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="absolute inset-0 z-10 m-auto bg-gray-700">
        {/*eslint-disable-next-line jsx-a11y/media-has-caption*/}
        <video
          id="scanner-video"
          ref={videoRef}
          className="object-cover absolute inset-0 z-20 m-auto w-full h-screen"
        ></video>
      </div>
      <div className="z-40 w-full">
        <p className="text-base font-bold text-center text-white">{res}</p>
        <div
          id="scanner-frame"
          ref={frameRef}
          className="z-40 m-auto w-11/12 h-32 border-4 border-white border-solid"
        ></div>
      </div>
      <canvas id="scanner-canvas" ref={canvasRef} className="z-50"></canvas>
    </div>
  );
};
