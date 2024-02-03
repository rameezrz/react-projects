import { SettingsFormProps } from "../types";

const SettingsForm = ({
  length,
  isNumberAllowed,
  isCharacterAllowed,
  onLengthChange,
  onNumberToggle,
  onCharacterToggle,
}: SettingsFormProps) => {
  return (
    <div className="flex gap-16 justify-center">
      <div className="flex gap-4">
        <input
          type="range"
          name="length"
          id="length"
          defaultValue={8}
          min={1}
          max={100}
          onChange={onLengthChange}
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
          onChange={onNumberToggle}
        />
        <label className="text-yellow-500 text-2xl" htmlFor="isNumberAllowed">
          Numbers
        </label>
      </div>
      <div className="flex gap-4">
        <input
          type="checkbox"
          name="isCharacterAllowed"
          id="isCharacterAllowed"
          defaultChecked={isCharacterAllowed}
          onChange={onCharacterToggle}
        />
        <label
          className="text-yellow-500 text-2xl"
          htmlFor="isCharacterAllowed"
        >
          Characters
        </label>
      </div>
    </div>
  );
};

export default SettingsForm;
