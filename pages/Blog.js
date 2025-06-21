import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import annex from "../components/Context";

function Blog() {
  const ajx = useContext(annex);

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
            <h2>Annex Blog Web app</h2>
            <h3 className="py-4">React js /Tailwind / Firebase</h3>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 md:px-0 px-5">
        <div className="col-span-4 ">
          <p>Projects</p>
          <h2>overview</h2>
          <p className="py-4">
            Sign with Google, Add Post and Give like,Show Profile, Contact me,
            Delete Post ,Search Post, Add Tags,Email Verification
          </p>
          <Link href="https://react-chatapp-f669f.firebaseapp.com/">
            {" "}
            <button
              className={
                ajx.darkmode
                  ? "px-8 py-2 mt-4 mr-8 shadow-none"
                  : "px-8 py-2 mt-4 mr-8"
              }
            >
              demo
            </button>
          </Link>
          <Link href="https://github.com/ajitkumar1264/Annex-blog">
            {" "}
            <button
              className={
                ajx.darkmode
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
            ajx.darkmode
              ? "col-span-4 md:col-span-1 shadow-sm shadow-amber-400 rounded-xl p-4"
              : "col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4"
          }
        >
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p
                className={
                  ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> React Js
              </p>
              <p
                className={
                  ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p
                className={
                  ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p
                className={
                  ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Email js
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

export default Blog;
