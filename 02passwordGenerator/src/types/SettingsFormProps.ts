import React from "react";

type SettingsFormProps = {
  length: number;
  isNumberAllowed: boolean;
  isCharacterAllowed: boolean;
  onLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNumberToggle: () => void;
  onCharacterToggle: () => void;
};

export default SettingsFormProps;
