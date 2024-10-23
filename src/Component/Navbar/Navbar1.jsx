import React from 'react'

const Navbar1 = () => {
  return (
    <>
    <nav className=' bg-black text-slate-400 text-2xl mt-4'> 
        <div className="container">
            <div className="nav_main flex justify-between items-center">
                <div className="nav_img"><img className='w-20' src="img/logo1.jpg" alt="l1" /></div>
                <div className="nav_list">
                    <ul className='flex gap-8'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">vlog</a></li>
                        <li><a href="#">Social</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar1