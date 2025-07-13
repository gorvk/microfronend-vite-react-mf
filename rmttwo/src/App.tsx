import useCounterStore from "./store/counterStore";

function App() {
  const count = useCounterStore((state) => state.count);
  const setCount = useCounterStore((state) => state.setCount);
  return (
    <div className="flex flex-col gap-4 remote-app">
      <div className="text-blue-500 font-bold text-3xl remote-app">
        Remote Two - {count}
      </div>
      <button
        className="bg-blue-500 p-2 h-10 w-20 rounded-lg font-bold cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
