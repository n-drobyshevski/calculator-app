import Button from "../Button";
import { CgMathDivide, CgMathMinus, CgMathPlus } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
interface ControlInputProps {
  onClick: (char: string) => void;
  onExecute: () => void;
  onDelete: () => void;
}
const ControlInput: React.FC<ControlInputProps> = ({
  onClick,
  onDelete,
  onExecute,
}) => {
  const onClickHandler = (char: string) => {
    onClick(char);
  };
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-x-2 gap-y-5 border ">
      <Button name="(" onClick={onClickHandler}>
        (
      </Button>
      <Button name=")" onClick={onClickHandler}>
        )
      </Button>
      <Button name="x" onClick={onClickHandler}>
        <IoClose />
      </Button>
      <Button name="/" onClick={onClickHandler}>
        <CgMathDivide />
      </Button>
      <Button name="+" onClick={onClickHandler}>
        <CgMathPlus />
      </Button>
      <Button name="-" onClick={onClickHandler}>
        <CgMathMinus />
      </Button>
      <Button name="exe" onClick={onExecute}>
        EXE
      </Button>
      <Button name="del" onClick={onDelete}>
        DEL
      </Button>
    </div>
  );
};

export default ControlInput;
