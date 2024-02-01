type ButtonProps = {
  colorName: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

const Button = ({ setColor, colorName }: ButtonProps) => {
  const capitalizedColorName =
    colorName.charAt(0).toUpperCase() + colorName.slice(1);
  return (
    <button
      className="text-white p-3 rounded-full shadow-xl"
      onClick={() => setColor(colorName)}
      style={{ backgroundColor: colorName }}
    >
      {capitalizedColorName}
    </button>
  );
};

export default Button;
