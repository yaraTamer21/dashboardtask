import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../Store/NavbarSlice';
const Header = () => {
    const dispatch=useDispatch();

    // to get date
    let today = new Date();
    let result = today.toString().slice(0, 21);
   
    return (
        <>
            <div className="header  grid smx:grid-cols-1 mdx:grid-cols-2 items-center justify-between bg-white py-2">
                {/* left */}
                <div className='flex items-center px-3'>
              
              <div className='flex items-center'>
              <i class="fa-solid fa-chevron-left text-sm"></i>
                    <i onClick={()=>dispatch(change())} class="fa-solid fa-bars pr-2 text-xl "></i>
              </div>
                    <h2 className='  xsx:text-sm font-bold pl-4 pr-3'>GoodMorning!</h2>
                    <h2 className='text-[gray]'>{result}</h2>
                </div>


                {/* right */}
                <div className='flex items-center xsx:px-4 xsx:mt-3 mdx:mt-0 smx:justify-start mdx:justify-end'>
              
              <div className='flex items-center border-gray-400 border-r-2 '>
              <i class=" text-xl fa-regular  mdx:pr-4 fa-circle-question"></i>
              <i class="   text-xl  pr-4  fa-solid fa-envelope"></i>            </div>
                    <h2 className='font-semibold mdx:pl-4 pr-3'>NadaMaher</h2>
                    <h2 className='text-[gray] border rounded-full p-1 font-bold text-black bg-[#e3effd]'>NA</h2>
                    <i class="fa-solid pr-10  fa-chevron-down pl-2"></i>
                </div>
            </div>
        </>
    )
}

export default Header