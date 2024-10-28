import { useState } from "react"
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <nav className=" bg-neutral-900 backdrop-blur-lg fixed w-full z-50 bg-transparent">
      <div className="flex items-center font-medium justify-around">
        <div className="z-20 p-5 md:w-auto w-full flex justify-between">
          <Link to="/" className="text-white">Home</Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block font-[500] text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-7 px-3 inline-block font-[500] text-white">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block font-[500] text-white">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
        <button className="px-4 py-2 rounded-xl border border-white text-white">Schedule a Meeting</button>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#f1f1f1] dark:bg-[#1f2937] fixed z-10 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-1 px-3 inline-block text-xl font-[500]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-1 px-3 inline-block font-[500]">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-1 px-3 inline-block font-[500]">
               Planning Service
            </Link>
          </li>
          <li>
            <Link to="/stocks" className="py-1 px-3 inline-block font-[500]">
               Stocks
            </Link>
          </li>
          <li>
            <Link to="/forex" className="py-1 px-3 inline-block font-[500]">
               Forex / Crypto
            </Link>
          </li>
          <li>
            <Link to="/forex" className="py-1 px-3 inline-block font-[500]">
              Blockchain Technology
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-1 px-3 inline-block font-[500]">
               Contact
            </Link>
          </li>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-1 flex justify-between items-center md:pr-0 pr-5 group font-[500]">
              Financial
              <span className="text-xl md:hidden inline"></span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FaAngleDown />
              </span>
            </h1>
            <div>
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div
                    className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                  ></div>
                </div>
                <div className="bg-white p-2 flex flex-col gap-10">
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link to="/" className="hover:text-primary font-[500]">
                      Stock
                    </Link>
                  </li>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link to="/" className="hover:text-primary font-[500]">
                      Stock
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <button className="px-4 py-2 rounded-xl">Community</button>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar