type PasswordInputProps = {
  password: string;
  passwordRef: React.RefObject<HTMLInputElement>;
  isCopied: boolean;
  onCopy: () => void;
};

export default PasswordInputProps;
