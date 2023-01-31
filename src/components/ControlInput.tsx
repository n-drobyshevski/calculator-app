import Button from "./Button";
interface ControlInputProps {
  onClick: (char: string) => void;
}
const ControlInput: React.FC<ControlInputProps> = ({ onClick }) => {
  const onClickHandler = (char: string) => {
    onClick(char);
  };
  return (
    <div className="flex w-[9rem] flex-wrap justify-between border ">
      <Button name="(" onClick={onClickHandler}>
        (
      </Button>
      <Button name=")" onClick={onClickHandler}>
        )
      </Button>
      <Button name="+" onClick={onClickHandler}>
        +
      </Button>
      <Button name="-" onClick={onClickHandler}>
        -
      </Button>
      <Button name="x" onClick={onClickHandler}>
        x
      </Button>
      <Button name="/" onClick={onClickHandler}>
        /
      </Button>
      <Button name="exe" onClick={onClickHandler}>
        EXE
      </Button>
      <Button name="del" onClick={onClickHandler}>
        DEL
      </Button>
    </div>
  );
};

export default ControlInput;
