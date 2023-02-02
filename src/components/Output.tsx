import { useEffect, useState } from "react";
import Cursor from "./Cursor";
interface OutputProps {
  output: string[];
}
const Output: React.FC<OutputProps> = ({ output }) => {
  const [strOutput, setStrOutput] = useState<string>("");

  useEffect(() => {
    const newOutput: string = output.join("");
    setStrOutput(newOutput);
  }, [output]);

  return (
    <div className="flex h-24 w-full flex-col justify-center rounded-xl border bg-neutral-300 p-4 shadow-inner shadow-neutral-400">
      <div className="items-center flex justify-start">
        <p className="select-all bg-transparent font-mono ">{strOutput}</p>
        <Cursor />
      </div>
    </div>
  );
};
export default Output;
