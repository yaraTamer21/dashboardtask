import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../Components/LeftSide/Navigation'
import UserManagment from '../Components/RightSide/UserManagment'

const Home = () => {
    const check=useSelector((x)=>x.checkNav.value);
    console.log(check);

    return (
        <>
            <div className= {check?'grid grid-cols-5':'grid grid-cols-1'}  >

                <div  className= {check?'  xsx:col-span-2 mdx:col-span-1 bg-[#050e2d] transition-all duration-200':'hidden transition-all duration-200'}>
                    <Navigation />
                </div>

                <div className=' xsx:col-span-3 mdx:col-span-4'>
                    <UserManagment />
                </div>



            </div>

        </>
    )
}

export default Home