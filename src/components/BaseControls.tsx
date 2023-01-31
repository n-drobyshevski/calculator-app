import ControlInput from "./ControlInput";
import NumInput from "./NumInput";

interface BaseControlsProps {
  onInput: (char: string) => void;
}
const BaseControls: React.FC<BaseControlsProps> = ({ onInput }) => {
  const inputHandler = (char: string) => {
    onInput(char);
  };
  return (
    <div className="flex h-3/6 w-full gap-[2rem] border">
      <NumInput onClick={inputHandler} />
      <ControlInput onClick={inputHandler} />
    </div>
  );
};
export default BaseControls;
