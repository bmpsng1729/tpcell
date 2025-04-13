import React from 'react';
import { GrGroup } from "react-icons/gr";

function Card() {
  return (
    <>
    <div className='bg-amber-300 w-[15%] h-1/4 flex  mt-4 pt-4 items-center  font-bold rounded-xl   mb-1 text-center p-2 gap-3'>
      <div className='items-center text-2xl bg-blue-400 p-1 rounded-full'>
         <GrGroup/>
      </div>
      <div className='mb-0.5'>
        <h1 className=' font-bold'> placed </h1>
          <div>345</div>
      </div>
          
    </div>
    </>
    
  )
}

export default Card
