import React from 'react'
import { PiFlowerLotus } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { LiaCartPlusSolid } from "react-icons/lia";
// import { MdNotificationsActive } from "react-icons/md"
// import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
        {/* //main div of a navbar */}
        <div className='flex justify-between px-14 h-14 items-center col-span-6 bg-[#eceaea] opacity-95 sticky '>   {/* color-212121 */}
                <div className='flex items-center text-xl  gap-8'>
                    <div className='text-black'>
                        <CiMenuBurger />
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <PiFlowerLotus className='text-5xl text-gray-800' />
                        <span className='text-2xl font-serif'>Le<sup className='text-xs font-light text-gray-500 ml-1'>nature</sup></span> {/* yt name ---------- */}
                    </div>
                </div>


                <div className='flex justify-center text-gray-500 font-semibold items-center gap-5'>
                    
                <div>
                  <button>Shop</button>
                </div>
                <div>
                  <button>Offers</button>
                </div>
                <div>
                  <button>Our Story</button>
                </div>
                <div>
                  <button>Blog</button>
                </div>
                    
                </div>


                <div className='flex gap-8 items-center text-xl'>
                    {/* <RiVideoOnAiFill /> */}
                    <form action="">
                        <div className='search flex bg-slate-100 items-center h-10 px-4 pr-0 '>
                            <div className='flex items-center gap-5 pr '>
                                <input type="text" placeholder='Search' className='w-70 bg-slate-100 focus:outline-none ' />
                            </div>
                            <button className='h-10 w-16 flex items-center justify-center bg-slate-100  '>
                                <FiSearch className='text-gray-800 text-xl ' />
                            </button>

                        </div>
                    </form>
                    <div className='text-xl p-3 bg-slate-100 border-slate-700  text-gray-800 rounded-full'>
                        <LiaCartPlusSolid  />
                    </div>
                    {/* <div className='relative'>
                        <MdNotificationsActive />
                        <span className='absolute bottom-2 left-2 text-xs bg-red-700 rounded-3xl p-0.5 '>+10</span>
                    </div> */}
                    <img src="https://imgs.search.brave.com/HuMF8aj95V90eORCUfXNnEU2zObTzLHj0TxKsz1TpJA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jdXRl/ZHAub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzEwL2Rw/X2ltYWdlX180Mi0x/MjA2LmpwZw" alt="Profile logo"
                        className='w-9 h-9 rounded-full' />
                    {/* <FaRegUser className=' rounded-full'/> */}
                </div>
            </div>
    </>
  )
}

export default Navbar
