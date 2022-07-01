import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import type { Exception, Result } from "@zxing/library";
import { NotFoundException } from "@zxing/library";
import { BarcodeFormat, DecodeHintType } from "@zxing/library";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const styles = {
  bgCamWrapper: css`
    position: fixed;
    inset: 0;
    margin: auto;
    width: 100%;
    height: 100vh;
    background: #000;
  `,
  bgCam: css`
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    filter: blur(4px);
  `,
  cam: css`
    object-fit: cover;
    z-index: 20;
    margin: auto;
    width: 90%;
    height: 10rem;
    border: dashed 2px white;
  `,
};

type Props = {
  setCode: (code: string) => void;
  setError: (error: Exception) => void;
  setIsScan: (scanning: boolean) => void;
  isScan: boolean;
};

const videoConstraints = {
  facingMode: "user",
  // { exact: "environment" },
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {!res ? (
        <Box
          sx={{
            zIndex: "10",
            marginTop: "2.5rem",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            枠内にバーコードを入れてください
          </Typography>
          {/*eslint-disable-next-line jsx-a11y/media-has-caption*/}
          <video id="scanner-video" ref={videoRef} css={styles.cam}></video>
        </Box>
      ) : (
        <Dialog open={true}>
          <DialogTitle>材料が見つかりました</DialogTitle>
          <DialogContent>
            <Box></Box>
            <DialogActions>
              <Button>追加する</Button>
              <Button>再度読み込む</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      )}

      <div css={styles.bgCamWrapper}>
        <Webcam
          audio={false}
          css={styles.bgCam}
          ref={webcamRef}
          videoConstraints={videoConstraints}
        />
      </div>
    </Box>
  );
};
