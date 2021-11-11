import { BgOrangeButton } from "src/components/BgOrangeButton";
import { Modal } from "src/components/Modal";

export const NoResult = () => {
  return (
    <Modal isShow={true} onClose={}>
      <div className="bg-white rounded-xl">
        <p className="text-sm font-bold">材料が見つかりませんでした</p>
        <BgOrangeButton
          onClick={() => {
            return;
          }}
          text={"材料名から検索する"}
        />
      </div>
    </Modal>
  );
};
