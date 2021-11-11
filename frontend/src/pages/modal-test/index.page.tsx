import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Done from 'src/pages/modal-test/Done';
import Register from 'src/pages/modal-test/Register';
import Reject from 'src/pages/modal-test/Reject';

type Props = {
  tab: number;
};

const Test: React.VFC<Props> = ({ tab }): JSX.Element => {
  let [doneIsOpen, setDoneIsOpen] = useState(true);
  let [registerIsOpen, setRegisterIsOpen] = useState(true);
  let [rejectIsOpen, setRejectIsOpen] = useState(true);

  const closeDoneModal = () => {
    setDoneIsOpen(false);
  };

  const openDoneModal = () => {
    setDoneIsOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterIsOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterIsOpen(true);
  };

  const closeRejectModal = () => {
    setRejectIsOpen(false);
  };

  const openRejectModal = () => {
    setRejectIsOpen(true);
  };

  return (
    <>
      <div className="grid">
        <div
          className="grid grid-cols-3 items-center justify-center"
          // className="fixed inset-0 flex items-center justify-center"
        >
          <button
            type="button"
            onClick={openDoneModal}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open Done
          </button>
        </div>

        <div
          className="grid grid-cols-3 items-center"
          // className="fixed inset-0 flex items-center justify-center"
        >
          <button
            type="button"
            onClick={openRegisterModal}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open Register
          </button>
        </div>

        <div
          className="grid grid-cols-3 items-center"
          // className="fixed inset-0 flex items-center justify-center"
        >
          <button
            type="button"
            onClick={openRejectModal}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open Reject
          </button>
        </div>
      </div>
      <Done doneIsOpen={doneIsOpen} closeDoneModal={closeDoneModal} />
      <Register
        registerIsOpen={registerIsOpen}
        closeRegisterModal={closeRegisterModal}
      />
      <Reject rejectIsOpen={rejectIsOpen} closeRejectModal={closeRejectModal} />
    </>
  );
};

export default Test;
