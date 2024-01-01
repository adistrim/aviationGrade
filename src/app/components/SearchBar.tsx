import React from "react";

const SearchBar: React.FC = () => {
    return (
        <div className="flex items-center justify-center mt-5">
            <input
                type="text"
                id="searchInput"
                placeholder="Search for an aircraft..."
                className="w-[70%] border p-1.5 rounded-[5px] border-solid border-[#ccc]"
            />
            <button
                id="searchButton"
                className="bg-[#333] text-white cursor-pointer px-5 py-1.5 rounded-[5px] border-[none] hover:bg-[#555] ml-2"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
