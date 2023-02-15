import ControlInput from "./ControlInput";
import NumInput from "./NumInput";

interface BaseControlsProps {
  onInput: (char: string) => void;
  onDelete: () => void;
  onExecute: () => void;
  onGetAnswer: () => void;
}
const BaseControls: React.FC<BaseControlsProps> = ({
  onInput,
  onDelete,
  onExecute,
  onGetAnswer,
}) => {
  return (
    <div className="flex h-3/6 w-full gap-[2rem] border">
      <NumInput onClick={onInput} onAnswerClick={onGetAnswer} />
      <ControlInput
        onDelete={onDelete}
        onClick={onInput}
        onExecute={onExecute}
      />
    </div>
  );
};
export default BaseControls;
