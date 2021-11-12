import { useRouter } from "next/router";
import { useCallback } from "react";
import { BgOrangeButton } from "src/components/BgOrangeButton";
import { Modal } from "src/components/Modal";

export const NoResult = () => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push("/search-category");
  }, [router]);
  return (
    <Modal isShow={true} onClose={}>
      <div>
        <p className="text-sm font-bold">材料が見つかりませんでした</p>
        <BgOrangeButton onClick={handleClick} text={"材料名から検索する"} />
      </div>
    </Modal>
  );
};
