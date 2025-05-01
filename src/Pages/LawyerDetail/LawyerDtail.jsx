import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addtoStoredDB, getBookedLawyer } from '../../Utility/addtoDB';
import { toast } from 'react-toastify';


const LawyerDtail = () => {

    const {licenseNumber}=useParams();
    const navigate = useNavigate();
    const data = useLoaderData();
    const lawyer=data.find((law) => law.licenseNumber === licenseNumber);//parseInt(id)

    if (!lawyer) {
        return (
            <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">No Lawyer Found!!</h1>
        <p className="text-gray-500 mb-4">
          No Lawyer Found with this License No-
        </p>
        <div className="flex justify-center items-center text-gray-600 mb-6">
          <span className="mr-2">©</span>
          <span>{licenseNumber}</span>
        </div>
        <button
          onClick={() => navigate('/', { replace: true })}
          className="btn bg-green-500 text-white border-none rounded-full px-6 py-2 hover:bg-green-600"
        >
          View All Lawyer
        </button>
      </div>
        )

      };


      const handleBookAppointment = () => {
        const bookedLicenseNumbers = getBookedLawyer();
        if (bookedLicenseNumbers.includes(licenseNumber)) {
            toast.warn('You have already booked this lawyer');
            return;
        }
        addtoStoredDB(licenseNumber);
        toast.success('Appointment taken successfully');
        setTimeout(() => {
            navigate('/mybookings');
        }, 100);
        //navigate('/mybookings');
      };





    return (

    <div className="p-6 max-w-6xl mx-auto">
      
      <button
        onClick={() => navigate('/',{ replace: true })}
        className="btn btn-outline btn-sm mb-4"
      >
        Back to Lawyers
      </button>

      
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Lawyer's Profile Details</h1>
        <p className="text-gray-500 mt-2">
          {lawyer.profile}
        </p>
      </div>

      
      <div className="flex justify-center items-center gap-6 bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
        
        <div className="w-32 h-32 bg-gray-300 rounded-lg">
          <img
            src={lawyer.image || 'https://via.placeholder.com/150'}
            alt={lawyer.name}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="badge badge-info text-white">{lawyer.experience}</span>
          </div>
          <h1 className="text-2xl font-bold">{lawyer.name}</h1>
          <div className="flex items-center text-sm text-gray-600 mt-1 gap-3">
            <p className="text-gray-500">{lawyer.speciality}</p>
            <span className="mr-1">©  License No: {lawyer.licenseNumber}</span>
          </div>

          
          <div className="mt-3">
            <p className="text-sm font-semibold">Availability</p>
            <div className="flex gap-2 mt-1">
              {lawyer.availability.map((day, index) => (
                <span
                  key={index}
                  className="badge bg-orange-100 text-orange-600 border-none"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-3">
            Consultation Fee: {lawyer.fee}Taka/hr
          </p>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-center mb-4">Book an Appointment</h2>
        
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold">Availability</p>
          <span className="badge badge-success text-white">Lawyer {lawyer.availabilityBadge} Today</span>
        </div>
        
        <div className="bg-orange-50 text-orange-600 p-3 rounded-lg flex items-center gap-2 mb-4">
          <span className="text-orange-600">⚠</span>
          <p className="text-sm">
            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
          </p>
        </div>
        
        <button
        onClick={handleBookAppointment}
         className="btn bg-green-500 text-white border-none rounded-full w-full hover:bg-green-600">
          Book Appointment NOW
        </button>
      </div>
    </div>


    );
};

export default LawyerDtail;