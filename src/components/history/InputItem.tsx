import Cursor from "../Cursor";

interface InputItemProps {
  output: {
    before: string;
    after: string;
  };
}

const outputTextStyle = "select-all bg-transparent font-mono tracking-widest";

const InputItem: React.FC<InputItemProps> = ({ output }) => {
  return (
    <div
      className={`flex items-center justify-start border-t-2 border-neutral-400/50 py-2 px-3`}
    >
      <p className={outputTextStyle}>{output.before}</p>
      <Cursor />
      <p className={outputTextStyle}>{output.after}</p>
    </div>
  );
};

export default InputItem;
