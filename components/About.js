import React from "react";
import Link from "next/link"
import Image from "next/image"
import {Zoom,Roll,JackInTheBox, Flip, Bounce} from "react-awesome-reveal"
function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-wider text-[#5651e5] px-4 md:px-0 ">About</p>
          <JackInTheBox  >
                    <h2 className="py-4 px-4 md:px-0 md:mt-5 mt-0">Who I Am</h2>
            </JackInTheBox>

          <p className="py-2 text-gray-600 md:px-0 px-4"> I am backend Developer</p>
          <p className="py-2 text-gray-600  text-justify md:text-start md:p-0 p-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            tenetur nesciunt repellendus sapiente, blanditiis quas, cum,
            recusandae autem minus eveniet repellat commodi. Similique veniam
            vel repellendus eveniet quis. Nulla aspernatur ut velit rem quis
            eligendi nam, quod maxime error illum libero dolorum iure esse
            optio!
          </p>
          <p className="py-2 text-gray-600  text-justify md:text-start md:p-0 p-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            commodi veniam consequatur sed inventore architecto ea soluta,
            explicabo ipsam maiores in nihil eos dolorum possimus officia ut
            earum facilis optio accusantium? Reiciendis ullam, ipsum quae sit
            nemo aliquam temporibus labore incidunt explicabo rerum!
            Dignissimos, libero.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer mt-5 md:px-0 px-5">
         
          <button className="px-4 py-2 "> 
         <Bounce delay={700}>
                   <Link href="/">Checkout some of my projects</Link>
                   </Bounce>

         
          </button>
          
          </p>
        </div>
        <Zoom delay={100}>
        <div className=" w-64 h-auto m-auto shadow-xl mt-20 md:mt-0 shadow-gray-400 p-2 rounded-xl flex items-center  justify-center hover:scale-105 ease-in duration-500">
        <Image src="/Aj_1.svg" className="rounded-2xl" alt="no image" width={200} height={200}/>
        </div>
        </Zoom>

      </div>
    </div>
  );
}

export default About;
