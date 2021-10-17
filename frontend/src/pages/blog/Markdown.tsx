type MarkdownType = {
  children: React.ReactNode;
};

export const Heading1: React.VFC<MarkdownType> = ({
  children,
}): JSX.Element => {
  return (
    <div className="py-3">
      <h1 className="py-4 px-1 text-xl md:text-3xl font-bold text-white bg-barOrange-3">
        {children}
      </h1>
    </div>
  );
};

export const Heading2: React.VFC<MarkdownType> = ({
  children,
}): JSX.Element => {
  return (
    <div className="py-3">
      <h2 className="p-2 text-lg md:text-2xl font-bold text-white bg-barOrange-2">
        {children}
      </h2>
    </div>
  );
};

export const Heading3: React.VFC<MarkdownType> = ({
  children,
}): JSX.Element => {
  return <h3 className="pt-8 pb-4 text-lg text-barOrange-4">{children}</h3>;
};
