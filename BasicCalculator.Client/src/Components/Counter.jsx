export default function MyButton({
  onIncreament,
  onDecreament,
  onDelete,
  value,
}) {
  const classes = "text-2xl rounded px-3 bg-" + (value ? "green-600" : "red-500");
  return (
    <div className="grid grid-cols-[20%_80%]  gap-8 text-center items-center">
      <h2 className={classes}>{value}</h2>
      <div className="flex gap-5">
        <button
          className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 active:scale-90"
          onClick={onIncreament}
        >
          +
        </button>
        <button onClick={onDecreament}
          disabled={!value}
          className="px-3 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 active:scale-90"
        >
          -
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 active:scale-90"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
