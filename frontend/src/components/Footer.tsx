// import type { React.VFC } from "react";

type Props = {
  tab: number;
};

export const Footer: React.VFC<Props> = ({ tab }) => {
  if (tab == 0) {
    return (
      <div className="grid fixed bottom-0 grid-cols-2 place-self-center p-2 w-full rounded-t-2xl border-t-4 border-r-0 border-b-0 border-l-0 border-gray-400 border-opacity-20 divide-x divide-gray-400">
        <a
          href="/"
          className="text-base font-semibold text-center text-red-600"
        >
          My酒蔵
        </a>
        <a
          href="/"
          className="text-base font-semibold text-center text-red-400"
        >
          作れるカクテル一覧
        </a>
      </div>
    );
  } else if (tab == 1) {
    return (
      <div className="grid fixed bottom-0 grid-cols-2 place-self-center p-2 w-full rounded-t-2xl border-t-4 border-r-0 border-b-0 border-l-0 border-gray-400 border-opacity-20 divide-x divide-gray-400">
        <a
          href="/"
          className="text-base font-semibold text-center text-current"
        >
          My酒蔵
        </a>
        <a
          href="/"
          className="text-base font-semibold text-center text-red-600"
        >
          作れるカクテル一覧
        </a>
      </div>
    );
  } else {
    return (
      <div className="grid fixed bottom-0 grid-cols-2 place-self-center p-2 w-full rounded-t-2xl border-t-4 border-r-0 border-b-0 border-l-0 border-gray-400 border-opacity-20 divide-x divide-gray-400">
        <a
          href="/"
          className="text-base font-semibold text-center text-current"
        >
          My酒蔵
        </a>
        <a
          href="/"
          className="text-base font-semibold text-center text-red-400"
        >
          作れるカクテル一覧
        </a>
      </div>
    );
  }
};
