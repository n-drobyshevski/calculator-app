interface OutputProps {
  output: string;
}
const Output: React.FC<OutputProps> = ({ output }) => {
  return (
    <div className="flex h-24 w-full flex-col justify-center rounded-xl border bg-neutral-300 p-4">
      <input
        className="w-full appearance-none bg-transparent font-mono focus:outline-none"
        type="text"
        value={output}
      />
    </div>
  );
};
export default Output;
