import React,{useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { JackInTheBox } from "react-awesome-reveal";
import annex from "./Context";

function Contact() {

const ajv=useContext(annex)


  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] md:px-0 px-5 ">
          Contact Us
        </p>
        <JackInTheBox>
        <h2 className="py-4 md:mt-5 mt-0 mb-10 md:px-0 px-5">Get In Touch</h2>
        </JackInTheBox>

        <div className="grid lg:grid-cols-6 mt-10 gap-8 p-5 md:p-0">
          <div className={ajv.darkmode ? "col-span-3 lg:col-spna-2 w-full h-full shadow-sm shadow-amber-400 rounded-xl p-4":"col-span-3 lg:col-spna-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"}>
            <div className="lg:p-4 h-full rounded-xl">
              <div className="flex  w-full h-1/2">
                <Image
                  src="/prof.svg"
                  width={400}
                  height={400}
                  className="rounded-xl mt-10 hover:scale-105 ease-in duration-300"
                  alt=""
                />
              </div>
              
             
              
              <div className="">
                <p className="uppercase mt-5 md:px-0 px-5">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                <>
                  <div className={ajv.darkmode ? "rounded-full shadow-sm shadow-amber-400 hover:bg-amber-300 hover:text-black md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  ":"rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  "}>
                    <FaLinkedin />
                  </div>
                  <div className={ajv.darkmode ? "rounded-full shadow-sm shadow-amber-400 hover:bg-amber-300 hover:text-black md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  ":"rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  "}>
                    <FaGithub />
                  </div>
                  <div className={ajv.darkmode ? "rounded-full shadow-sm shadow-amber-400 hover:bg-amber-300 hover:text-black md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  ":"rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  "}>
                    <AiOutlineMail />
                  </div>
                  <div className={ajv.darkmode ? "rounded-full shadow-sm shadow-amber-400 hover:bg-amber-300 hover:text-black md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  ":"rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  "}>
                    <BsPersonLinesFill />
                  </div>
                  </>
                </div>
                
              </div>
              
            </div>
          </div>

          <div className={ajv.darkmode ? "col-span-3 w-full h-auto shadow-sm shadow-amber-400 rounded-xl lg:p-4":"col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"}>
            <div className="p-4">
              <form action="">
                <div className="grid  gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex text-black "
                    />
                  </div>
                </div>

                <div className="grid  gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-2 rounded-lg p-3 flex text-black "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Message
                    </label>
                    <textarea
                      type="text"
                      className="border-2 rounded-lg p-3 flex text-black  "
                    />
                  </div>
                </div>
                <button className={ajv.darkmode ? "w-full p-4  mt-4 shadow-none text-black":"w-full p-4 text-gray-100 mt-4"}>send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>


<p className="text-center mb-15 ">CopyRight @2021 vaghela Ajitkumar</p>
    </div>
    
  );
}

export default Contact;
