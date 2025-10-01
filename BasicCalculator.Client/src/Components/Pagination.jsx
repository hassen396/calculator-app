import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import propTypes from "prop-types";
const items = [
  {
    id: 1,
    title: "Back End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Front End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 3,
    title: "User Interface Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
  },
];

export default function Pagination({ totalCount, pageSize, onPageChange, currentPage }) {
  const pages = Math.ceil(totalCount / pageSize);
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
  // "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0" ;
  if (pages <= 1) return null;
  return (
    <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={() => {
            if (currentPage > 1) onPageChange(currentPage - 1);
          }}
          className={"active:scale-x-110 relative inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 cursor-pointer "  + (currentPage > 1? "dark:text-gray-300 text-gray-500":"dark:text-gray-500 text-gray-300")}>
          Previous
        </a>
        <a
          onClick={() => {
            if (currentPage < pages) onPageChange(currentPage + 1);
          }}
          className={"active:scale-x-110 relative ml-3 inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 cursor-pointer " + (currentPage < pages? "dark:text-gray-300 text-gray-500":"dark:text-gray-500 text-gray-300") }>
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        {/* <div>
          <p className="text-sm text-gray-300">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">{totalCount}</span> results
          </p>
        </div> */}
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md">
            <a
              onClick={() => {
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
              className={"active:scale-x-110 relative inline-flex items-center rounded-l-md px-2 py-2 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0 " + (currentPage > 1? "dark:text-gray-300 text-gray-500 cursor-pointer":"dark:text-gray-500 text-gray-300")}>
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </a>

            {pagesArray.map((page) => {
              let classes = "active:scale-x-80 relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold dark:text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 inset-ring inset-ring-gray-700 cursor-pointer";
              return (
                <span key={page} onClick={() => onPageChange(page)} className={(classes = classes + (currentPage === page ? " bg-indigo-500 text-white" : ""))}>
                  {page}
                </span>
              );
            })}

            <a
              onClick={() => {
                if (currentPage < pages) onPageChange(currentPage + 1);
              }}
              className={"relative inline-flex items-center rounded-r-md px-2 py-2 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0 active:scale-x-110 " + (currentPage < pages? "dark:text-gray-300 text-gray-500 cursor-pointer":"dark:text-gray-500 text-gray-300") }>
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

Pagination.PropTypes = {
  totalCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.number.isRequired,
  currentPage: propTypes.func.isRequired,
};
