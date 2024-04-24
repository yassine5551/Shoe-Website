import { useState } from "react";
import { HiHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { SiSonarcloud } from "react-icons/si";
import { TbArrowBackUp } from "react-icons/tb";

export default function Products() {
  const [active, setActive] = useState("Nike");

  return (
    <div className="bg-main_dark">
      <div className="xl:w-4/5 max-w-[1400px] px-6 mx-auto py-8 ">
        <div data-aos="fade-down" data-aos-duration="3000" data-aos-once="true">
          <h2 className="text-4xl text-white font-semibold py-6 ">Products</h2>
          <div className="flex lg:flex-row  flex-col items-center justify-between pt-12 pb-6 gap-8  ">
            <div className="flex items-center">
              <span className="flex flex-wrap items-center gap-8">
                <p
                  className={`hover:text-color1 cursor-pointer ${
                    active === "Nike" ? "text-color1" : "text-white"
                  }`}
                  onClick={() => setActive("Nike")}
                >
                  Nike <span>{200}</span>
                </p>
                <p
                  className={`hover:text-color1 cursor-pointer ${
                    active === "Adidas" ? "text-color1" : "text-white"
                  }`}
                  onClick={() => setActive("Nike")}
                >
                  Adidas original <span>{89}</span>
                </p>
                <p
                  className={`hover:text-color1 cursor-pointer ${
                    active === "Puma" ? "text-color1" : "text-white"
                  }`}
                  onClick={() => setActive("Nike")}
                >
                  Puma <span>{42}</span>
                </p>
                <p
                  className={`hover:text-color1 cursor-pointer ${
                    active === "Reebok" ? "text-color1" : "text-white"
                  }`}
                  onClick={() => setActive("Nike")}
                >
                  Reebok <span>{106}</span>
                </p>
                <p
                  className={`hover:text-color1 cursor-pointer ${
                    active === "Converse" ? "text-color1" : "text-white"
                  }`}
                  onClick={() => setActive("Nike")}
                >
                  Converse <span>{40}</span>
                </p>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <p className="underline text-white flex items-center gap-2 cursor-pointer hover:text-color1">
                Newest <TbArrowBackUp />
              </p>
              <p className="underline text-white flex items-center gap-2 cursor-pointer hover:text-color1">
                UK Size <TbArrowBackUp />
              </p>
              <SiSonarcloud className="text-white" />
              <MdCancel className="text-white" />
            </div>
          </div>
          <div className="lg:flex pt-16">
            <div className="lg:w-2/5 w-full " data-aos="fade-up">
              <p className="text-white flex gap-2 justify-between px-6 uppercase ">
                Nike when zoom air
                <HiHeart />
              </p>
              <p className="text-white px-6 pb-8">Pracing 190.00DH</p>
            </div>
            <div className="overflow-hidden relative bg-gradient-to-r from-color1 to-color2 rounded-3xl mr-5">
              <img
                src="/main.png"
                alt=""
                className="w-full h-[36rem]  hoverImg"
              />
            </div>
            <div className="lg:w-1/3 w-full mr-5">
              <div className="w-full" data-aos="fade-up" data-aos-delay="200">
                <div className="p-8">
                  <p className="text-white flex gap-2 justify-between uppercase ">
                    Nike when zoom air blue
                    <HiHeart />
                  </p>
                  <p className="text-white pb-8 uppercase">Pracing 290.00DH</p>
                </div>
                <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative overflow-hidden ">
                  <div className="w-1/2 relative ">
                    <img className="w-full hoverImg" src="/card2.png" alt="" />
                  </div>
                  <div className="absolute top-6 flex justify-between items-center w-full px-6">
                    <p className="text-white ">DAY-TO-DAY</p>
                    <button className="bg-gradient-to-r from-color1 to-color2 text-white rounded-full px-4 py-1 text-sm">
                      NEW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="w-full" data-aos="fade-up" data-aos-delay="200">
                <div className="p-8">
                  <p className="text-white flex gap-2 justify-between uppercase ">
                    Nike when zoom air fire
                    <HiHeart />
                  </p>
                  <p className="text-white pb-8 uppercase">Pracing 290.00DH</p>
                </div>
                <div className="bg-[#202021dd] h-64 w-full flex items-center justify-center relative overflow-hidden ">
                  <div className="w-1/2 relative">
                    <img className="w-full hoverImg" src="/card1.png" alt="" />
                  </div>
                  <div className="absolute top-6 flex justify-between items-center w-full px-6">
                    <p className="text-white ">DAY-TO-DAY</p>
                    <button className="bg-gradient-to-r from-color1 to-color2 text-white rounded-full px-4 py-1 text-sm">
                      NEW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="p-8">
            <p className="text-white flex gap-2 justify-between uppercase ">
              Nike when zoom air fire vaporamax
              <HiHeart />
            </p>
            <p className="text-white">Pracing 100.00DH</p>
          </div>
          <div className="bg-gradient-to-r from-color1 to-color2 h-64  flex items-center justify-center relative overflow-hidden ">
            <div className="relative">
              <img className="w-1/2 hoverImg" src="/img3.png" alt="" />
            </div>
            <div className="absolute top-6 flex justify-between items-center w-full px-6  ">
              <p className="text-white uppercase">Streat</p>
              <button className="bg-dark shadow h-10 w-10 outline-none hover:bg-white hover:text-dark cursor-pointer text-white rounded-full px-4 py-1 text-sm">
                <HiOutlineShoppingBag className="absolute top-0 right-6 w-[40px] h-[40px] p-2 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
