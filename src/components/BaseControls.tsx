import ControlInput from "./ControlInput";
import NumInput from "./NumInput";

interface BaseControlsProps {
  onInput: (char: string) => void;
  onDelete: () => void;
  onExecute: () => void;
}
const BaseControls: React.FC<BaseControlsProps> = ({
  onInput,
  onDelete,
  onExecute,
}) => {
  return (
    <div className="flex h-3/6 w-full gap-[2rem] border">
      <NumInput onClick={onInput} />
      <ControlInput
        onDelete={onDelete}
        onClick={onInput}
        onExecute={onExecute}
      />
    </div>
  );
};
export default BaseControls;
