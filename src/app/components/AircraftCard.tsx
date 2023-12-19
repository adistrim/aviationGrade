import React from 'react';

interface AircraftCardProps {
  imageSrc: string;
  aircraftName: string;
  description: string;
}

const AircraftCard: React.FC<AircraftCardProps> = ({ imageSrc, aircraftName, description }) => {
  return (
    <div className="bg-white border shadow-[0_0_5px_rgba(0,0,0,0.1)] flex items-start mx-0 my-5 p-5 rounded-[5px] border-solid border-[#ccc]">
      <div className="flex flex-col md:flex-row">
        <img className="max-w-[100%] md:max-w-[30%] h-auto mr-0 md:mr-5 mb-[10px] md:mb-0" src={`/source/${imageSrc}`} alt={`${aircraftName} Image`}/>
        <div>
          <h2 className="m-0 text-2xl font-bold">{aircraftName}</h2>
          <p className='mt-4 leading-5'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AircraftCard;