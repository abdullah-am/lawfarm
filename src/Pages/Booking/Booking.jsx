import React from 'react';
import { removeFromStoredDB } from '../../Utility/addtoDB';
import { toast } from 'react-toastify';

const Booking = ({lawyer,onCancel}) => {

    const handleCancelAppointment = (licenseNumber) => {
        removeFromStoredDB(licenseNumber);
        onCancel(licenseNumber);
        toast.success('Cancel successfully');
      };


    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl border border-gray-200">
        <div className='flex justify-between items-center'>
            <div>
            <h3 className="text-lg font-semibold">{lawyer.name}</h3>
            <p className="text-sm text-gray-600">{lawyer.speciality}</p>
            </div>
            <div>
            <p className="text-sm text-gray-600 mb-2">Appointment Fee : <span className="font-medium">{lawyer.fee} Taka</span></p>
            </div>
        </div>

        
          <button
          onClick={() => handleCancelAppointment(lawyer.licenseNumber)}
           className="btn border border-red-500 rounded-full w-full hover:text-white hover:bg-red-400 mt-5">
            Cancel Appointment
          </button>
      </div>
    
    );
};

export default Booking;