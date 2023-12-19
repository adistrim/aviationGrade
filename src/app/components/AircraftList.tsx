import React from 'react';
import AircraftCard from './AircraftCard';

interface AircraftListProps {
  aircraftData: {
    imageSrc: string;
    aircraftName: string;
    description: string;
  }[];
}

const AircraftList: React.FC<AircraftListProps> = ({ aircraftData }) => {
  return (
    <div className="cards">
      {aircraftData.map((aircraft, index) => (
        <AircraftCard
          key={index}
          imageSrc={aircraft.imageSrc}
          aircraftName={aircraft.aircraftName}
          description={aircraft.description}
        />
      ))}
    </div>
  );
};

export default AircraftList;