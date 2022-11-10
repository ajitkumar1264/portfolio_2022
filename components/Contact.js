import React,{useContext,useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from '@emailjs/browser'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill ,BsYoutube} from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { JackInTheBox } from "react-awesome-reveal";
import annex from "./Context";

function Contact() {

const ajv=useContext(annex)

const form=useRef();


const sendemail=(e)=>{
  e.preventDefault();
 
  emailjs.sendForm('service_0s35th8','template_0ojv89p',form.current,'uQBh02mdWYBAlLrRZ')
  .then((result)=>{
   console.log(result.txt)
  },(error)=>{
   console.log(error.txt);
  })
  alert("we recived your Message");
 
 
 }


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
                <Link href="https://www.linkedin.com/in/ajitkumar-vaghela-092605222/
                ">
                  <div className={ajv.darkmode ? "rounded-full shadow-sm shadow-amber-400 hover:bg-amber-300 hover:text-black md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  ":"rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  "}>
                    <FaLinkedin />
                  </div>
                  </Link>
                  <Link href="https://github.com/ajitkumar1264
                  ">     
                               <div className={ajv.darkmode ? "rounded-full shadow-sm shadow-amber-400 hover:bg-amber-300 hover:text-black md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  ":"rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  "}>
                    <FaGithub />
                  </div>
                  </Link>
<Link href="mailto:vaghelaajit464@gmail.com?subject = Feedback&body = Message">
                  <div className={ajv.darkmode ? "rounded-full shadow-sm shadow-amber-400 hover:bg-amber-300 hover:text-black md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  ":"rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  "}>
                    <AiOutlineMail />
                  </div>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UC188DJQ9NAFoleJTeUy-N4A">
                  <div className={ajv.darkmode ? "rounded-full shadow-sm shadow-amber-400 hover:bg-amber-300 hover:text-black md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  ":"rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-500  "}>
                    <BsYoutube />
                  </div>
                  </Link>
                  </>
                </div>
                
              </div>
              
            </div>
          </div>

          <div className={ajv.darkmode ? "col-span-3 w-full h-auto shadow-sm shadow-amber-400 rounded-xl lg:p-4":"col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"}>
            <div className="p-4">
              <form action="" ref={form} >
                <div className="grid  gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
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
                      name="email"
                      className="border-2 rounded-lg p-3 flex text-black "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Message
                    </label>
                    <textarea
                    name='message' 
                      type="text"
                      className="border-2 rounded-lg p-3 flex text-black  "
                    />
                  </div>
                </div>
                <button onClick={sendemail} className={ajv.darkmode ? "w-full p-4  mt-4 shadow-none text-black":"w-full p-4 text-gray-100 mt-4"}>send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>


<p className="text-center mb-15 ">@2022 AJITKUMARBR
<br/>
ALL RIGHTS RESERVED

</p>
    </div>
    
  );
}

export default Contact;
