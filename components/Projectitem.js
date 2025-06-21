import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import annex from "./Context";

function Projectitem({ title, propertyImg, projectURl, tech }) {
  const ajx = useContext(annex);

  return (
    <div>
      <div
        className={
          ajx.darkmode
            ? "relative flex items-center group justify-center h-auto w-full shadow-sm shadow-amber-400 rounded-xl p-4 hover:bg-amber-400"
            : "relative flex items-center group justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        }
      >
        <Image
          className={
            ajx.darkmode
              ? "rounded-xl group-hover:opacity-50 "
              : "rounded-xl group-hover:opacity-20 "
          }
          src={propertyImg}
          alt=""
          width={500}
          height={500}
        />
        <div className=" text-center hidden group-hover:block absolute">
          <h3
            className={
              ajx.darkmode
                ? "text-2xl text-black tracking-wider text-center"
                : "text-2xl text-white tracking-wider text-center"
            }
          >
            {title}
          </h3>
          <p
            className={
              ajx.darkmode
                ? "pb-4 pt-2 text-black text-center"
                : "pb-4 pt-2 text-white text-center"
            }
          >
            {tech}
          </p>
          <Link href={projectURl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projectitem;
