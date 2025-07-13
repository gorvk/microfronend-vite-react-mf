import React from "react";

const RemoteTwoApp = React.lazy(() => import("remotetwo/App"));
const RemoteOneApp = React.lazy(() => import("remoteone/App"));
import useCounterStore from "remotetwo/useCounterStore";

function App() {
  const count = useCounterStore((state: any) => state.count);
  return (
    <div className="flex flex-col gap-4 p-4 m-4 border-2 border-yellow-500 border-dashed [&>.remote-app]:border-2 [&>.remote-app]:border-dashed [&>.remote-app]:border-yellow-500 [&>.remote-app]:p-4 [&>.remote-app]:h-50">
      <div className="text-red-500 font-bold text-3xl">Host App - <span className="text-blue-500">{count}</span></div>
      <RemoteOneApp />
      <RemoteTwoApp />
    </div>
  );
}

export default App;
