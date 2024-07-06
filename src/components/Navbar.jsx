import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import Image from "./layer/Image";
import logo from "/Logo.png";
import Li from "./layer/Li";
import { PiDotsNineBold } from "react-icons/pi";

export const Navbar = () => {

  let [show, setShow] = useState(false);

  useEffect(()=>{
    function widthSize() {
      if(window.innerWidth > 735.98){
        setShow(true)
      }else{
        setShow(false)
      }
      
    }
    widthSize() 

    window.addEventListener("resize",widthSize )

  },[])
 

  return (
    <nav className="bg-red-500">
      <Container className="relative flex items-center md:justify-center justify-end md:py-8 py-4 px-3 md:px-0 ">
        <Image
          className="absolute top-1/2 md:left-0 left-3 -translate-y-1/2"
          href="/"
          scr={logo}
          alt=""
        />

      
          <ul className= {` transition-all duration-300 flex md:flex-row flex-col gap-x-10 bg-slate-300 md:bg-transparent absolute top-full left-0 md:static w-full md:w-auto p-4 md:p-0 ${show?"translate-x-0":"-translate-x-full"}`}>
            <Li className="text-primary" liText="Home" />
            <Li liText="Shop" />
            <Li liText="ABout" />
            <Li liText="Contact" />
            <Li liText="Journal" />
          </ul>
     
        <div onClick={()=>setShow(!show) } className="flex md:hidden">
          <PiDotsNineBold />
        </div>
      </Container>
    </nav>
  );
};
<li>
  <Link className="font-DM text-[#767676] font-bold hover:text-Primary transi duration-300">
    Home
  </Link>
</li>;
