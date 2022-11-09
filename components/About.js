import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zoom, Roll, JackInTheBox, Flip, Bounce } from "react-awesome-reveal";
import annex from "./Context";

function About() {
  const ajx = useContext(annex);

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-wider text-[#5651e5] px-4 md:px-0 ">
            About
          </p>
          <JackInTheBox>
            <h2 className="py-4 px-4 md:px-0 md:mt-5 mt-0">Who I Am</h2>
          </JackInTheBox>

          <p
            className={
              ajx.darkmode
                ? "py-2 text-gray-200 md:px-0 px-4"
                : "py-2 text-gray-600 md:px-0 px-4"
            }
          >
            {" "}
            I am backend Developer
          </p>
          <p
            className={
              ajx.darkmode
                ? "py-2 text-gray-200  text-justify md:text-justify md:p-0 md:mb-5 mb-0 p-5"
                : "py-2 text-gray-600  text-justify md:text-justify md:p-0 md:mb-5 mb-0 p-5"
            }
          >
            My Name is Vaghela Ajitkumar Vishnubhai. Currently, I am studying at
            Government Engineering College Rajkot.I am a 3rd-year of CE student.
            and I am passionate about my work. Because I love what I do, I have
            a steady source of motivation that drives me to do my best.
          </p>
          <p
            className={
              ajx.darkmode
                ? "py-2 text-gray-200  text-justify md:text-justify md:p-0 p-5"
                : "py-2 text-gray-600  text-justify md:text-justify md:p-0 p-5"
            }
          >
            The importance of the world wide web is not unknown to anybody,
            especially during a time when the internet is all that we need to
            get our day-to-day work done. Web designing is more than just pretty
            pictures on the internet, there is much more value to it, and it
            shall be known to many.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer mt-5 md:px-0 px-5">
            <button
              className={
                ajx.darkmode
                  ? "px-4 py-2 shadow-sm shadow-amber-400 text-black  "
                  : "px-4 py-2"
              }
            >
              <Link href="/">Download CV</Link>
            </button>
          </p>
        </div>
        <Zoom delay={100}>
          <div
            className={
              ajx.darkmode
                ? " w-64 h-auto m-auto  mt-20 md:mt-0  shadow-md shadow-amber-400 p-2 rounded-xl flex items-center  justify-center hover:scale-105 ease-in duration-500"
                : " w-64 h-auto m-auto shadow-xl mt-20 md:mt-0 shadow-gray-400 p-2 rounded-xl flex items-center  justify-center hover:scale-105 ease-in duration-500"
            }
          >
            <Image
              src="/Aj_1.svg"
              className="rounded-2xl"
              alt="no image"
              width={200}
              height={200}
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default About;
