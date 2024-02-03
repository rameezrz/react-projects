import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import PasswordInput from "./components/PasswordInput";
import SettingsForm from "./components/SettingsForm";

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

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(Number(e.target.value));
  };

  const handleNumberToggle = () => {
    setIsNumberAllowed((prev) => !prev);
  };

  const handleCharacterToggle = () => {
    setIsCharacterAllowed((prev) => !prev);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharacterAllowed, isNumberAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen bg-black flex justify-center">
      <div className="bg-gray-700 mt-32 w-[60%] h-[25%] rounded-2xl flex flex-col justify-center">
        <h1 className="text-white text-center mb-8 text-3xl font-bold">
          Password Generator
        </h1>

        <PasswordInput
          password={password}
          passwordRef={passwordRef}
          isCopied={isCopied}
          onCopy={copyToClipBoard}
        />

        <SettingsForm
          length={length}
          isNumberAllowed={isNumberAllowed}
          isCharacterAllowed={isCharacterAllowed}
          onLengthChange={handleLengthChange}
          onNumberToggle={handleNumberToggle}
          onCharacterToggle={handleCharacterToggle}
        />
      </div>
    </div>
  );
}

export default App;
