import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
  isShow: boolean;
  onClose: () => void;
  className?: string;
};
export const Modal: React.VFC<Props> = ({
  children,
  isShow,
  onClose,
  className,
}) => {
  return (
    <Transition appear show={isShow} as="div">
      <Dialog as="div" className="fixed inset-0 z-50" onClose={onClose}>
        <div className="py-7 h-screen">
          <Transition.Child
            // as="div"
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />
          </Transition.Child>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`mx-auto w-full max-w-xs md:max-w-xl bg-white rounded-3xl transition-all transform ${className}`}
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
