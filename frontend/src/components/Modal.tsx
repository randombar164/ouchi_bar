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
    <Transition appear show={isShow} as={Fragment}>
      <Dialog
        as="div"
        //   className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="px-4 min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className={`inline-block h-screen align-middle ${className}`}
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-white rounded-xl">{children}</div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
