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
    <div className="flex h-24 w-full flex-col justify-center rounded-xl border bg-neutral-300 p-4">
      <p className="w-full appearance-none bg-transparent font-mono focus:outline-none">
        {strOutput}
      </p>
    </div>
  );
};
export default Output;
