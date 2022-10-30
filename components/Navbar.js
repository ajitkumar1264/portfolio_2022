import React,{useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import * as Scroll from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu,AiOutlineMail } from "react-icons/ai";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { JackInTheBox, Slide } from "react-awesome-reveal";
function Navbar() {

const [nav, setnav] = useState(false)
const [shadow, setshadow] = useState(false)

const handlenav=()=>{
   setnav(!nav)

}

useEffect(() => {
 const handleshadow=()=>{
  if(window.scrollY >= 90)
  {
    setshadow(true)
  }
  else{
    setshadow(false)
  }
 }
 window.addEventListener("scroll",handleshadow)

}, [])


  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100]  backdrop-blur-[80vh]  ":"fixed w-full h-20 z-[100]   "}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/vercel.svg" width={125} height={50} alt="logo" />

        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-small uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about" >
              <li className="ml-10 text-small uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-small uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-small uppercase hover:border-b">
                skills
              </li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 text-small uppercase hover:border-b">
                project
              </li>
            </Link>
          </ul>
          <div onClick={handlenav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={ nav ? "md:hidden fixed bg-black/70 top-0 left-0 h-screen w-full":""}>
        <div className={nav ? " md:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 easein duration-500":"fixed top-0 left-[-100%] p-10 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/vercel.svg" height={50} width={125} />
              <div onClick={handlenav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer   ">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#5651e5] my-4">
              <p className=" font-bold w-[85%] md:w-[90%] py-4">
                Let's build something legendary together{" "}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
          <Slide direction="right">
              <ul className="uppercase ">
              <Link href="/" className="" onClick={()=>setnav(!nav)}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="#about" onClick={()=>setnav(!nav)}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="#project" onClick={()=>setnav(!nav)}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="#skills" onClick={()=>setnav(!nav)}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="#contact" onClick={()=>setnav(!nav)}>
                <li className="py-4 text-sm">Contact us</li>
              </Link>
            </ul>
            </Slide>

            <div className="pt-10    ">
              <p className="uppercase tracking-wider text-[#5651e5]">
                Let's connect{" "}
              </p>
              <JackInTheBox>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <div className="rounded-full hover:bg-blue-400 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500  ">
                  <FaLinkedin />
                </div>
                <div className="rounded-full hover:bg-blue-400  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500  ">
                  <FaGithub />
                </div>
                <div className="rounded-full hover:bg-blue-400 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500  ">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full hover:bg-blue-400 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500  ">
                  <BsPersonLinesFill  />
                </div>
              </div>
              </JackInTheBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
