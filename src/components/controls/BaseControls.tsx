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
    <div className="flex h-fit w-full gap-[1rem] border">
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
