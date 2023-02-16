import { useEffect, useState } from "react";
import Cursor from "./Cursor";
interface OutputProps {
  output: { before: string[]; after: string[] };
}
const Output: React.FC<OutputProps> = ({ output }) => {
  const [strOutput, setStrOutput] = useState<{ before: string; after: string }>(
    { before: "", after: "" }
  );

  useEffect(() => {
    const newOutputBefore: string = output.before.join("");
    const newOutputAfter: string = output.after.join("");
    setStrOutput({ before: newOutputBefore, after: newOutputAfter });
  }, [output]);

  const outputTextStyle =
    "select-all bg-transparent font-mono tracking-widest text-lg";
  return (
    <div className="flex h-40 w-full flex-col justify-center rounded-xl border bg-neutral-300 p-4 shadow-inner shadow-neutral-400">
      <div className="flex items-center justify-start">
        <p className={outputTextStyle}>{strOutput.before}</p>
        <Cursor />
        <p className={outputTextStyle}>{strOutput.after}</p>
      </div>
    </div>
  );
};
export default Output;
