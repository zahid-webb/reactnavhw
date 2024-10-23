import React from 'react'

const Navbar3 = () => {
  return (
    <>
      <nav className=' bg-slate-500 text-gray-50 text-2xl mt-8'> 
        <div className="container">
            <div className="nav_main flex  justify-between items-center">
                <div className="nav_img "><img className='w-20 mr-48' src="img/l3.svg" alt="l2" /></div>          
                 <div className="search">
                    <button className=' w-16 h-9 bg-slate-400 text-fuchsia-800 rounded-l-xl'>Go</button>
                    <input placeholder='Search' className='bg-transparent border-none text-white ' type="text" />
                </div>  
                    <ul className='flex justify-evenly hover:marker:only: decoration-stone-100 gap-16 '>
                        <li><a href="#">Destination</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Videos</a></li>
                    </ul>
                    <button className='w-40 h-12 bg-transparent border-2 flex justify-center items-center border-black rounded-3xl'>Sign in</button>
                </div>
            </div>  
    </nav>
    </>
  )
}

export default Navbar3