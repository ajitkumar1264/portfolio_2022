import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import annex from "../components/Context";

function Chat() {
  const Ajx = useContext(annex);

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]  z-1 overflow-hidden  ">
          \
          <Image
            src="/project/supabase.png"
            className=" flex absolute z-1 w-full top-0   object-cover blur-sm "
            height={100}
            width={1}
            alt=""
          />
          <div className="absolute md:top-[60%] top-[50%] md:left-40 left-10  max-w-[1240px] w-full text-lime-200">
            <h2>Annex Chat Web app</h2>
            <h3 className="py-4">React js /Tailwind / Socket.io</h3>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 md:px-0 px-5">
        <div className="col-span-4 ">
          <p>Projects</p>
          <h2>overview</h2>
          <p className="py-4">
            Connect Multiple people in the Same Room and Chat with each other,
            Showing Time .in Which Message Sent and Showing tick mark means
            Message Received.
          </p>
          <Link href="https://youtu.be/P9PsdL68agA">
            {" "}
            <button
              className={
                Ajx.darkmode
                  ? "px-8 py-2 mt-4 mr-8 shadow-none"
                  : "px-8 py-2 mt-4 mr-8"
              }
            >
              demo
            </button>
          </Link>
          <Link href="https://github.com/ajitkumar1264/Annex-socket-io">
            {" "}
            <button
              className={
                Ajx.darkmode
                  ? "px-8 py-2 mt-4 mr-8 shadow-none"
                  : "px-8 py-2 mt-4 mr-8"
              }
            >
              code
            </button>
          </Link>
        </div>

        <div
          className={
            Ajx.darkmode
              ? "col-span-4 md:col-span-1 shadow-sm shadow-amber-400 rounded-xl p-4"
              : "col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4"
          }
        >
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p
                className={
                  Ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> React Js
              </p>
              <p
                className={
                  Ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p
                className={
                  Ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Socket.io
              </p>
              <p
                className={
                  Ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Node js
              </p>
              <p
                className={
                  Ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Express js
              </p>
            </div>
          </div>
        </div>
        <Link href="/" className="md:px-0 px-2">
          <p className="underline cursor-pointer">back</p>
        </Link>
      </div>
    </div>
  );
}

export default Chat;
