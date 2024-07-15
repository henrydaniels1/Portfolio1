import { Link } from "react-router-dom"
import Hire from './buttons/Hire.jsx'


function Nav() {
  return (
    <>
      <div className=" w-full ">
        <div className=' md:w-[85%] w-[95%]  mx-auto '>
          <div className='flex justify-between items-center py-2'>

            <div className="h-[4rem] w-[4rem] flex items-center justify-center">
              <img src="/profilee.png" alt="Logo" className="h-full w-full scale-150" />
            </div>

            <div className=" md:flex hidden justify-between space-x-8 text-white ">
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold"> <Link to="/">Home</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold"><Link to="/about">About</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold"> <Link to="/services">Services</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold"> <Link to="/portfolio">Portfolio</Link></div>
              <div className=" hover:text-blue-500 hover:scale-110 font-semibold"> <Link to="/contact">Contact</Link></div>
            </div>

           <Hire/>
            
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Nav
