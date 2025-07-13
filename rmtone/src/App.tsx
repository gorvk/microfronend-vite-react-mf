import { useState } from "react";
import Button from "./Button";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="flex flex-col gap-4 remote-app">
      <div className="text-green-600 font-bold text-3xl">Remote One - {state}</div>
      <Button setCount={setState}/>
    </div>
  );
}

export default App;
