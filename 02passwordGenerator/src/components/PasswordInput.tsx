import { PasswordInputProps } from "../types";

const PasswordInput = ({
  password,
  passwordRef,
  isCopied,
  onCopy,
}: PasswordInputProps) => {
  return (
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
        onClick={onCopy}
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default PasswordInput;
