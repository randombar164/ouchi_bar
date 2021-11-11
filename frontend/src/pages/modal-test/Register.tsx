import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

// const result = [
//   {
//     ASIN: 'B092M6K7BQ',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B092M6K7BQ?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/51lWNyPlWdS._SL160_.jpg',
//           Width: 160,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue:
//           '【シングルモルト グレーン ブレンデッド ウイスキー飲み比べセット】 白州 知多 碧AO [ ウイスキー 日本 700ml×3本 ]',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },

//   {
//     ASIN: 'B005VB4IGA',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B005VB4IGA?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/41-H2W6qLTL._SL160_.jpg',
//           Width: 160,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue: 'ブラックニッカ クリア [ ウイスキー 日本 4000ml ]',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },

//   {
//     ASIN: 'B01D2TERB8',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B01D2TERB8?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/41XDMbuEj+L._SL160_.jpg',
//           Width: 54,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue: 'サントリー ウイスキー 角瓶 [日本 4L ]',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },
//   {
//     ASIN: 'B013WEDPHU',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B013WEDPHU?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/41BgGfkgQkL._SL160_.jpg',
//           Width: 55,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue: 'サントリー ウイスキー トリス クラシック [日本 4000ml ]',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },
//   {
//     ASIN: 'B011WPDV70',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B011WPDV70?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/41dn1LoGjFL._SL160_.jpg',
//           Width: 52,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue: 'サントリー ウイスキー 知多 700ml',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },
//   {
//     ASIN: 'B00FBC99XQ',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//         {
//           ContextFreeName: '洋酒・リキュールギフト',
//           DisplayName: '洋酒・リキュールギフト',
//           Id: '4522747051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B00FBC99XQ?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/51jCAua9nGL._SL160_.jpg',
//           Width: 137,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue:
//           'シーバスリーガル ミズナラ 12年 ブレンデッドスコッチ [ ウイスキー スコットランド 700ml ]',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },
//   {
//     ASIN: 'B09DJVXQJ9',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B09DJVXQJ9?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/51uN9hh9jEL._SL160_.jpg',
//           Width: 160,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue:
//           'バランタイン シングルモルト グレンバーギー 12年 [ ウイスキー イギリス 700ml ] [ギフトBox入り]',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },
//   {
//     ASIN: 'B07ZQWNJ1J',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B07ZQWNJ1J?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/41kt5c2l+lL._SL160_.jpg',
//           Width: 160,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue:
//           '富士乃森（金ラベル） (THE FUJINOMORI WHISKY） 4000ml 37度 ザ フジノモリ ウィスキー 日本国産 ブレンデット ウイスキー 富士乃森',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },
//   {
//     ASIN: 'B00WSEVQ9A',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B00WSEVQ9A?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/51mpT1K0Q1L._SL160_.jpg',
//           Width: 153,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue:
//           'サントリー ウイスキー 響 JAPANESE HARMONY カートン付き [日本 700ml ]',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },
//   {
//     ASIN: 'B01CXSRJHI',
//     BrowseNodeInfo: {
//       BrowseNodes: [
//         {
//           ContextFreeName: 'ウイスキー',
//           DisplayName: 'ウイスキー',
//           Id: '71626051',
//           IsRoot: false,
//         },
//       ],
//     },
//     DetailPageURL:
//       'https://www.amazon.co.jp/dp/B01CXSRJHI?tag=ouchibar09-22&linkCode=osi&th=1&psc=1',
//     Images: {
//       Primary: {
//         Medium: {
//           Height: 160,
//           URL: 'https://m.media-amazon.com/images/I/41QewqQQyjL._SL160_.jpg',
//           Width: 55,
//         },
//       },
//     },
//     ItemInfo: {
//       Title: {
//         DisplayValue: 'サントリー ウイスキー 角瓶 [日本 700ml ]',
//         Label: 'Title',
//         Locale: 'ja_JP',
//       },
//     },
//   },
// ];

type Props = {
  registerIsOpen: boolean;
  closeRegisterModal: () => void;
  // result: string[];
};

const Register: React.VFC<Props> = ({ registerIsOpen, closeRegisterModal }) => {
  return (
    <Transition appear show={registerIsOpen} as={Fragment}>
      <Dialog
        as="div"
        //   className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeRegisterModal}
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
                <div>登録する商品を選択してください</div>
              </Dialog.Title>
              {/* <div className="mt-2">
                <p className="text-sm text-gray-500"></p>
              </div> */}
              <div></div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeRegisterModal}
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

export default Register;
