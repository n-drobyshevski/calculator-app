import HistoryItem from "./HistoryItem";

interface HistoryListProps {
  history: { expression: string; result: string }[];
}
const HistoryListProps: React.FC<HistoryListProps> = ({ history }) => {
  let nextId = 0;
  return (
    <div className="flex h-full flex-col justify-end">
      {history.map(({ expression, result }, index) => (
        <HistoryItem
          key={nextId++}
          expression={expression}
          result={result}
          isSecondary={index % 2 === 0 ? true : false}
        />
      ))}
    </div>
  );
};

export default HistoryListProps;
