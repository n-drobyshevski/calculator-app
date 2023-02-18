interface HistoryItemProps {
  expression: string;
  result: string;
  isSecondary: boolean;
}
const HistoryItem: React.FC<HistoryItemProps> = ({
  expression,
  result,
  isSecondary: isSecondary,
}) => {
  return (
    <div
      className={`flex w-full p-3
     ${isSecondary ? "bg-neutral-300/40" : ""} `}
    >
      <p className="w-full font-mono tracking-widest">{expression}</p>
      <p className="font-mono tracking-widest">{result}</p>
    </div>
  );
};
export default HistoryItem;
