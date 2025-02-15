import React from "react";

const EditSearch = () => {
  return (
    <form className="max-w-lg mx-auto">
      <div className="flex">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search Input
        </label>
        <div className="relative w-full">
          <input
            type="search"
            className="block p-2.5 w-full z-20 text-sm text-gray-950 bg-gray-50 rounded-lg border outline-none border-gray-300 focus:ring-wikimedia-wikiblue focus:border-wikimedia-wikiblue dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Value..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-wikimedia-wikiblue rounded-e-lg border border-wikimedia-wikiblue hover:bg-wikimedia-darkblue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditSearch;
button {
  background-color: var(--primary-color);
  color: var(--background-color);
}
