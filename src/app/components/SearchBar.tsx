import React, { useState } from "react";
import aircraftData from "../data.json";

interface SearchBarProps {
    onSearch: (ids: string[]) => void;
    onClearSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClearSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [matchingIds, setMatchingIds] = useState<string[]>([]);

    const searchAircraft = () => {
        const matchingIds = aircraftData
            .filter((aircraft) => {
                const nameMatch = aircraft.aircraftName.toLowerCase().includes(searchTerm.toLowerCase());
                const metadataMatch = Object.values(aircraft.metadata || {}).some(
                    (value) =>
                        typeof value === "string" &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                );
                const otherNamesMatch = (aircraft.metadata?.othernames || [])
                    .map((name) => name.toLowerCase())
                    .includes(searchTerm.toLowerCase());
    
                return nameMatch || metadataMatch || otherNamesMatch;
            })
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

    const handleClearButtonClick = () => {
        setSearchTerm("");
        setMatchingIds([]);
        onClearSearch();
    };

    return (
        <div>
            <div className="flex flex-row text-sm md:text-base items-center justify-center mt-3 md:mt-5">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search for an aircraft..."
                    value={searchTerm}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[100%] md:w-[70%] border p-1.5 rounded-[5px] border-solid border-[#ccc]"
                />
                <button
                    id="searchButton"
                    onClick={handleSearchButtonClick}
                    className="bg-[#333] text-white cursor-pointer px-3 md:px-5 py-1.5 rounded-[5px] border-[none] hover:bg-[#555] ml-2"
                >
                    Search
                </button>
                <button
                    id="clearButton"
                    onClick={handleClearButtonClick}
                    className="bg-[#ccc] text-[#333] cursor-pointer px-2 md:px-3 py-1.5 rounded-[5px] border-[none] hover:bg-[#ddd] ml-2"
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
