import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

const foundIngredient = {
  id: 670,
  base_ingredient_id: 1,
  name: 'サントリー ウイスキー',
  tag: '<a href="https://www.amazon.co.jp/%E8%A7%92%E7%93%B6-14999-%E3%82%B5%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC-%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC-700ml/dp/B01CXSRJHI/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&qid=1593349775&s=food-beverage&sr=1-11&linkCode=li2&tag=c6tower-22&linkId=54b1c73ec0d658b95c5e537d3ea3c1bc&language=ja_JP" target="_blank"><img border="0" src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=c6tower-22&language=ja_JP&l=li2&o=9&a=B01CXSRJHI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',
  created_at: '2021-08-28T14:17:25.180Z',
  updated_at: '2021-08-29T11:50:10.230Z',
  img_src:
    'https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP',
};

type Props = {
  doneIsOpen: boolean;
  closeDoneModal: () => void;
};
const Done: React.VFC<Props> = ({ doneIsOpen, closeDoneModal }) => {
  return (
    <Transition appear show={doneIsOpen} as={Fragment}>
      <Dialog
        as="div"
        //   className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeDoneModal}
      >
        <div className="min-h-screen px-4 text-center">
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
            className="inline-block h-screen align-middle"
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
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                //   className="text-lg font-medium leading-6 text-gray-900"
              >
                <div className="text-lg font-medium leading-6 text-gray-900">
                  この商品は登録されています
                </div>
              </Dialog.Title>
              {/* <div className="mt-2">
                <p className="text-sm text-gray-500"></p>
              </div> */}

              <div>{foundIngredient.name}</div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeDoneModal}
                >
                  追加する
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Done;
