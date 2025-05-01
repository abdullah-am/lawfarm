import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-[550px] bg-cover bg-center rounded-lg" 
             style={{ backgroundImage: 'url(https://i.ibb.co.com/q2DZN33/banner-img-1.png)' }}>
            <div className="absolute inset-0 bg-opacity-50 rounded-lg flex flex-col justify-center items-center p-6">
                <div className="flex flex-col justify-center items-center text-center w-[1009px] h-[248px]">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        It avoids subjective claims or exaggeration that might raise 
                        <span className="text-red-500"> red flags legally</span>
                    </h1>
                    <p className="text-white text-sm md:text-base mt-2 max-w-2xl">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it’s a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;