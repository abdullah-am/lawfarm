import React, { Suspense, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({data}) => {

    const [visiblelawyers, setVisibleLawyers]=useState(6);
    const [showAll, setShowAll] = useState(false);


    const handleShowAll = () => {
        setVisibleLawyers(data.length); 
        setShowAll(true);
      };


    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='text-[40px] font-extrabold'>Our Best Lawyers</h1>
                <p className='text-sm font-normal'>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-14'>
                <Suspense fallback={<span>loading....</span>}>
                {
                    data.slice(0, visiblelawyers).map((lawyer)=><Lawyer key={lawyer.id} lawyer={lawyer} ></Lawyer>)
                }
                </Suspense>
            </div>

            {!showAll && data.length > 6 && (
        <div className="text-center mb-5">
          <button
            onClick={handleShowAll}
            className="btn bg-green-500 text-white border-none rounded-full px-6 py-2 hover:bg-green-600"
          >
            Show All Lawyer
          </button>
        </div>
      )}

        </div>
    );
};

export default Lawyers;