import React from 'react';
import AircraftCard from './AircraftCard';

interface AircraftListProps {
  aircraftData: {
    id: string;
    imageSrc: string;
    aircraftName: string;
    description: string;
  }[];
  matchingIds: string[];
}

const AircraftList: React.FC<AircraftListProps> = ({ aircraftData, matchingIds }) => {
  const filteredAircrafts = matchingIds.length > 0
    ? aircraftData.filter((aircraft) => matchingIds.includes(aircraft.id))
    : aircraftData;

  return (
    <div className="cards">
      {filteredAircrafts.map((aircraft) => (
        <AircraftCard
          key={aircraft.id}
          imageSrc={aircraft.imageSrc}
          aircraftName={aircraft.aircraftName}
          description={aircraft.description}
        />
      ))}
    </div>
  );
};

export default AircraftList;
