import { useEffect, useState } from "react";
import InputItem from "./history/InputItem";
import HistoryList from "./history/HistoryList";
interface OutputProps {
  output: { before: string[]; after: string[] };
  history: { expression: string; result: string }[];
}
const Output: React.FC<OutputProps> = ({ output, history }) => {
  const [strOutput, setStrOutput] = useState<{ before: string; after: string }>(
    { before: "", after: "" }
  );

  useEffect(() => {
    const newOutputBefore: string = output.before.join("");
    const newOutputAfter: string = output.after.join("");
    setStrOutput({ before: newOutputBefore, after: newOutputAfter });
  }, [output]);

  return (
    <div className="flex h-40 w-full flex-col justify-end overflow-hidden rounded-xl border border-neutral-300 shadow-inner shadow-neutral-400">
      <HistoryList history={history} />
      <InputItem output={strOutput} />
    </div>
  );
};
export default Output;
