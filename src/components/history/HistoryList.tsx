import type { FocusedItemType } from "../../pages";
import HistoryItem from "./HistoryItem";

interface HistoryListProps {
  history: { expression: string; result: string }[];
  focusedItem: FocusedItemType;
}
const HistoryListProps: React.FC<HistoryListProps> = ({
  history,
  focusedItem,
}) => {
  let nextId = 0;

  return (
    <div className="flex h-full flex-col-reverse">
      {history.map(({ expression, result }, index) => (
        <HistoryItem
          key={nextId++}
          expression={expression}
          result={result}
          isSecondary={index % 2 === 0 ? true : false}
          focusedItem={focusedItem}
          index={index}
        />
      ))}
    </div>
  );
};

export default HistoryListProps;
