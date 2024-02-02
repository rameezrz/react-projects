import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const passwordGenerator = useCallback(() => {
    setIsCopied(false);
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx";

    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += "!@#$%^&*()_+{}";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isCharacterAllowed, isNumberAllowed, setPassword]);

  const copyToClipBoard = useCallback(() => {
    if (passwordRef && passwordRef.current !== null) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(passwordRef.current.value);
      setIsCopied(true);
    }
  }, [passwordRef]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharacterAllowed, isNumberAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen bg-black flex justify-center">
      <div className="bg-gray-700 mt-32 w-[60%] h-[25%] rounded-2xl flex flex-col justify-center">
        <h1 className="text-white text-center mb-8 text-3xl font-bold">
          Password Generator
        </h1>
        <div className="w-[80%] flex justify-between mx-auto rounded-2xl overflow-hidden mb-7">
          <input
            className="outline-none py-3 px-5 text-xl w-full"
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none px-5 py-3 bg-blue-700 text-white font-bold text-xl"
            onClick={copyToClipBoard}
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="flex gap-16 justify-center">
          <div className="flex gap-4">
            <input
              type="range"
              name="length"
              id="length"
              defaultValue={8}
              min={1}
              max={100}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="text-yellow-500 text-2xl" htmlFor="length">
              Length ({length})
            </label>
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              name="isNumberAllowed"
              id="isNumberAllowed"
              defaultChecked={isNumberAllowed}
              onClick={() => setIsNumberAllowed((prev) => !prev)}
            />
            <label
              className="text-yellow-500 text-2xl"
              htmlFor="isNumberAllowed"
            >
              Numbers
            </label>
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              name="isCharacterAllowed"
              id="isCharacterAllowed"
              defaultChecked={isCharacterAllowed}
              onClick={() => setIsCharacterAllowed((prev) => !prev)}
            />
            <label
              className="text-yellow-500 text-2xl"
              htmlFor="isCharacterAllowed"
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
