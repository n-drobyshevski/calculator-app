import ControlInput from "./ControlInput";
import NumInput from "./NumInput";

const BaseControls: React.FC = () => {
  return (
    <div className="flex h-3/6 w-full gap-[2rem] border">
      <NumInput />
      <ControlInput />
    </div>
  );
};
export default BaseControls;
