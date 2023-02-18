interface HistoryItemProps {
  expression: string;
  result: string;
}
const HistoryItem: React.FC<HistoryItemProps> = ({ expression, result }) => {
  return (
    <div className="flex w-full p-3">
      <p className="w-full">{expression}</p>
      <p>{result}</p>
    </div>
  );
};
export default HistoryItem;
