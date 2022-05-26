import type { Exception, Result } from "@zxing/library";
import { BrowserMultiFormatReader } from "@zxing/library";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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

  const scanFrame = () => {
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
      const url = await URL.createObjectURL(blob);

      img?.setAttribute("src", url);
      console.log(img);

      barcodeReader
        .decodeFromImage(undefined, url)
        .then(found)
        .catch(notfound)
        .finally(() => {
          releaseMemory(img);
        });

      img.onload = null;
    });
  };

  const found = (result: Result) => {
    setCode(result.getText());
    console.log(result.getText());
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
  const openScanner = ({ video, canvas, frame }: RefProps) => {
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
  };

  const refCallback = useRef<() => void>(scanFrame);

  useEffect(() => {
    refCallback.current = scanFrame;
  }, [scanFrame]);

  useEffect(() => {
    // MEMO ここで参照しているvideoRef変数が古いまま？
    const constrains = {
      video: true,
      // 外カメラ使用時
      // video: {
      //   facingMode: {
      //     exact: "environment",
      //   },
      // },
    };

    const callback = () => {
      refCallback.current();
    };

    navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
      if (videoRef.current && canvasRef.current && frameRef.current) {
        videoStream = stream;
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        canvasRef.current.width = frameRef.current.clientWidth;
        canvasRef.current.height = frameRef.current.clientHeight;
      }

      const scan = setInterval(callback, 2000);

      return () => {
        clearInterval(scan);
      };
    });
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
