import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="bg-white text-white flex gap-3 px-4 py-2 rounded-full">
          <button
            className="bg-red-500 text-white p-3 rounded-full shadow-xl"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-500 text-white p-3 rounded-full shadow-xl"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-pink-500 text-white p-3 rounded-full shadow-xl"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="bg-blue-500 text-white p-3 rounded-full shadow-xl"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-black text-white p-3 rounded-full shadow-xl"
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
