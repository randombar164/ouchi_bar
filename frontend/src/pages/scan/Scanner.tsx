import type { Exception, Result } from "@zxing/library";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

type Props = {
  setCode: (code: string) => void;
  setError: (error: Exception) => void;
};

type RefProps = {
  video: HTMLVideoElement;
  canvas: HTMLCanvasElement;
  frame: HTMLDivElement;
};

let videoStream: MediaStream;

export const Scanner: React.VFC<Props> = ({ setCode, setError }) => {
  const [test, setTest] = useState<Date | null>(null);

  const barcodeReader = new BrowserMultiFormatReader();

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const scanFrame = useCallback(() => {
    const frame = frameRef.current as HTMLDivElement;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const video = videoRef.current as HTMLVideoElement;
    const img = imgRef.current as HTMLImageElement;

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
    }

    // stateが更新されるか確認
    setTest(new Date());
    console.log("--------");
    console.log(test);

    // canvas→blob→解析
    canvas.toBlob(async (blob) => {
      const url = URL.createObjectURL(blob);

      img?.setAttribute("src", url);
      console.log(img);

      barcodeReader
        .decodeFromImage(img)
        .then(found)
        .catch(notfound)
        .finally(() => {
          releaseMemory(img);
        });

      img.onload = null;
    });
  }, [canvasRef, videoRef, frameRef, barcodeReader, test]);

  const found = (result: Result) => {
    setCode(result.getText());
  };

  const notfound = (err: Exception) => {
    setError(err);
    if (err.name !== "NotFoundException") {
      console.error(err);
    }
  };

  const releaseMemory = (img: HTMLImageElement) => {
    URL.revokeObjectURL(img.src);
  };
  const openScanner = useCallback(
    ({ video, canvas, frame }: RefProps) => {
      const constrains = {
        video: true,
        // 外カメラ使用時
        // video: {
        //   facingMode: {
        //     exact: "environment",
        //   },
        // },
      };

      navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
        videoStream = stream;
        video.srcObject = stream;
        video.play();
        canvas.width = frame.clientWidth;
        canvas.height = frame.clientHeight;

        setInterval(() => {
          scanFrame();
        }, 2000);
      });
    },
    [scanFrame]
  );

  useLayoutEffect(() => {
    if (videoRef.current && canvasRef.current && frameRef.current) {
      // MEMO ここで参照しているvideoRef変数が古いまま？
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
      <img
        id="scanner-image"
        src=""
        alt="スキャナーイメージ"
        ref={imgRef}
        className="hidden m-auto w-full"
      />
    </div>
  );
};
