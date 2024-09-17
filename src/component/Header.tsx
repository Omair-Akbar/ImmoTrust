// ICONS
import { Instagram } from 'lucide-react';
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaFacebookF } from 'react-icons/fa6';
import { IoMdHome } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { RiBloggerFill } from "react-icons/ri";
import { RiPriceTag3Fill } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import { MdFeaturedPlayList } from "react-icons/md";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false); // Set initial state to false
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenNavbar(false);
      }
    };

    if (openNavbar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openNavbar]);

  return (
    <header className="bg-transparent p-4 flex justify-between items-center Navbar-color relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menu button */}
        <button onClick={() => setOpenNavbar(!openNavbar)} aria-label="Toggle menu">
          <RiMenu3Line className="text-white w-6 h-6" />
        </button>

        {/* Logo */}
        <img src="/whiteLogo.png" alt="ImmoTrust Logo" width={150} height={40} className='md:hidden w-[100px] h-[40px]' />

        <img src="/logo.png" alt="ImmoTrust Logo" width={150} height={40} className='hidden md:block w-[130px] h-[40px]' />

        {/* Social icons - Hidden on smaller screens */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" aria-label="Linkedin">
            <FaLinkedinIn className="text-white w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="text-white w-5 h-5" />
          </a>
          <a href="#" className="text-white font-semibold">KONTAKT</a>
        </div>
      </div>

      {/* Overlay */}
      {openNavbar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}

      {/* Navbar - Only show when openNavbar is true */}
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-3/4 md:w-[25%] bg-white text-black  h-screen transition-transform transform ${openNavbar ? 'translate-x-0' : '-translate-x-full'} z-50`}
      >
        <div className='flex flex-row items-center mx-0 md:mx-2'>
          <img src="/logo.png" alt="ImmoTrust Logo" width={150} height={40} className='w-[140px] h-[40px] mt-3 mx-3' />

          <button
            onClick={() => setOpenNavbar(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-black hover:text-teal-500 w-6 h-6"
          >
            <RiCloseLine className='text-2xl' />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 mt-8">
          <li className=' flex flex-row items-center  group gap-3 hover:bg-teal-500 hover:text-white p-2 md:pl-5 px-4 m-1 rounded-md'><IoMdHome /> <a href="#" className=" group-hover:text-white text-black  font-semibold ">Home</a></li>
          <li className=' flex flex-row items-center  group gap-3 hover:bg-teal-500 hover:text-white p-2 md:pl-5 px-4 m-1 rounded-md'><MdDesignServices />  <a href="#" className=" group-hover:text-white text-black  font-semibold ">Services</a></li>
          <li className=' flex flex-row items-center  group gap-3 hover:bg-teal-500 hover:text-white p-2 md:pl-5 px-4 m-1 rounded-md'><RiPriceTag3Fill />  <a href="#" className=" group-hover:text-white text-black  font-semibold ">Pricing</a></li>
          <li className=' flex flex-row items-center  group gap-3 hover:bg-teal-500 hover:text-white p-2 md:pl-5 px-4 m-1 rounded-md'><MdFeaturedPlayList />  <a href="#" className=" group-hover:text-white text-black  font-semibold ">Feature</a></li>
          <li className=' flex flex-row items-center  group gap-3 hover:bg-teal-500 hover:text-white p-2 md:pl-5 px-4 m-1 rounded-md'><RiBloggerFill />  <a href="#" className=" group-hover:text-white text-black  font-semibold ">Blog</a></li>
          <li className=' flex flex-row items-center  group gap-3 hover:bg-teal-500 hover:text-white p-2 md:pl-5 px-4 m-1 rounded-md'><RiContactsFill />  <a href="#" className=" group-hover:text-white text-black  font-semibold ">Contact</a></li>
          <li className=' flex flex-row items-center  group gap-3 hover:bg-teal-500 hover:text-white p-2 md:pl-5 px-4 m-1 rounded-md'><IoMdHome />  <a href="#" className=" group-hover:text-white text-black  font-semibold ">About</a></li>
        </ul>
        {/* Social icons in Navbar */}
        <div className="absolute bottom-7 inset-x-0 flex justify-center space-x-4">
          <a href="#" aria-label="Linkedin" className="transition-transform duration-300 hover:scale-110">
            <FaLinkedinIn className="text-black hover:text-teal-500 w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="transition-transform duration-300 hover:scale-110">
            <Instagram className="text-black hover:text-teal-500 w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="transition-transform duration-300 hover:scale-110">
            <FaFacebookF className="text-black hover:text-teal-500 w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
