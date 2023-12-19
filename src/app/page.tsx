"use client";
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AircraftList from './components/AircraftList';
import Footer from './components/Footer';
import Pagination from './components/Pagination';

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
  {
    imageSrc: 'eurofighterTyphoon.jpg',
    aircraftName: 'Eurofighter Typhoon',
    description: `Eurofighter Typhoon is a multi-role fighter aircraft developed by a consortium of European nations, including the UK, Germany, Italy, and Spain. Known for its agility and advanced avionics, the Typhoon is designed to excel in both air-to-air and air-to-ground missions. With its adaptability and cutting-edge technology, the Eurofighter Typhoon stands as a testament to European collaboration in producing a top-tier fighter aircraft, capable of securing air superiority and conducting precision strikes.`
  },
  {
    imageSrc: 'f15.jpg',
    aircraftName: 'McDonnell Douglas F-15 Eagle',
    description: `F-15 is a legendary American fighter aircraft renowned for its exceptional air superiority capabilities. First introduced in the 1970s, the F-15 has maintained a stellar combat record and continues to serve as a cornerstone of the U.S. Air Force's arsenal. With its impressive speed, maneuverability, and firepower, the F-15 Eagle remains a symbol of American air power and excellence in aerial combat.`
  },
  {
    imageSrc: 'f16.jpg',
    aircraftName: 'General Dynamics F-16 Fighting Falcon',
    description: `F-16, often referred to simply as the "Viper," is a highly versatile and widely-used American multi-role fighter aircraft. Introduced in the late 1970s, the F-16 has become a staple of air forces worldwide, known for its agility and adaptability. With a reputation for exceptional performance in air-to-air and air-to-ground missions, the F-16 Fighting Falcon has consistently proven its effectiveness and remains a critical asset in modern air combat.`
  },
  {
    imageSrc: 'j20.jpg',
    aircraftName: 'Chengdu J-20',
    description: `J-20 is a fifth-generation stealth fighter aircraft developed by China. Introduced in the 2010s, it represents China's ambition to compete on the global stage of advanced military aviation. With its stealth capabilities, agility, and advanced avionics, the J-20 is a symbol of China's technological advancement in the realm of aerial combat, signaling its emergence as a significant player in the international aerospace arena.`
  },
  {
    imageSrc: 'rafale.jpg',
    aircraftName: 'Dassault Rafale',
    description: `Rafale is a versatile and advanced French multi-role fighter aircraft, known for its exceptional performance in air-to-air and air-to-ground missions. Developed in the late 20th century, it has since become a cornerstone of French and allied air forces. With its agility, advanced avionics, and adaptability, the Rafale showcases France's commitment to maintaining air superiority and its capability to conduct precision strikes.`
  },
  {
    imageSrc: 'gripen.jpg',
    aircraftName: 'Saab JAS 39 Gripen',
    description: `Gripen is a highly adaptable and cost-effective Swedish multi-role fighter aircraft, renowned for its maneuverability and technological innovation. Introduced in the late 20th century, it has become a key asset for the Swedish Air Force and other nations worldwide. With its advanced avionics and ease of maintenance, the Gripen symbolizes Sweden's commitment to modern air defense and a strong emphasis on affordability and efficiency in aerial operations.`
  },
  {
    imageSrc: 'su35.jpeg',
    aircraftName: 'Sukhoi Su-35',
    description: `Su-35 is a formidable Russian fighter aircraft known for its exceptional maneuverability and combat capabilities. As an evolution of the Su-27 family, it boasts advanced avionics and weapon systems, making it a versatile platform for air superiority and ground attack missions. The Su-35 is a testament to Russia's commitment to maintaining a strong air force presence, with its cutting-edge technology and superior performance in modern aerial warfare. This fighter remains a prominent player in the global aviation landscape.`
  },
  {
    imageSrc: 'mig35.jpeg',
    aircraftName: 'Mikoyan MiG-35',
    description: `MiG-35, often referred to as the "Fulcrum-F," is a modern and versatile multirole fighter aircraft developed by Russia's Mikoyan Design Bureau. Known for its advanced avionics and exceptional maneuverability, the MiG-35 is a formidable addition to the MiG-29 family. It boasts cutting-edge technology, making it a capable platform for air superiority, ground attack, and reconnaissance missions. With its sleek design and impressive capabilities, the MiG-35 is a symbol of Russian aviation excellence.`
  }, 
  {
    imageSrc: 'fa18.jpeg',
    aircraftName: 'Boeing F/A-18 Super Hornet',
    description: `Super Hornet is a twin-engine, carrier-based fighter aircraft renowned for its versatility and combat capabilities. It serves as the primary naval strike fighter for the United States Navy. With its upgraded design, advanced avionics, and increased fuel capacity, the Super Hornet excels in air-to-air combat, ground-attack missions, and electronic warfare. This aircraft is a cornerstone of modern naval aviation, offering unmatched flexibility and firepower.`
  },
  {
    imageSrc: 'mirage2000.jpg',
    aircraftName: 'Dassault Mirage 2000',
    description: `Mirage 2000 is a highly-regarded, French-made, multirole fighter aircraft known for its exceptional agility and performance. With a sleek and delta-wing design, it has been in service with several countries and is a prominent asset in their air forces. The Mirage 2000 is celebrated for its versatility in air-to-air combat, ground-attack missions, and nuclear deterrence. Its combination of speed, maneuverability, and cutting-edge avionics makes it a formidable presence in the world of military aviation.`
  },
  {
    imageSrc: 'j10.jpeg',
    aircraftName: 'Chengdu J-10',
    description: `J-10, also known as the "Vigorous Dragon," is a versatile and advanced fighter aircraft developed by China. It stands as a testament to China's growing aerospace capabilities and technological prowess. With its sleek aerodynamic design, modern avionics, and agility, the J-10 is a key component of China's air defense and power projection capabilities. Renowned for its combat versatility, it plays a crucial role in both air-to-air and air-to-ground missions.`
  },
  {
    imageSrc: 'tejas.jpeg',
    aircraftName: 'HAL Tejas',
    description: `Tejas, India's indigenous light combat aircraft, represents a significant milestone in the country's aerospace development. Designed and manufactured by Hindustan Aeronautics Limited (HAL), the Tejas is a lightweight, highly maneuverable fighter known for its agility and modern avionics. It serves as a vital asset in the Indian Air Force, enhancing the nation's air defense capabilities and showcasing its commitment to self-reliance in defense technology. With a sleek design and combat versatility, the Tejas is a symbol of India's aerospace innovation.`
  },
  {
    imageSrc: 'mig29.jpg',
    aircraftName: 'Mikoyan MiG-29',
    description: `MiG-29, often referred to as the "Fulcrum," is a renowned and agile fighter jet developed by the Soviet Union. It is celebrated for its exceptional speed, maneuverability, and combat capabilities. Designed for air superiority, the MiG-29 is a symbol of Russian and former Soviet air power, serving in numerous countries across the globe. With its distinctive twin-engine design and a legacy of success, the MiG-29 continues to be a formidable presence in modern aerial warfare.`
  },
  {
    imageSrc: 'f14.jpg',
    aircraftName: 'Grumman F-14 Tomcat',
    description: `F-14 Tomcat is a legendary carrier-based fighter aircraft that served as a flagship of the United States Navy for several decades. Known for its iconic swing-wing design and powerful twin engines, the F-14 was designed for air superiority and fleet defense. Its advanced radar and long-range air-to-air missiles made it a formidable opponent in aerial combat. The F-14 Tomcat has left an indelible mark on naval aviation history.`
  },
  {
    imageSrc: 't50.jpeg',
    aircraftName: 'KAI T-50 Golden Eagle',
    description: `T-50 Golden Eagle is a versatile South Korean supersonic trainer and light combat aircraft. It stands out for its sleek design, modern avionics, and superior performance. With a reputation for affordability and effectiveness, the T-50 is used for pilot training, combat roles, and advanced lead-in fighter training programs. It represents a significant advancement in South Korea's aerospace industry and is recognized for its role in enhancing pilot skills and air force capabilities.`
  },
  {
    imageSrc: 'jf17.jpeg',
    aircraftName: 'CAC/PAC JF-17 Thunder',
    description: `JF-17 Thunder, a collaborative project between Pakistan and China, is a highly capable multirole fighter aircraft designed for affordability and effectiveness. Known for its agility, modern avionics, and adaptability, the JF-17 serves as a critical asset in Pakistan's air force. It excels in air-to-air combat, ground attack missions, and electronic warfare, making it a versatile and cost-effective choice for various operational requirements. The JF-17 Thunder represents a testament to cooperation and self-reliance in defense technology.`
  }
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
