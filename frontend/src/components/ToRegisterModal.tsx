import { useRouter } from "next/router";
import { Modal } from "src/components/Modal";

type Props = {
  name: string;
};
export const ToRegisterModal: React.VFC<Props> = ({ name }): JSX.Element => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/register");
  };
  return (
    <Modal isShow={true} onClose={handleClick}>
      <div className="p-4 text-center">
        <p className="py-6">
          {name}が<br />
          一つも見つかりません
        </p>
        <button
          className="px-6 h-12 font-bold text-center text-white bg-barOrange-2 rounded-lg shadow-lg"
          onClick={handleClick}
        >
          お酒を登録してみよう
        </button>
      </div>
    </Modal>
  );
};
