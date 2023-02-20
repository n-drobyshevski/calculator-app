import type { FocusedItemType } from "../../pages";

interface HistoryItemProps {
  expression: string;
  result: string;
  focusedItem: FocusedItemType;
  isSecondary: boolean;
  index: number;
}
const HistoryItem: React.FC<HistoryItemProps> = ({
  expression,
  result,
  focusedItem,
  index,
  isSecondary,
}) => {
  return (
    <div
      className={`flex w-full p-3
     ${isSecondary ? "bg-neutral-300/40" : ""} `}
    >
      <p
        className={`w-full font-mono tracking-widest ${
          focusedItem.expression && focusedItem.index === index
            ? "bg-neutral-400/50"
            : ""
        }`}
      >
        {expression}
      </p>
      <p
        className={`font-mono tracking-widest ${
          focusedItem.result && focusedItem.index === index
            ? "bg-neutral-400/50"
            : ""
        }`}
      >
        {result}
      </p>
    </div>
  );
};
export default HistoryItem;
