import React, { useState } from 'react'

const Navigation = () => {
    // toggle of item of navigation
    const [Check, setCheck] = useState(false)
    const [Check1, setCheck1] = useState(false)
    const [Check2, setCheck2] = useState(false)

    return (
        <>
            <div className="navigation h-[100vh] text-[#656b7c] py-4 px-2">
                <img src='./images/Capture.PNG' className='w-2/5 mx-auto  ' />
                {/* search */}
                <div className="search bg-white rounded-2xl py-1 my-2 grid grid-cols-6 justify-around items-center">
                    <div className=' xsx:col-span-4 smx:col-span-5 '>
                        <input className='rounded-2xl pl-4 focus:outline-none w-full' type='text' placeholder='Quickly access' />

                    </div>
                    <i class="fa-solid fa-magnifying-glass smx:ml-0  xsx:ml-2   pr-4"></i>
                </div>
                {/* dashboard  */}
                <div className='flex mt-4 items-center'>
                    <img src='./images/icons8-dashboard-layout-48.png' />
                    <h1 className=' font-bold ml-2'>Dashboard</h1>
                </div>
                {/* start  setting */}
                <h2 className='uppercase text-[#444a61] text-md mt-5 font-bold  '>Settings</h2>
                {/* Atm */}
                <div onClick={() => setCheck(!Check)} className={Check ? ' cursor-pointer mt-4 flex justify-between items-center hover:bg-[#22a565] py-3 px-2 hover:text-white active:text-white  active:rounded-sm hover:rounded-sm font-semibold text-white bg-[#22a565]' : ' cursor-pointer mt-4 flex justify-between items-center hover:bg-[#22a565] py-3 px-2 hover:text-white active:text-white  active:rounded-sm hover:rounded-sm font-semibold   '}>
                    <h2>ATM Setting</h2>
                    <i class= {Check?"fa-solid fa-angle-up pr-10":"fa-solid pr-10  fa-chevron-down"}></i>
                </div>

                <div className={Check ? 'bg-[#1e2642] opacity-1 h-32 transition-all duration-[1s]' : ' duration-[1s] h-0 overflow-hidden opacity-0'}>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>Item1</h3>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>Item2</h3>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>Item3</h3>

                </div>
        
   
   {/* Bussiness */}
                <div  onClick={() => setCheck1(!Check1)} className={Check1 ? ' cursor-pointer  flex justify-between items-center hover:bg-[#22a565] py-3 px-2 hover:text-white active:text-white  active:rounded-sm hover:rounded-sm font-semibold text-white bg-[#22a565]' : ' cursor-pointer flex justify-between items-center hover:bg-[#22a565] py-3 px-2 hover:text-white active:text-white  active:rounded-sm hover:rounded-sm font-semibold   '}>
                    <h2>Bussiness Setup</h2>
                    <i class= {Check1?"fa-solid fa-angle-up pr-10":"fa-solid pr-10  fa-chevron-down"}></i>
                </div>

                <div className={Check1 ? 'bg-[#1e2642] opacity-1 h-32 transition-all duration-[1s]' : ' duration-[1s] h-0 overflow-hidden opacity-0'}>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>Item1</h3>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>Item2</h3>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>Item3</h3>

                </div>


{/* user managment */}


                <div onClick={() => setCheck2(!Check2)} className={Check2? ' cursor-pointer  flex justify-between items-center hover:bg-[#22a565] py-3 px-2 hover:text-white active:text-white  active:rounded-sm hover:rounded-sm font-semibold text-white bg-[#22a565]' : ' cursor-pointer  flex justify-between items-center hover:bg-[#22a565] py-3 px-2 hover:text-white active:text-white  active:rounded-sm hover:rounded-sm font-semibold   '}>
                    <h2>ATM Setting</h2>
                    <i class= {Check2?"fa-solid fa-angle-up pr-10":"fa-solid pr-10  fa-chevron-down"}></i>
                </div>

                <div className={Check2 ? 'bg-[#1e2642] opacity-1 h-32 transition-all duration-[1s]' : ' duration-[1s] h-0 overflow-hidden opacity-0'}>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>User</h3>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>Profiles</h3>
                    <h3 className='hover:bg-[#2a324c] font-semibold cursor-pointer active:bg-[#2a324c] py-2 px-4 active:text-[#22a565] hover:text-[#22a565]'>Groups</h3>

                </div>





                {/* end setting */}

           <h1 className='mt-3 font-bold  hover:text-white cursor-pointer'>License Management</h1>


            </div>

        </>
    )
}

export default Navigation