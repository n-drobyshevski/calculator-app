import Button from "./Button";

interface NumInputProps {
  onClick: (char: string) => void;
  onAnswerClick: () => void;
}
const NumInput: React.FC<NumInputProps> = ({ onClick, onAnswerClick }) => {
  const onClickHandler = (char: string) => {
    onClick(char);
  };
  return (
    <div className="grid max-w-[14rem] grid-flow-row grid-cols-3 gap-x-4 gap-y-6 border ">
      {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map((number) => {
        return (
          <Button name={number} onClick={onClickHandler} key={number}>
            {number}
          </Button>
        );
      })}
      <Button name="ans" onClick={onAnswerClick}>
        Ans
      </Button>
      <Button name="." onClick={onClickHandler}>
        .
      </Button>
      <Button name="0" onClick={onClickHandler}>
        0
      </Button>
    </div>
  );
};
export default NumInput;
