import Button from "./Button";

const NavControls: React.FC = () => {
  const navigationHandler = () => {
    return;
  };
  return (
    <div className="flex w-full justify-start gap-2">
      <Button onClick={navigationHandler} styleVariant="small" name="left">
        {"<"}
      </Button>
      <Button onClick={navigationHandler} styleVariant="small" name="right">
        {">"}
      </Button>
    </div>
  );
};

export default NavControls;
