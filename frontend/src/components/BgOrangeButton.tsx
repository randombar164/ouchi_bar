export const BgOrangeButton: React.VFC<{ text: string; onClick: () => void }> =
  ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-barOrange-2 mx-auto rounded-3xl font-bold text-white px-5 py-2 flex justify-center items-center"
      >
        {text}
      </button>
    );
  };
