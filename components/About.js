import Image from "next/image";
import { useContext } from "react";
import { JackInTheBox, Zoom } from "react-awesome-reveal";
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
            <h2 className="py-4 px-4 md:px-0 md:mt-5 mt-0">Who I&apos;Am</h2>
          </JackInTheBox>

          <p
            className={
              ajx.darkmode
                ? "py-2 text-gray-200  text-justify md:text-justify md:p-0 md:mb-5 mb-0 p-5"
                : "py-2 text-gray-600  text-justify md:text-justify md:p-0 md:mb-5 mb-0 p-5"
            }
          >
            Hello, I’m Ajitkumar Vaghela, a Software Engineer at Gateway Group
            of Companies. I completed my Bachelor’s degree in Computer
            Engineering from Government Engineering College, Rajkot in 2024 With
            a strong foundation in software development, I have a deep interest
            in system architecture design and enjoy crafting scalable,
            high-performance solutions. My work is driven by a passion for clean
            code, efficient systems, and continuous improvement. I thrive in
            dynamic environments where I can contribute to building reliable and
            modern software platforms.
          </p>
          <p
            className={
              ajx.darkmode
                ? "py-2 text-gray-200  text-justify md:text-justify md:p-0 p-5"
                : "py-2 text-gray-600  text-justify md:text-justify md:p-0 p-5"
            }
          >
            As a software engineer, I strive to build robust and reliable
            software that simplifies everyday tasks. I focus on creating
            scalable, efficient, and user-friendly systems that solve real-world
            problems. My goal is to develop solutions that empower people and
            enhance their daily lives through technology.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer mt-5 md:px-0 px-5">
            <button
              className={
                ajx.darkmode
                  ? "px-4 py-2 shadow-sm shadow-amber-400 text-black  "
                  : "px-4 py-2"
              }
            >
              <a href="/ajitkumar_cv_2025.pdf" download>
                Download CV
              </a>
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
