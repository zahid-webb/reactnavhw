import React from 'react'

const Navbar5 = () => {
  return (
    <>
    <nav className=' text-black text-xl mt-8 bg-slate-200'> 
      <div className="container">
          <div className="nav_main flex  justify-between items-center">
            <div className="flex items-center">
              <h1 className=' text-4xl mr-6 hover:text-red-400 transition duration-200'>Notion</h1>
              <ul className='flex decoration-stone-100 font-semibold items-center gap-16'>
                      <li><a  className='hover:text-cyan-400 transition duration-500' href="#">Teams</a></li>
                      <li><a  className='hover:text-cyan-400 transition duration-500' href="#">Products</a></li>
                      <li><a className='hover:text-cyan-400 transition duration-500'  href="#">Download</a></li>
                      <li><a className='hover:text-cyan-400 transition duration-500'  href="#">Individual</a></li>
                      <li><a  className='hover:text-cyan-400 transition duration-500' href="#">Pricing</a></li>
                  </ul>
            </div>
              <div className="nav_list flex items-center gap-3">

                <a href="#">Request a Demo</a>
                <button className=' w-28 h-12 out border-l-2 bg-transparent border-black outline-none text-black'>Login</button>
                <button className='w-44 h-12 bg-black flex justify-center items-center border-none text-white rounded-md active:bg-slate-700'>Get Noting Free</button>
                </div>          
              </div>
          </div>  
  </nav>
  </>
  )
}

export default Navbar5