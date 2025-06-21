import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { JackInTheBox, Slide } from "react-awesome-reveal";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import annex from "./Context";

function Navbar() {
  const ajv = useContext(annex);

  const [nav, setnav] = useState(false);
  const [shadow, setshadow] = useState(false);
  const [yellshadow, setyellshadow] = useState({});

  const handlenav = () => {
    setnav(!nav);
  };

  useEffect(() => {
    const handleshadow = () => {
      if (window.scrollY >= 90) {
        setshadow(true);
      } else {
        setshadow(false);
      }
    };
    window.addEventListener("scroll", handleshadow);
  }, []);

  const modechange = () => {
    ajv.setdarkmode(true);
    console.log(ajv.darkmode);
    document.body.style.backgroundColor = "#1B1B1B";
    document.body.style.color = "#FCA311";
    document.body.style.scrollBehavior = "smooth";
    setyellshadow({
      boxShadow:
        "0 20px 25px -5px rgb(252 163 17 / 0.1),0 8px 10px -6px rgb(252 163 17 / 0.1)",
    });
  };

  const moderechange = () => {
    ajv.setdarkmode(false);
    console.log(ajv.darkmode);
    document.body.style.backgroundColor = "#ecf0f3";
    document.body.style.color = "#1f2937";
    setyellshadow({
      boxShadow:
        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    });
  };

  return (
    <div
      style={yellshadow}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]  backdrop-blur-[80vh]  "
          : "fixed w-full h-20 z-[100]   "
      }
    >
      <div className="flex justify-between items-center w-auto h-full px-2 2xl:px-16">
        <h1 className=" text-4xl ml-5  font-semibold">
          Annex<span className="text-[#5651e5] text-4xl">4u</span>
        </h1>

        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-small uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
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
            <Link href="/" onClick={modechange}>
              <li className="ml-10 text-small uppercase hover:border-b">
                Dark
              </li>
            </Link>

            <Link href="/" onClick={moderechange}>
              <li className="ml-10 text-small uppercase hover:border-b">
                White
              </li>
            </Link>
          </ul>
          <div
            onClick={handlenav}
            className="md:hidden mr-5 rounded-full  shadow-gray-400 p-3 cursor-pointer"
          >
            <AiOutlineMenu />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed bg-black/70 top-0 left-0 h-screen w-full" : ""
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 easein duration-500"
              : "fixed top-0 left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/vercel.svg"
                alt="ajitkemad"
                height={50}
                width={125}
              />
              <div
                onClick={handlenav}
                className="rounded-full shadow-lg text-black shadow-gray-400 p-3 cursor-pointer   "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#5651e5] my-4">
              <p className=" font-bold w-[85%] md:w-[90%] py-4 text-black">
                Let&apos;s build something legendary together{" "}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col" style={{ color: "black" }}>
            <Slide direction="right">
              <ul className="uppercase ">
                <Link href="/" className="" onClick={() => setnav(!nav)}>
                  <div>
                    <li className="py-4 text-sm">Home</li>
                  </div>
                </Link>
                <Link href="#about" onClick={() => setnav(!nav)}>
                  <div>
                    <li className="py-4 text-sm">About</li>
                  </div>
                </Link>
                <Link href="#project" onClick={() => setnav(!nav)}>
                  <div>
                    <li className="py-4 text-sm">Projects</li>
                  </div>
                </Link>
                <Link href="#skills" onClick={() => setnav(!nav)}>
                  <div>
                    <li className="py-4 text-sm">Skills</li>
                  </div>
                </Link>
                <Link href="#contact" onClick={() => setnav(!nav)}>
                  <li className="py-4 text-sm">Contact us</li>
                </Link>

                <Link href="/" onClick={() => setnav(!nav)}>
                  <li onClick={modechange} className="py-4 text-sm">
                    dark Mode
                  </li>
                </Link>

                <Link href="/" onClick={() => setnav(!nav)}>
                  <li onClick={moderechange} className=" py-4 text-sm">
                    white Mode
                  </li>
                </Link>
              </ul>
            </Slide>

            <div className="pt-10    ">
              <p className="uppercase tracking-wider text-[#5651e5]">
                Lets connect{" "}
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
                    <BsPersonLinesFill />
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
