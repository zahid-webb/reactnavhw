import React from 'react'

const Navbar4 = () => {
  return (
    <>
    <nav className=' text-black text-base mt-8'> 
      <div className="container">
          <div className="nav_main flex  justify-between items-center">
              <div className="nav_img "><img className='w-24' src="img/logo4.jpg" alt="l2" /></div> 
              <div className="nav_list flex items-center">
                  <ul className='flex justify-evenly hover:marker:only: decoration-stone-100 gap-16 '>
                      <li><a href="#">My Guide</a></li>
                      <li><a href="#">Enlighten</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">Education</a></li>
                      <li><a href="#">Virtual Office</a></li>
                      <li><a href="#">About</a></li>
                  </ul>
                  <button className='w-44 h-12 bg-transparent border-2 flex justify-center items-center border-black rounded-3xl ml-6'>Book a Meeting</button>
                </div>          
              </div>
          </div>  
  </nav>
  </>
  )
}

export default Navbar4