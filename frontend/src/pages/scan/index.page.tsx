import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Context } from "src/utils/contexts/provider";
import { useSearchByCode } from "src/utils/hooks/useSearchByCode";

import { MultiResults } from "./MultiResults";
import { NoResult } from "./NoResult";
import { Scanner } from "./Scanner";
import { SingleResult } from "./SingleResult";

const ScanPage: React.VFC = (): JSX.Element => {
  const [code, setCode] = useState<string>("");
  const [resultVisible, setResultVisible] = useState(false);
  const [isScan, setIsScan] = useState(true);
  const [error, setError] = useState<Error>();

  const { loading, response, searchByCode } = useSearchByCode();

  const handleClose = useCallback(() => {
    setResultVisible(false);
    setIsScan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultVisible]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      console.error(error);
    }
    searchByCode(code);
    setResultVisible(true);
    setIsScan(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <>
      <SingleResult
        ingredient={response?.concreteIngredient}
        visible={resultVisible && !!response?.foundFromDatabase}
        onClose={handleClose}
      />
      <MultiResults
        ingredients={response?.result}
        visible={
          resultVisible &&
          !response?.foundFromDatabase &&
          response?.result?.length > 0
        }
        onClose={handleClose}
        code={code}
      />
      <NoResult
        visible={
          resultVisible &&
          !response?.foundFromDatabase &&
          response?.result?.length == 0
        }
        onClose={handleClose}
      />
      <Grid
        container
        justifyContent="start"
        alignItems="center"
        p={2}
        sx={{
          position: "fixed",
          top: "0",
          zIndex: 30,
          background: "#424242",
        }}
      >
        <Link href="/register" passHref>
          <Button
            variant="contained"
            size="large"
            startIcon={<ArrowBackIosOutlinedIcon />}
          >
            登録画面に戻る
          </Button>
        </Link>
      </Grid>
      <Scanner
        isScan={isScan}
        setIsScan={setIsScan}
        setCode={setCode}
        setError={setError}
      />
    </>
  );
};

export default ScanPage;
