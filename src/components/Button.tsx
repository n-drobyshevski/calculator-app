interface ButtonProps {
  children: string | number | React.ReactNode;
  name: string;
  styleVariant?: "small" | "standart";
  onClick: (name: string) => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  name,
  styleVariant,
}) => {
  const onClickHandler = () => {
    onClick(name);
  };
  const standartVariant = "w-12 h-8";
  const smallVariant = "w-10 h-10";
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={`flex items-center justify-center rounded-full border border-neutral-300 shadow-sm shadow-neutral-400 
      focus:outline-none active:shadow-none md:hover:bg-neutral-300/50
      ${
        styleVariant == "small" || typeof styleVariant == undefined
          ? smallVariant
          : standartVariant
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
