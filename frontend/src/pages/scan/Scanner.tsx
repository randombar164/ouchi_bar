import type {
  QuaggaJSConfigObject,
  QuaggaJSResultObject,
  QuaggaJSResultObject_CodeResult,
} from "@ericblade/quagga2";
import Quagga from "@ericblade/quagga2";
import { useCallback, useLayoutEffect } from "react";
import type { PickType } from "src/utils/types/type";

type ScanType = {
  onDetected?: (result: QuaggaJSResultObject) => void;
  scannerRef?: React.MutableRefObject<HTMLDivElement | null> | null;
  onScannerReady?: () => void;
  cameraId?: string;
  facingMode?: string;
  constraints?: MediaTrackConstraints;
  locator?: PickType<QuaggaJSConfigObject, "locator">;
  decoders?: string[];
  locate?: boolean;
};

const getMedian = (arr: number[]) => {
  arr.sort((a, b) => {
    return a - b;
  });
  const half = Math.floor(arr.length / 2);
  if (arr.length % 2 === 1) {
    return arr[half];
  }
  return (arr[half - 1] + arr[half]) / 2;
};

const getMedianOfCodeErrors = (
  decodedCodes: PickType<QuaggaJSResultObject_CodeResult, "decodedCodes">
) => {
  console.log("errors");
  const errors = decodedCodes
    .filter((x) => {
      return x.error !== undefined;
    })
    .map((x) => {
      return x.error;
    }) as number[];
  const medianOfErrors = getMedian(errors);
  return medianOfErrors;
};

const defaultConstraints = {
  width: 375,
  height: 800,
};

const defaultLocatorSettings = {
  patchSize: "medium",
  halfSample: true,
};

const defaultDecoders = ["ean_reader", "ean_8_reader"];

export const Scanner: React.VFC<ScanType> = ({
  onDetected,
  scannerRef,
  onScannerReady,
  cameraId,
  facingMode,
  constraints = defaultConstraints,
  locator = defaultLocatorSettings,
  decoders = defaultDecoders,
  locate = true,
}): JSX.Element => {
  const errorCheck = useCallback(
    (result) => {
      if (!onDetected) {
        console.log("!onDetected");
        return;
      }
      const err = getMedianOfCodeErrors(result.codeResult.decodedCodes);
      // if Quagga is at least 75% certain that it read correctly, then accept the code.
      if (err < 0.25) {
        onDetected(result.codeResult.code);
      }
    },
    [onDetected]
  );

  const handleProcessed = (result: QuaggaJSResultObject) => {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;
    drawingCtx.font = "24px Arial";
    drawingCtx.fillStyle = "green";

    if (result) {
      // console.warn('* quagga onProcessed', result);
      if (result.boxes) {
        drawingCtx.clearRect(
          0,
          0,
          parseInt(drawingCanvas.getAttribute("width") as string),
          parseInt(drawingCanvas.getAttribute("height") as string)
        );
        result.boxes
          .filter((box) => {
            return box !== result.box;
          })
          .forEach((box) => {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: "purple",
              lineWidth: 2,
            });
          });
      }
      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
          color: "blue",
          lineWidth: 2,
        });
      }
      console.log(result);
      if (result.codeResult && result.codeResult.code) {
        console.log(result.codeResult);
        // const validated = barcodeValidator(result.codeResult.code);
        // const validated = validateBarcode(result.codeResult.code);
        // Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: validated ? 'green' : 'red', lineWidth: 3 });
        drawingCtx.font = "24px Arial";
        // drawingCtx.fillStyle = validated ? 'green' : 'red';
        // drawingCtx.fillText(`${result.codeResult.code} valid: ${validated}`, 10, 50);
        drawingCtx.fillText(result.codeResult.code, 10, 20);
        // if (validated) {
        //     onDetected(result);
        // }
      }
    }
  };
  typeof window !== "undefined" &&
    useLayoutEffect(() => {
      console.log("quagga called");
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            constraints: {
              ...constraints,
              ...(cameraId && { deviceId: cameraId }),
              ...(!cameraId && { facingMode }),
            },
            target: scannerRef?.current,
          },
          locator,
          decoder: { readers: decoders },
          locate,
        },
        (err) => {
          Quagga.onProcessed(handleProcessed);

          if (err) {
            return console.log("Error starting Quagga:", err);
          }
          if (scannerRef && scannerRef.current) {
            Quagga.start();
            if (onScannerReady) {
              onScannerReady();
            }
          }
        }
      );
      Quagga.onDetected(errorCheck);
      return () => {
        Quagga.offDetected(errorCheck);
        Quagga.offProcessed(handleProcessed);
        Quagga.stop();
      };
    }, [
      cameraId,
      onDetected,
      onScannerReady,
      scannerRef,
      errorCheck,
      constraints,
      locator,
      decoders,
      locate,
    ]);

  return <div />;
};
