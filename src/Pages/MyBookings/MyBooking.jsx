import React, { Suspense, useEffect, useState } from 'react';
import { getBookedLawyer} from '../../Utility/addtoDB';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import Booking from '../Booking/Booking';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z
     `
  );

  const TriangleBar = (props) => {
    const {
      fill, x, y, width, height,
    } = props;

    if (height <= 0) return null;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


const MyBooking = () => {
    const [booklist,setBookList]=useState([]);
  const navigate = useNavigate();
  const data = useLoaderData();
  const location = useLocation();


  useEffect(()=>{
      const bookedLicenseNumbers = getBookedLawyer();
      const bookedLawyers = bookedLicenseNumbers
        .map((licenseNumber) => data.find((lawyer) => lawyer.licenseNumber === licenseNumber))
        .filter(Boolean);
        setBookList(bookedLawyers);
  },[data,location]) 


  const handleCancel = (licenseNumber) => {
    setBookList((prevList) =>
      prevList.filter((lawyer) => lawyer.licenseNumber !== licenseNumber)
    );
  };

  const chartData = booklist.map((lawyer) => ({
    name: lawyer.name,
    fee: parseInt(lawyer.fee),
  }));

  const barColors = ['#1E90FF', '#FFD700', '#4682B4', '#32CD32', '#FFA500', '#FF6347'];





  if (booklist.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">You Have not Booked ANY appointment yet</h1>
        <p className="text-gray-500 mb-6">
          Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn bg-blue-500 text-white border-none rounded-full px-6 py-2 hover:bg-blue-600"
        >
          Book an Appointment
        </button>
      </div>
    );
  }


  return (
    <div className="p-6 max-w-4xl mx-auto">

        {/* Recharts Bar Chart */}
      <div className="mb-12 w-full">
        <BarChart
          width={600}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} domain={[0, 1800]} />
          <Tooltip />
          <Bar dataKey="fee" shape={<TriangleBar />}>

          {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={barColors[index % barColors.length]} // Assign color to each bar
              />
            ))}
          </Bar>
        </BarChart>
      </div>



      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">My Today Appointment</h1>
        <p className="text-gray-500">
          Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
        </p>
      </div>

      <div className="space-y-6">
        <Suspense fallback={<span>Loading....</span>}>
        {
            booklist.map(lawyer=><Booking key={lawyer.licenseNumber} lawyer={lawyer} onCancel={handleCancel} ></Booking>)
        }
        </Suspense>
      </div>
    </div>
  );
};

export default MyBooking;