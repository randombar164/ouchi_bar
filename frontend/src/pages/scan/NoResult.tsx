import { useRouter } from "next/router";
import { useCallback } from "react";
import { BgOrangeButton } from "src/components/BgOrangeButton";
import { Modal } from "src/components/Modal";
import type { ModalProps } from "src/utils/types/type";

export const NoResult: React.VFC<ModalProps> = (prop): JSX.Element => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push("/search-category");
  }, [router]);
  return (
    <Modal isShow={prop.visible} onClose={prop.onClose} className="mt-48">
      <div className="py-6 text-center">
        <p className="mb-4 text-sm font-bold">材料が見つかりませんでした</p>
        <BgOrangeButton onClick={handleClick} text={"材料名から検索する"} />
      </div>
    </Modal>
  );
};
