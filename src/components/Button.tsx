interface ButtonProps {
  children: string | number | React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      type="button"
      className="h-8 w-16 rounded-full border border-neutral-300 shadow-md shadow-neutral-400 hover:shadow-md focus:outline-none active:shadow-none"
    >
      {children}
    </button>
  );
};
export default Button;
