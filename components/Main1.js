import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Fade,
  Slide,
  Bounce,
  Reveal,
  Hinge,
  JackInTheBox,
  Rotate,
} from "react-awesome-reveal";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsBack, BsMailbox, BsPersonLinesFill } from "react-icons/bs";

function Main1() {
  const [bubble, setbubble] = useState(true);

  const bubbleshow = () => {
    setbubble(!bubble);
  };

  return (
    <div className="w-full h-screen text-center relative ">
      <div className=" relative max-w-[1240px] w-full h-full mx-auto p-2 px-4 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-wider text-gray-600">
            Let's build something new with ar zone
          </p>
          <Slide delay={400} direction="up">
            <h1 className="py-4 text-gray-700">
              Hi, I am
              <span className="text-[#5651e5]"> Ajitkumar</span>
            </h1>
          </Slide>
          <Fade delay={600}>
            <h1 className="py-4 text-gray-700">MERN Stack Developer</h1>
          </Fade>
          <JackInTheBox delay={700}>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos neque iusto ducimus.
            </p>
          </JackInTheBox>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <JackInTheBox delay={500}>
              <div className="rounded-full hover:bg-blue-400 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500  ">
                <FaLinkedin className="" />
              </div>
              <div className="rounded-full shadow-lg hover:bg-blue-400 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500  ">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg hover:bg-blue-400 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500  ">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg hover:bg-blue-400 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500  ">
                <BsPersonLinesFill />
              </div>
            </JackInTheBox>
          </div>
        </div>


        <div className="hidden fixed md:inline-block left-[4.25%] md:bottom-40 bottom-20 box bg-black/30 flex-col h-full w-1">
        
        
      </div>

        <div className="fixed left-8 md:bottom-40 bottom-20">
          <div className="absolute  ">
            <Link href="/">
              <div className="  rounded-full shadow-lg  opacity-70 bg-yellow-300 shadow-gray-400 md:p-5 p-2 cursor-pointer hover:scale-110 ease-in duration-500  ">
                <HiOutlineChevronDoubleUp
                  className="text-[rgb(86,81,229)]"
                  size={30}
                />
              </div>
            </Link>
          </div>
        </div>

       

        <div
          className={
            bubble
              ? "  hidden  absolute top-[5%] right-40"
              : "absolute top-[20%]  left-[2%]"
          }
        >
          <div className="  rounded-full shadow-lg bg-pink-400  opacity-70 shadow-gray-400 md:p-20 p-5 cursor-pointer hover:scale-110 ease-in duration-500  "></div>
        </div>

        <div
          className={
            bubble
              ? " hidden absolute top-[27%] right-10"
              : "absolute top-[20%] right-10"
          }
        >
          <div className="  rounded-full shadow-lg bg-green-400  opacity-70 shadow-gray-400 md:p-10 p-5 cursor-pointer hover:scale-110 ease-in duration-500  "></div>
        </div>
        <div
          className={
            bubble
              ? "hidden absolute top-55 bottom-[27%] right-10"
              : "absolute top-55 bottom-[27%] right-10"
          }
        >
          <div className="  rounded-full shadow-lg bg-blue-400  opacity-70 shadow-gray-400 md:p-10 p-5 cursor-pointer hover:scale-110 ease-in duration-500  "></div>
        </div>
        <div
          className={
            bubble
              ? " hidden absolute top-55 bottom-[36%] right-40"
              : "absolute  top-55 bottom-[10%] left-[15%]"
          }
        >
          <div className="  rounded-full shadow-lg bg-purple-400  opacity-70 shadow-gray-400 md:p-10 p-2 cursor-pointer hover:scale-110 ease-in duration-500  ">
            <BsMailbox size={25} />
          </div>
        </div>
        <div className="absolute md:inline hidden right-5 bottom-55">
          <div
            onClick={() => bubbleshow()}
            className="rounded-full shadow-lg bg-red-500 opacity-70 shadow-gray-400 md:p-10 p-5 cursor-pointer hover:scale-110 ease-in duration-500  "
          ></div>
        </div>
        <div className="absolute  md:left-[35%] top-[22%] md:top-[25%] left-[20%]  ">
          <motion.div
            className=" rounded-xl shadow-lg  opacity-70 shadow-gray-400 p-28   md:p-24 cursor-pointer    "
            animate={{
              scale: [1.2, 1, 1.2, 1, 1.2],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 4,
              ease: "anticipate",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 8,
            }}
          />
        </div>
        
      </div>


      

    </div>
  );
}

export default Main1;
