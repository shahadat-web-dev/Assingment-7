
import bgleft from '../assets/bgleft.png'
import bgright from '../assets/bgright.png'
const Counter_Box = ({ticketSelect}) => {

  return (

    <div className='bg-[#F5F5F5] '>
      <div className='grid md:grid-cols-2 gap-10 py-20 px-3  container mx-auto'>

        {/* In-Progress */}
        
          <div style={{ backgroundImage: `url(${bgleft})` }} className={` rounded-xl h-[250px]  flex justify-center bg-cover bg-center  text-white `} >

            <div className='  flex items-center justify-center flex-col'>

              <h1 className='text-[24px]'>In-Progress</h1>
              <p className='text-[60px] font-bold'>{ticketSelect.length}</p>
            </div>


          </div>

        
        {/* Resolved */}
        <div style={{ backgroundImage: `url(${bgright})` }} className={` rounded-xl h-[250px]  flex items-center justify-center bg-cover bg-center text-white flex-col`}>
          <h1 className='text-[24px]'>Resolved</h1>
          <p className='text-[60px] font-bold'>0</p>
        </div>

      </div>
    </div>
  );
};

export default Counter_Box;