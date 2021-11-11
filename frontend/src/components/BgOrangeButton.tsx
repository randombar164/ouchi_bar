export const BgOrangeButton: React.VFC<{ text: string; onClick: () => void }> =
  ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-barOrange-3 rounded-3xl font-bold text-white px-2 py-1 flex justify-center items-center"
      >
        {text}
      </button>
    );
  };
