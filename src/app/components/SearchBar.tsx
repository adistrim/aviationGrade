import React, { useState } from "react";
import aircraftData from "../data.json";
import AircraftList from "./AircraftList";

interface SearchBarProps {
    onSearch: (ids: string[]) => void;
    onClearSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClearSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [matchingIds, setMatchingIds] = useState<string[]>([]);

    const searchAircraft = () => {
        const matchingIds = aircraftData
            .filter((aircraft) =>
                aircraft.aircraftName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((matchingAircraft) => matchingAircraft.id);

        setMatchingIds(matchingIds);
        onSearch(matchingIds);
    };

    const handleSearchButtonClick = () => {
        if (searchTerm === "") {
            setMatchingIds([]);
            onSearch([]);
            onClearSearch();
          } else {
            searchAircraft();
          }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearchButtonClick();
        }
      };

    return (
        <div>
            <div className="flex items-center justify-center mt-5">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search for an aircraft..."
                    value={searchTerm}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[70%] border p-1.5 rounded-[5px] border-solid border-[#ccc]"
                />
                <button
                    id="searchButton"
                    onClick={handleSearchButtonClick}
                    className="bg-[#333] text-white cursor-pointer px-5 py-1.5 rounded-[5px] border-[none] hover:bg-[#555] ml-2"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
