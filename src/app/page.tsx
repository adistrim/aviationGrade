"use client";
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AircraftList from './components/AircraftList';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import aircaftData from './data.json';

const aircraftData = aircaftData;

const Home = () => {
  const cardsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(aircraftData.length / cardsPerPage);
  const containerRef = useRef<HTMLDivElement>(null);
  const [matchingIds, setMatchingIds] = useState<string[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const updatePagination = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const visibleAircraftData = matchingIds.length > 0
    ? aircraftData.filter((aircraft) => matchingIds.includes(aircraft.id))
    : aircraftData.slice(start, end);

  const searchAircraft = (ids: string[]) => {
    setMatchingIds(ids);
    setCurrentPage(1); // Reset current page to 1 when a new search is performed
  };

  const clearSearch = () => {
    setMatchingIds([]);
    setCurrentPage(1); // Reset current page to 1 when the search bar is cleared
  };

  return (
    <div className="font-serif" ref={containerRef}>
      <Header />
      <div className="max-w-[1000px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] mx-auto my-5 p-5 rounded-[5px]">
        <SearchBar onSearch={searchAircraft} onClearSearch={clearSearch} />
        <AircraftList aircraftData={visibleAircraftData} matchingIds={matchingIds} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevClick={() => updatePagination(currentPage - 1)}
          onNextClick={() => updatePagination(currentPage + 1)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
