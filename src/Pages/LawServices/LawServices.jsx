import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const LawServices = () => {
  
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className=" py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">We Provide Best Law Services</h1>
          <p className="text-gray-500">
            Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
            <span><img src="https://i.ibb.co.com/SXXVBd5x/success-doctor.png" alt="" /></span>
            <h2 className="text-3xl font-bold">
              {inView ? <CountUp start={0} end={199} duration={2.5} suffix="+" /> : '199+'}
            </h2>
            <p className="text-gray-500 mt-2">Total Lawyer</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
            <span><img src="https://i.ibb.co.com/7tV2qPdM/success-review.png" alt="" /></span>
            <h2 className="text-3xl font-bold">
              {inView ? <CountUp start={0} end={467} duration={2.5} suffix="+" /> : '467+'}
            </h2>
            <p className="text-gray-500 mt-2">Total Reviews</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
            <span><img src="https://i.ibb.co.com/YBXhtw4X/success-patients.png" alt="" /></span>
            <h2 className="text-3xl font-bold">
              {inView ? <CountUp start={0} end={1900} duration={2.5} suffix="+" /> : '1900+'}
            </h2>
            <p className="text-gray-500 mt-2">Cases Initiated</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
            <span><img src="https://i.ibb.co.com/jZZp06cr/success-staffs.png" alt="" /></span>
            <h2 className="text-3xl font-bold">
              {inView ? <CountUp start={0} end={300} duration={2.5} suffix="+" /> : '300+'}
            </h2>
            <p className="text-gray-500 mt-2">Total Staff</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawServices;