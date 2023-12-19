import React from 'react';

interface AircraftCardProps {
  imageSrc: string;
  aircraftName: string;
  description: string;
}

const AircraftCard: React.FC<AircraftCardProps> = ({ imageSrc, aircraftName, description }) => {
  return (
    <div className="bg-white border shadow-[0_0_5px_rgba(0,0,0,0.1)] flex items-start mx-0 my-5 p-5 rounded-[5px] border-solid border-[#ccc]">
      <div className="flex">
        <img className="max-w-[30%] h-auto mr-5" src={`/source/${imageSrc}`} alt={`${aircraftName} Image`}/>
        <div>
          <h2 className="m-0 text-xl font-bold">{aircraftName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AircraftCard;