import { GoPerson } from "react-icons/go";
import { HiMenuAlt3, HiOutlineShoppingBag } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";



// import { IoMoon } from "react-icons/io5";
// import { IoSunny } from "react-icons/io5";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  // const [dark, setDark] = useState(false);
  //   const toggleDark = () => {
  //       setDark(!dark);
  //       document.body.classList.toggle("dark");
  //   }

  return (
    <>
      <nav className="w-full h-20 flex flex-col justify-center items-center sticky top-0 z-50 bg-gradient-to-r from-color1 to-color2 lg:shadow-2xl">
        <div className="w-full">
          <div className="lg:w-4/5 w-11/12 mx-auto h-full flex justify-between items-center">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2 ">
                <h2 data-aos="slide-right"  className="text-white font-bold text-lg cursor-pointer">Shoes</h2>
              </div>
            </div>
            <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
              <a href="#" data-aos="zoom-in-right" data-aos-delay="300" className="leading-normal no-underline text-white text-lg hover:text-dark">Home</a>
              <a href="#" data-aos="zoom-in-right" data-aos-delay="500" className="leading-normal no-underline text-white text-lg hover:text-dark">Catalogs</a>
              <a href="#" data-aos="zoom-in-right" data-aos-delay="700" className="leading-normal no-underline text-white text-lg hover:text-dark">Brands</a>
              <a href="#" data-aos="zoom-in-right" data-aos-delay="900" className="leading-normal no-underline text-white text-lg hover:text-dark">Review</a>
              <a href="#" data-aos="zoom-in-right" data-aos-delay="1100" className="leading-normal no-underline text-white text-lg hover:text-dark">Contact</a>
              <a href="#" data-aos="zoom-in-right" data-aos-delay="1300" className="leading-normal no-underline text-white text-lg hover:text-dark">Support</a>
              {/* <a onClick={() => toggleDark()} className= "text-black dark:text-white">
                    {
                        dark && <IoSunny />
                    }
                    {
                        !dark && <IoMoon />
                    }
                </a> */}
            </ul>
            <div data-aos="zoom-in-left" data-aos-delay="1500" className="flex gap-4 max-lg:hidden"> 
              <button className="bg-dark rounded-full shadow h-10 w-10 outline-none text-white hover:bg-white hover:text-dark cursor-pointer text-base">
                <HiOutlineShoppingBag className="w-full h-full p-2"/>
              </button>
              <button className="bg-dark rounded-full shadow h-10 w-10 outline-none text-white hover:bg-white hover:text-dark cursor-pointer text-base">
                <GoPerson className="w-full h-full p-2" />
              </button>
            </div>
            {dropdown ? (
              <div>
                <MdClose onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black" />
              </div>
            ) : (
              <div>
                <HiMenuAlt3 onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black" />
              </div>
            )}
          </div>
          {dropdown && (
            <div className="lg:hidden w-full fixed top-[4.5rem] bg-gradient-to-r from-color1 to-color2 transition-all">
              <div className="w-full flex flex-col items-baseline gap-4 p-4 pt-0"> 
                <ul className="flex flex-col justify-center w-full" >
                  <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Home</a>
                  <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Catalogs</a>
                  <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Brands</a>
                  <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Review</a>
                  <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Contact</a>
                  <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Support</a>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
