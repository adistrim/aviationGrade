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

  useEffect(() => {
    // Smooth scroll to the top of the container when currentPage changes
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const updatePagination = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const visibleAircraftData = aircraftData.slice(start, end);
  
  return (
    <div className="font-serif" ref={containerRef}>
      <Header />
      <div className="max-w-[1000px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] mx-auto my-5 p-5 rounded-[5px]">
        <SearchBar />
        <AircraftList aircraftData={visibleAircraftData} />
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
