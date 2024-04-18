import React from 'react';

const Icons = ({ imgData }) => {
    return (
        <div className="container mx-auto w-full bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 pb-16">
            <div class="flex items-center justify-center">
                <div class="h-40 text-center w-3/4 flex items-center justify-center  text-4xl font-bold text-white">Our Best Services</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {imgData.map((ele, ind) => (
                    <div key={ind} className="flex flex-col items-center">
                        <img src={ele.image} alt="" className="h-24 w-auto" />
                        <p className="mt-2 text-center text-white text-xl">{ele.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Icons;
