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
    <div className="flex w-56 flex-row-reverse flex-wrap justify-between border ">
      {Array.from({ length: 9 }, (_, index) => {
        return (
          <Button name={String(9 - index)} onClick={onClickHandler} key={index}>
            {9 - index}
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
