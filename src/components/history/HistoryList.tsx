import HistoryItem from "./HistoryItem";

interface HistoryListProps {
  history: { expression: string; result: string }[];
}
const HistoryListProps: React.FC<HistoryListProps> = ({ history }) => {
  let nextId = 0;
  return (
    <div className="flex h-full flex-col justify-end">
      {history.map(({ expression, result }) => (
        <HistoryItem key={nextId++} expression={expression} result={result} />
      ))}
    </div>
  );
};

export default HistoryListProps;
