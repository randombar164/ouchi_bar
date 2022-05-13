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

const timeout = 1000;
const scale = 0.5;

let videoStream: MediaStream;

export const Scanner: React.VFC<Props> = ({ isScan, setCode, setError }) => {
  const barcodeReader = new BrowserMultiFormatReader();

  const formats = [
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_128,
  ];

  const constrains = { video: true };
  useEffect(() => {
    const video = document.querySelector("#scanner-video") as HTMLVideoElement;
    const canvas = document.querySelector(
      "#scanner-canvas"
    ) as HTMLCanvasElement;
    const img = document.querySelector("#scanner-image") as HTMLImageElement;
    const frame = document.querySelector("#scanner-frame") as HTMLDivElement;
    navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
      console.log(video);
      videoStream = stream;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      frame.style.width = video.clientWidth * scale + "px";
      frame.style.height = video.clientHeight * scale + "px";
      frame.style.left = (window.innerWidth - video.clientWidth) / 2 + "px";
      frame.style.top = (window.innerHeight - video.clientHeight) / 2 + "px";
      console.log(video.clientHeight);

      scanFrame(canvas, video, img);
      // video?.addEventListener("play", () => {});
    });
  }, []);

  const scanFrame = (
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
    img: HTMLImageElement
  ) => {
    if (videoStream) {
      canvas.getContext("2d")?.drawImage(
        video,

        // source x, y, w, h
        (video.videoWidth * (1 - scale)) / 2,
        (video.videoHeight * (1 - scale)) / 2,
        video.videoWidth * scale,
        video.videoHeight * scale,

        // dest x, y, w, h
        0,
        0,
        canvas.width,
        canvas.height
      );

      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);

        img.onload = async () => {
          barcodeReader
            .decodeFromImage(undefined, url)
            .then(found)
            .catch(notFound)
            .finally(() => {
              releaseMemory(img);
            });
          img.onload = null;
          setTimeout(scanFrame, timeout);
        };
        img.src = url;
      });
    }
  };

  const found = (result: Result) => {
    setCode(result.getText());
  };

  const notFound = (err: Exception) => {
    setError(err);
  };

  const releaseMemory = (img: HTMLImageElement) => {
    URL.revokeObjectURL(img.src);
    img.src = "";
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-10 m-auto bg-gray-700">
        {/*eslint-disable-next-line jsx-a11y/media-has-caption*/}
        <video
          id="scanner-video"
          className="absolute inset-0 z-20 m-auto w-auto h-screen"
          style={{ border: "1px solid gray" }}
        ></video>
      </div>
      <div
        id="scanner-frame"
        className="absolute z-30 m-auto border-2 border-barOrange-3 border-solid shadow-md drop-shadow-md"
      ></div>
      <canvas id="scanner-canvas" className="z-40 m-auto w-full"></canvas>
      <img
        id="scanner-image"
        src=""
        alt="スキャナーイメージ"
        className="z-10 m-auto w-full"
      />
    </div>
  );
};
