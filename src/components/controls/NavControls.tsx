import {
  BiDownArrow,
  BiLeftArrow,
  BiRightArrow,
  BiUpArrow,
} from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";
interface NavControlsProps {
  onLeftClick: () => void;
  onRightClick: () => void;
  onDownClick: () => void;
  onUpClick: () => void;

  onOkClick: () => void;
  onBackClick: () => void;
}
const NavControls: React.FC<NavControlsProps> = ({
  onLeftClick,
  onRightClick,
  onDownClick,
  onUpClick,
  onOkClick,
  onBackClick,
}) => {
  const commonStyleBorders =
    "border border-neutral-300 p-1 rounded-xl shadow shadow-neutral-400 flex items-center bg-neutral-200 active:shadow-none md:hover:bg-neutral-300/50";
  const commonStyleButtons = "relative focus:outline-none";

  const roundButtonsStyle =
    "rounded-full border border-neutral-300 shadow shadow=neutral-400 md:hover:bg-neutral-300/30 active:shadow-none focus:outline-none w-10 h-10 flex justify-center items-center";
  return (
    <div className="flex items-center justify-between">
      {/* arrow buttons */}
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
          onClick={onUpClick}
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
          onClick={onDownClick}
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
      {/* OK and back buttons  */}

      <div className="flex gap-2">
        <button
          type="button"
          className={`${roundButtonsStyle}`}
          onClick={onOkClick}
        >
          OK
        </button>
        <button
          type="button"
          className={`${roundButtonsStyle}`}
          onClick={onBackClick}
        >
          <RiArrowGoBackLine />
        </button>
      </div>
    </div>
  );
};

export default NavControls;
