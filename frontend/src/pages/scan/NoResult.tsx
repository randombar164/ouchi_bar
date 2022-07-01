import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import { useCallback } from "react";
import type { ModalProps } from "src/utils/types/type";

export const NoResult: React.VFC<ModalProps> = (prop): JSX.Element => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push("/search-category");
  }, [router]);
  return (
    <Dialog open={prop.visible} onClose={prop.onClose}>
      <DialogTitle>材料が見つかりませんでした</DialogTitle>
      <DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>材料名から検索する</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
