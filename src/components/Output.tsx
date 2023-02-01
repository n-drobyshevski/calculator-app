import { useEffect, useState } from "react";

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
      <p className="w-full select-all bg-transparent font-mono ">{strOutput}</p>
    </div>
  );
};
export default Output;
