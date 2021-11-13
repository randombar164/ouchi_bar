export const BgOrangeButton: React.VFC<{ text: string; onClick: () => void }> =
  ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="flex justify-center items-center py-2 px-5 mx-auto font-bold text-white bg-barOrange-2 rounded-3xl"
      >
        {text}
      </button>
    );
  };
