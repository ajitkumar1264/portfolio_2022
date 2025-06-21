import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import annex from "../components/Context";

function ETH() {
  const ajx = useContext(annex);

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]  z-1 overflow-hidden">
          <Image
            src="/project/supabase.png"
            className=" flex absolute z-1 w-full top-0   object-cover blur-sm "
            height={100}
            width={1}
            alt=""
          />
          <div className="absolute md:top-[60%] top-[50%] md:left-40 left-10  max-w-[1240px] w-full text-lime-200">
            <h2>ETH Transfer Web app</h2>
            <h3 className="py-4">HTML / solidity / Ganache</h3>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 md:px-0 px-5">
        <div className="col-span-4 ">
          <p>Projects</p>
          <h2>overview</h2>
          <p className="py-4">
            Ether Transfer Web App is a decentralized application (dApp) built
            using HTML, Solidity, and Ganache for testing smart contracts. It
            allows users to securely transfer Ether from one wallet to another.
            The app integrates MetaMask for wallet connection and transaction
            authorization, providing a seamless and user-friendly interface to
            interact with the Ethereum blockchain in a local development
            environment.
          </p>
          <Link href="https://www.youtube.com/watch?v=WCd_JBSEZuc&t=3s">
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
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p
                className={
                  ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Solidity
              </p>
              <p
                className={
                  ajx.darkmode
                    ? "text-white py-2 items-center flex gap-3"
                    : "text-gray-600 py-2 items-center flex gap-3"
                }
              >
                {" "}
                <RiRadioButtonFill className="pr-1" /> Ganache
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

export default ETH;
