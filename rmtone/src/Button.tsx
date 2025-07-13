type Props = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ setCount }: Props) => {
  return (
    <button
      className="bg-pink-500 p-2 h-10 w-20 rounded-lg font-bold cursor-pointer"
      onClick={() => setCount((value) => value + 1)}
    >
      Click Me
    </button>
  );
};

export default Button;
