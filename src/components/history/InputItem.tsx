import Cursor from "../Cursor";

interface InputItemProps {
  output: {
    before: string;
    after: string;
  };
  focused: boolean;
}

const outputTextStyle = "select-all bg-transparent font-mono tracking-widest";

const InputItem: React.FC<InputItemProps> = ({ output, focused }) => {
  return (
    <div
      className={`flex items-center justify-start border-t-2 border-neutral-400/50 py-2 px-3`}
    >
      <p className={outputTextStyle}>{output.before}</p>
      {focused && <Cursor />}
      <p className={outputTextStyle}>{output.after}</p>
    </div>
  );
};

export default InputItem;
