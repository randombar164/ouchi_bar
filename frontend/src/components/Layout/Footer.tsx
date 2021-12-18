import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

type MenuItemProps = {
  name: string;
  isActive: boolean;
  icon: React.ReactNode;
  path: string;
};
const MenuItem: React.VFC<MenuItemProps> = ({ name, isActive, icon, path }) => {
  return (
    <Link href={path}>
      <button
        className={`flex flex-col items-center justify-center ${
          isActive ? "text-barOrange-2" : "text-barGray-2"
        }`}
      >
        <div>{icon}</div>
        <p className="text-xs font-bold">{name}</p>
      </button>
    </Link>
  );
};

type IsActivesType = {
  sakagura: boolean;
  register: boolean;
  cocktails: boolean;
};
export const Footer: React.VFC = memo(() => {
  const router = useRouter();
  const path = router?.pathname;
  const [isActives, setIsActives] = useState<IsActivesType>({
    sakagura: false,
    register: false,
    cocktails: false,
  });

  useEffect(() => {
    switch (path) {
      case "/sakagura":
        setIsActives({ sakagura: true, register: false, cocktails: false });
        break;
      case "/register":
        setIsActives({ sakagura: false, register: true, cocktails: false });
        break;
      case "/cocktails":
        setIsActives({ sakagura: false, register: false, cocktails: true });
        break;
      default:
        setIsActives({ sakagura: false, register: false, cocktails: false });
    }
  }, [path]);

  return (
    <div className="fixed bottom-0 z-30 w-full bg-white">
      <div className="flex justify-around items-center w-full h-16 rounded-t-lg shadow-md">
        <MenuItem
          name="My酒蔵"
          isActive={isActives.sakagura}
          path="/sakagura"
          icon={
            isActives.sakagura ? (
              <img
                src="bar_orange.svg"
                alt="酒蔵のイメージ"
                width="32"
                height="32"
              />
            ) : (
              <img
                src="bar_gray.svg"
                alt="酒蔵のイメージ"
                width="32"
                height="32"
              />
            )
          }
        />
        <MenuItem
          name="登録"
          isActive={isActives.register}
          path="/register"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
        <MenuItem
          name="メニュー"
          isActive={isActives.cocktails}
          path="/cocktails"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
});

Footer.displayName = "Footer";
