import Button from "./Button";

interface NavControlsProps {
  onLeftClick: () => void;
  onRightClick: () => void;
}
const NavControls: React.FC<NavControlsProps> = ({
  onLeftClick,
  onRightClick,
}) => {
  return (
    <div className="flex w-full justify-start gap-2">
      <Button onClick={onLeftClick} styleVariant="small" name="left">
        {"<"}
      </Button>
      <Button onClick={onRightClick} styleVariant="small" name="right">
        {">"}
      </Button>
    </div>
  );
};

export default NavControls;
