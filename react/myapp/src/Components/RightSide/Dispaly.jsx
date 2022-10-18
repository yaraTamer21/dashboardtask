import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get, postData } from '../../Store/ApiSlice'
import { v4 as uuidv4 } from 'uuid';
import { info } from 'autoprefixer';


const initals = {
    name: "",
    username: "",
    email: "",
    group: "",
    assign: "",

}
const Dispaly = () => {
    const [displays, setdisplays] = useState(false);

    const [information, setinformation] = useState(initals);
    const { name, username, email, group, assign } = information;
    const dispatch = useDispatch()
    const { books } = useSelector((i) => i.GetSlice);
    const [data, setdata] = useState(books)
   
    let today = new Date();
    let result = today.toString().slice(0, 21);


    useEffect(() => {
        dispatch(Get());

    }, [dispatch]);

    const GetData = (e) => {
        const { value, name } = e.target;
        setinformation({ ...information, [name]: value, Date: result })
    }

    // to send data to api
    const SendData = (e) => {
        e.preventDefault();

        if (name == "" || username == "" || email == "" || group == "" || assign == "") {
            alert("pleas enter all fields")
        }
        else {
            dispatch(postData(information))
            setdisplays(false)
        }

    }


    // to fillters by status
    const status = (e) => {
        
        console.log(e.target.value)
            // const info = books.filter((i) => i.assign = e.target.value)
        if(e.target.value==="any"){
            setdata(books)
        }
      
        else{
            const info =books.filter((i)=>i.assign===e.target.value) ;
            setdata(info)
            console.log(info)
        }
            
            // setdata(info)
          

         
         
    

    }
// filteing by name
    const Name=(e)=>{
    const info= books.filter((i)=>i.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setdata(info)
  }

        // if(data.length>0){
        //     const info=data.filter((i)=>i.username.includes(e.target.value));
        //     setdata(info)
        // }
        // else{
        //     const info=books.filter((i)=>i.username.toLowerCase().includes(e.target.value.toLowerCase()));
        //     setdata(info)
        // }
    
 
    return (
        <>
            <div className="dispaly bg-[#f8fafb] px-4 py-3">
                <div className="managment mb-3 flex items-center justify-between ">
                    <h2 className='text-xl font-bold'>User Managment</h2>
                    <button onClick={() => setdisplays(true)} className='bg-[#19a463] rounded-sm py-1 text-white font-semibold px-2'> <span className='text-xl'>+</span>AddNew</button>
                </div>


                <div className='bg-white border rounded-md'>
                    {/* filrers */}
                    <div className="filter py-3 px-4 grid mdx:grid-cols-5 smx:grid-cols-1 items-center">
                        <div className=" mdx:w-fit xsx:w-full mdx:mt-0  search xsx:mt-2 w-full  border rounded-md mr-2 bg-white  py-2  grid grid-cols-6 justify-around items-center">
                            <div className=' xsx:col-span-4 smx:col-span-5 '>
                                <input onChange={Name} className='rounded-2xl pl-4 focus:outline-none ' type='text' placeholder='Quickly access' />

                            </div>
                            <i class="fa-solid fa-magnifying-glass smx:ml-0  xsx:ml-2   pr-4"></i>
                        </div>

                        <div className="name xsx:mt-2 mdx:w-fit xsx:w-full mdx:mt-0 ">
                            <input onChange={Name} className=' w-full bg-white border rounded-md px-2 py-2 focus:outline-none placeholder:text-black ' placeholder='User Name' />
                        </div>



                        {/* select  */}
                        <fieldset className='border mdx:mx-auto mdx:w-fit mdx:px-5 xsx:w-full mdx:-mt-2  rounded-md xsx:mt-2 '>
                            <legend className='px-2 font-semibold'>User Status:</legend>

                            <div className="select bg-white  px-2  focus:outline-none">

                                <select  onChange={status} className='focus:outline-none px-4' id="countries" >
                                    <option className='focus:outline-none'  value='any' selected>Any</option>
                                    <option className='focus:outline-none' value="Locked">Locked</option>
                                    <option className='focus:outline-none' value="Active">Active</option>
                                    <option className='focus:outline-none' value="Inactive">InActive</option>
                                </select>
                            </div>
                        </fieldset>


                        {/* date */}
                        {/* select  */}
                        <fieldset className='border  mdx:w-fit mdx:px-5 xsx:w-full mdx:-mt-2  rounded-md xsx:mt-2 '>
                            <legend className='px-2 font-semibold'>Creation Date:</legend>

                            <div className="select bg-white  px-2  focus:outline-none">
                                <input placeholder='yara' type='date' />
                            </div>
                        </fieldset>

                        {/* filter */}
                        <h2 className='ml-3 text-md font-bold text-[#328ffc] xsx:mt-2 '>AllFilters</h2>

                    </div>
                    {/* icons */}
                    <div className='flex  mt-3 justify-between items-center'>
                        <div className="icons mdx:flex xsx:grid xsx:   items-center  px-4">
                            <div className=' mdx:mt-0 xsx:mb-3 border-r-2 '>
                                <h2 className=' mr-2 text-[gray]'>1 Selected</h2>
                            </div>
                            <div className='  mr-2 text-center  mdx:mt-0 xsx:mb-3 bg-[#e7e9ef]  px-2 py-1  rounded-md '>
                                <i class=" text-[gray] fa-solid fa-pen-to-square"></i>
                            </div>

                            <div className='  mr-2  text-center mdx:mt-0 xsx:mb-3 bg-[#e7e9ef]  px-2 py-1  rounded-md '>
                                <i class="  text-[gray]  fa-solid fa-ban"></i>
                            </div>
                            <div className='  mr-2  text-center mdx:mt-0 xsx:mb-3 bg-[#e7e9ef]  px-2 py-1  rounded-md '>
                                <i class="  text-[gray]  fa-solid fa-lock"></i>
                            </div>
                            <div className='  mr-2  mdx:mt-0 xsx:mb-3 bg-[#e7e9ef]  px-2 py-1  rounded-md '>
                                <h2 className=' text-[gray] font-semibold '>AssigntoProfile</h2>
                            </div>
                            <div className=' mr-2  mdx:mt-0 xsx:mb-3 bg-[#e7e9ef]  px-2 py-1  rounded-md '>
                                <h2 className=' text-[gray] font-semibold'>AssigntoGroup</h2>
                            </div>
                            <div className=' mr-2 mdx:mt-0 xsx:mb-3  bg-[#e7e9ef] px-2 py-1  rounded-md '>
                                <i class="fa-solid  px-2 text-[gray]  fa-ellipsis-vertical"></i>
                            </div>

                            <div>
                                <h2 className=' -mt-3 font-semibold  text-[gray]'>UnSelected</h2>
                            </div>
                        </div>
                        <div className='px-3 py-1 mr-4 text-center  bg-[#e7e9ef]   rounded-md'>
                            <i class=" text-[gray]  fa-solid fa-down-long"></i>
                        </div>
                    </div>

                    {/* table */}

                    <div class="overflow-x-auto mt-3 relative">
                        <table class="w-full text-sm text-left">
                            <thead class="text-md font-medium bg-[#f8fafb] text-[gray] ">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        UserName
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        EmailAddress
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Group
                                    </th>

                                    <th scope="col" class="py-3 px-6">
                                        Status
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Created On
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map((i) => <tr class="bg-white hover:bg-[#f8fafb] border-b text-black">
                                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
                                        {i.name}
                                    </th>
                                    <td class="py-4 px-6">
                                        {i.username}
                                    </td>
                                    <td class="py-4 px-6">
                                        {i.email}
                                    </td>
                                    <td class="py-4 px-6">
                                        {i.group}
                                    </td>
                                    <td class="py-4 px-6">
                                        {i.assign} {i.assign === "Locked" ? <i class=" bg-gray-900 px-3 py-1 text-white rounded-full fa-solid fa-exclamation"></i> : <i class="fa-solid fa-chevron-down"></i>}
                                        {/* <i class=" bg-gray-900 px-2 py-1 text-white rounded-full fa-solid fa-exclamation"></i> */}
                                    </td>
                                    <td class="py-4 px-6">
                                        {i.Date}
                                    </td>
                                </tr>): books.map((i) => <tr class="bg-white hover:bg-[#f8fafb] border-b text-black">
                                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
                                        {i.name}
                                    </th>
                                    <td class="py-4 px-6">
                                        {i.username}
                                    </td>
                                    <td class="py-4 px-6">
                                        {i.email}
                                    </td>
                                    <td class="py-4 px-6">
                                        {i.group}
                                    </td>
                                    <td class="py-4 px-6">
                                        {i.assign} {i.assign === "Locked" ? <i class=" bg-gray-900 px-3 py-1 text-white rounded-full fa-solid fa-exclamation"></i> : <i class="fa-solid fa-chevron-down"></i>}
                                        {/* <i class=" bg-gray-900 px-2 py-1 text-white rounded-full fa-solid fa-exclamation"></i> */}
                                    </td>
                                    <td class="py-4 px-6">
                                        {i.Date}
                                    </td>
                                </tr>)}



                            </tbody>
                        </table>
                    </div>



                </div>




            </div>

            {/* div to get data from user */}
            <div className={displays ? 'shadow-2xl bg-[#f8fafb]  w-[500px] rounded-md fixed  top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 transition-all duration-300' : ' shadow-2xl bg-[#f8fafb]  w-[500px] rounded-md fixed  -top-1/2 left-1/2 transition-all duration-300 -translate-x-1/2  -translate-y-1/2'}>
                <div className='bg-[#050e2d] py-1 text-white  flex items-center justify-between px-3 rounded-md '>
                    <h2 className='text-xl'>Add New User</h2>
                    <i onClick={() => setdisplays(false)} class="fa fa-close text-xl" aria-hidden="true"></i>
                </div>
                <div className=' px-4 py-3'>
                    <div >
                        <label className='block mb-2 font-bold'>Full Name:</label>
                        <input onChange={GetData} name='name' value={name || ""} type='text' placeholder='Enter FullName' className='bg-[white] focus:outline-none w-full rounded-md shadow-md py-2 px-2 ' />
                    </div>
                    <div className='mt-3' >
                        <label className='block mb-2 font-bold'>User Name:</label>
                        <input onChange={GetData} name="username" value={username || ""} type='text' placeholder='Enter UserName' className='bg-[white] focus:outline-none w-full rounded-md shadow-md py-2 px-2 ' />
                    </div>

                    <div className='mt-3' >
                        <label className='block mb-2 font-bold'>Email Adress:</label>
                        <input onChange={GetData} name='email' value={email || ""} type='email' placeholder='Enter EmailAddress' className='bg-[white] focus:outline-none w-full rounded-md shadow-md py-2 px-2 ' />
                    </div>

                    <div className='mt-3' >
                        <label className='block mb-2 font-bold'>User Group:</label>
                        <select onChange={GetData} name='group' value={group || ""} id="countries" class=" shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a User Group</option>
                            <option value="Office">Office</option>
                            <option value="Manager">Manager</option>
                            <option value="HeadOffice">HeadOffice</option>
                        </select>

                    </div>


                    <div className='mt-3' >
                        <label className='block mb-2 font-bold'>Assign Profile:</label>
                        <select onChange={GetData} name='assign' value={assign || ""} id="countries" class=" shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Profile</option>
                            <option value="Locked">Locked </option>
                            <option value="Active">Active</option>
                            <option value="Inactive ">Inactive </option>
                        </select>

                    </div>
                </div>
                <hr />
                <div className='bg-white px-3 py-2 flex justify-between items-center'>
                    <a onClick={() => setinformation(initals)} className='font-bold cursor-pointer '>ResetFields</a>
                    <div>
                        <button onClick={() => setdisplays(false)} className='bg-[gray] text-black rounded-sm py-1 mr-2 shadow-lg  font-semibold px-2'> Cancel</button>
                        <button type='submit' onClick={SendData} className='bg-[#19a463] rounded-sm py-1 text-white font-semibold px-2'> AddNew</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Dispaly