import Button from "./Button";

const ControlInput: React.FC = () => {
  return (
    <div className="flex w-[9rem] flex-wrap justify-between border ">
      <Button>(</Button>
      <Button>)</Button>
      <Button>+</Button>
      <Button>-</Button>
      <Button>x</Button>
      <Button>/</Button>
      <Button>EXE</Button>
      <Button>Ans</Button>
    </div>
  );
};

export default ControlInput;
