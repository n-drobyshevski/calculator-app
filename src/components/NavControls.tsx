import {
  BiDownArrow,
  BiLeftArrow,
  BiRightArrow,
  BiUpArrow,
} from "react-icons/bi";
interface NavControlsProps {
  onLeftClick: () => void;
  onRightClick: () => void;
}
const NavControls: React.FC<NavControlsProps> = ({
  onLeftClick,
  onRightClick,
}) => {
  const commonStyleBorders =
    "border border-neutral-300  p-1 rounded-xl shadow shadow-neutral-400 flex items-center bg-neutral-200 hover:bg-neutral-300/50";
  const commonStyleButtons = "relative focus:outline-none";
  return (
    <div className="grid h-20 w-20 grid-cols-3 grid-rows-3 place-items-center gap-2">
      <button
        onClick={onLeftClick}
        type="button"
        className={`col-start-1 col-end-2 row-start-2 border-r-0 ${commonStyleButtons}`}
      >
        <div
          className={`${commonStyleBorders} absolute -top-3 -left-3 h-6 w-12`}
        >
          <BiLeftArrow />
        </div>
      </button>
      <button
        onClick={onRightClick}
        type="button"
        className={`col-start-2 row-start-1 row-end-2 ${commonStyleButtons} justify-start
        border-b-0 `}
      >
        <div
          className={`${commonStyleBorders} absolute -top-3 -right-3  h-12 w-6 flex-col `}
        >
          <BiUpArrow />
        </div>
      </button>
      <button
        onClick={onRightClick}
        type="button"
        className={`col-start-3 row-start-2 ${commonStyleButtons} border-l-0`}
      >
        <div
          className={`${commonStyleBorders} absolute -bottom-3 -right-3 h-6 w-12 justify-end`}
        >
          <BiRightArrow />
        </div>
      </button>
      <button
        onClick={onRightClick}
        type="button"
        className={`col-start-2 col-end-2 ${commonStyleButtons}
        row-start-3 border-t-0`}
      >
        <div
          className={`${commonStyleBorders} absolute -right-3 -bottom-3 h-12 w-6 flex-col items-center justify-end`}
        >
          <BiDownArrow />
        </div>
      </button>
      <div className="z-10 col-start-2 col-end-2 row-start-2 row-end-2 h-[22px] w-[32px] bg-neutral-200"></div>
      <div className="z-10 col-start-2 col-end-2 row-start-2 row-end-2 h-[32px] w-[22px] bg-neutral-200"></div>
    </div>
  );
};

export default NavControls;
