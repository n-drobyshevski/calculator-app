interface ButtonProps {
  children: string | number | React.ReactNode;
  name: string;
  onClick: (name: string) => void;
}
const Button: React.FC<ButtonProps> = ({ children, onClick, name }) => {
  const onClickHandler = () => {
    onClick(name);
  };
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className="h-8 w-16 rounded-full border border-neutral-300 shadow-md shadow-neutral-400 hover:shadow-md focus:outline-none active:shadow-none"
    >
      {children}
    </button>
  );
};
export default Button;
