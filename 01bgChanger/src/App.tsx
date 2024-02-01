import { useState } from "react";
import Button from "./components/Button";
import { colors } from "./data";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="bg-white text-white flex gap-3 px-4 py-2 rounded-full">
          {colors.map((color) => (
            <Button colorName={color} setColor={setColor} key={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
