import Button from "./Button";

const NumInput: React.FC = () => {
  return (
    <div className="flex w-56 flex-row-reverse flex-wrap justify-between border border-neutral-800">
      {Array.from({ length: 9 }, (_, index) => {
        return <Button key={index}>{9 - index}</Button>;
      })}
      <Button>
        x10<sup>x</sup>
      </Button>
      <Button>.</Button>
      <Button>0</Button>
    </div>
  );
};
export default NumInput;
