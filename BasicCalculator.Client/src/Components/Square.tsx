export default function Square({
  value,
  updateValue,
}: {
  value: string|null;
  updateValue: () => void;
}) {
  return (
    <button onClick={updateValue} className="w-22 h-22 border-amber-500">
      {value}
    </button>
  );
}
