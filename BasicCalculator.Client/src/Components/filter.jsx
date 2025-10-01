import { Link } from "react-router-dom";

export default function Filter({ onItemSelect, items, selectedItem }) {
  return (
    <div className="w-full flex items-center justify-center px-10 py-12 flex-col   sm:mb-2">
      <Link to="/game">play game</Link>
      <div onClick={() => onItemSelect(0)} className="p-2 xl:w-full w-1/2  cursor-pointer active:scale-98">
        <div
          className={
            "rounded flex p-1  items-center " +
            (selectedItem !== 0 ? "bg-amber-400" : "bg-blue-400")
          }>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            className="text-indigo-300 w-6 h-6 flex-shrink-0 mr-4"
            viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="font-medium">All Genres</span>
        </div>
      </div>
      {items.map((item) => (
        <div
          onClick={() => onItemSelect(item)}
          key={item._id}
          className=" p-2 xl:w-full w-1/2 cursor-pointer active:scale-98">
          <div
            className={
              "rounded flex p-1  items-center " +
              (selectedItem == item ? "bg-blue-400" : "bg-amber-400")
            }>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="font-medium">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
