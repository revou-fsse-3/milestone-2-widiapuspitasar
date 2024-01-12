

const Search = () => {
    return (
        <div className="hidden sm:flex items-center ml-auto">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:bg-white focus:text-gray-800"
            />
            <button
              type="button"
              className="ml-2 p-2 text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m4-4a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
            </button>
          </div>
    )
}

export default Search