"use client";
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AircraftList from './components/AircraftList';
import Footer from './components/Footer';

const aircraftData = [
  {
    imageSrc: 'a10.jpeg',
    aircraftName: 'Fairchild Republic A-10 Thunderbolt II',
    description: 'Commonly known as the "Warthog," is a legendary close air support aircraft in the United States Air Force inventory. Designed for the sole purpose of providing effective support to ground troops, it is renowned for its durability and firepower. With its distinctive twin-engine design and a fearsome Gatling gun, the A-10 has earned a reputation as a formidable combat aircraft. Its impressive combat record and iconic appearance make it a beloved symbol of American air power.',
  },
  {
    imageSrc: 'f22.jpg',
    aircraftName: 'Lockheed Martin F-22 Raptor',
    description: `Raptor is a pinnacle of modern air superiority, regarded as one of the world's most advanced fighter aircraft. With its stealth technology and exceptional maneuverability, the F-22 represents the cutting edge of aerial combat capability. Designed for the United States Air Force, this formidable fighter is renowned for its ability to dominate the skies and maintain air superiority in the most challenging environments. The F-22 Raptor's combination of speed, agility, and stealth make it a true icon of 21st-century aviation.`,
  },
  {
    imageSrc: 'f35.jpg',
    aircraftName: 'Lockheed Martin F-35 Lightning II',
    description: `F35 is a revolutionary fifth-generation multirole fighter aircraft, designed for the United States and its allies. It is renowned for its versatility, seamlessly transitioning between air-to-air combat, ground attack, and reconnaissance missions. With its advanced stealth capabilities and cutting-edge technology, the F-35 sets new standards for modern warfare, offering superior situational awareness and combat effectiveness. As a cornerstone of military aviation, the F-35 is poised to shape the future of aerial combat.`
  },
  {
    imageSrc: 'su57.jpg',
    aircraftName: 'Sukhoi Su-57',
    description: `Su-57 is a fifth-generation Russian stealth fighter aircraft, representing the pinnacle of Russian military aviation technology. It combines advanced stealth features, agility, and supersonic speed to excel in air superiority and ground attack roles. With its cutting-edge avionics and weaponry, the Su-57 is a formidable asset in the evolving landscape of modern warfare. As one of Russia's flagship fighter aircraft, the Su-57 is a symbol of its commitment to maintaining air superiority.`
  },
];

const Home = () => {
  const cardsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(aircraftData.length / cardsPerPage);

  const updatePagination = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const visibleAircraftData = aircraftData.slice(start, end);
  
  return (
    <div className="font-serif">
      <Header />
      <div className="max-w-[1000px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] mx-auto my-5 p-5 rounded-[5px]">
        <SearchBar />
        <AircraftList aircraftData={visibleAircraftData} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
