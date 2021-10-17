type Props = {
  children: React.ReactNode;
};

export const ContentWraper: React.VFC<Props> = ({ children }) => {
  return <div className="mx-auto w-full max-w-[330px]">{children}</div>;
};
