import { BadgeCheck } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const Lawyer = ({lawyer}) => {

    const {image,name,speciality,experience,licenseNumber,availabilityBadge}=lawyer;

    const navigate = useNavigate();

    const handleViewDetails =() =>{
        navigate(`/lawyerdetail/${lawyer.licenseNumber}`);
    };


    return (
        <div className="flex items-center p-6 rounded-lg shadow-md border border-gray-300 w-full max-w-md gap-5">
      {/* Lawyer Image */}
      <div className="w-24 h-24 bg-gray-300 rounded-lg">
        <img className='rounded-lg' src={image} alt="" />
      </div>

      {/* Lawyer Details */}
      <div className="flex flex-col justify-between flex-1">
        <div className="flex gap-2 mb-2">
          <span className="badge badge-success text-white">{availabilityBadge}</span>
          <span className="badge badge-info text-white">{experience} Experience</span>
        </div>

        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-500">{speciality}</p>

        <div className="flex items-center text-sm text-gray-600 mt-1">
          <BadgeCheck className="w-4 h-4 mr-1" />
          License No: {licenseNumber}
        </div>

        <button
        onClick={handleViewDetails}
         className="border rounded-full border-blue-400 text-blue-600 mt-3 hover:bg-blue-400 hover:text-white">
          View Details
        </button>
      </div>
    </div>
    );
};

export default Lawyer;