import React from 'react';
import bgImg from '../assets/vector1.png'

const Counter_Box = () => {
  return (

    <div className='bg-[#F5F5F5] '>
      <div className='grid md:grid-cols-2 gap-10 py-20 px-3  container mx-auto'>

        {/* In-Progress */}
        <div className={`bg-linear-to-r from-[#642FE4] to-[#9F62F3] rounded-xl h-[250px] flex items-center justify-center text-white flex-col bg-[${bgImg}]`} >

           
            <h1 className='text-[24px]'>In-Progress</h1>
            <p className='text-[60px] font-bold'>0</p>
          

        </div>

        {/* Resolved */}
        <div className={`bg-linear-to-r from-[#54D068] to-[#00827A] rounded-xl h-[250px]  flex items-center justify-center text-white flex-col bg-[${bgImg}]`}>
          <h1 className='text-[24px]'>Resolved</h1>
          <p className='text-[60px] font-bold'>0</p>
        </div>

      </div>
    </div>
  );
};

export default Counter_Box;