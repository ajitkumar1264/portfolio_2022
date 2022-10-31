import React, { useState,useEffect } from "react";
import Image from "next/image";
import {Zoom, JackInTheBox} from "react-awesome-reveal"

function Skills() {
  const [frontend, setfrontend] = useState(true);
  const [backend, setbackend] = useState(false);
  const [others, setothers] = useState(false);
  useEffect(() => {
   
    frontendshow();

  }, [])
  

  const frontendshow = () => {
    setfrontend(true);
    setbackend(false);
    setothers(false);
  };

  const backendshow = () => {
    setfrontend(false);
    setbackend(true);
    setothers(false);
  };

  const othersshow = () => {
    setfrontend(false);
    setbackend(false);
    setothers(true);
  };

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-wider uppercase text-[#5651e5] md:px-0 px-5">
          skills
        </p>
        <div className="md:flex items-center justify-between mb-10 md:mt-5 mt-0">
          <div>
          <JackInTheBox >
            <h2 className="py-4 md:px-0 px-5">What I can Do</h2>
            </JackInTheBox>
          </div>
          <div className="flex gap-2 justify-between md:px-0 px-5 ">
            <button 
              onClick={() => frontendshow()}
              className=" cursor-pointer text-xm py-2 px-2 hover:border-b-2 border-black"
            >
              frontend
            </button>
            <button
              onClick={() => backendshow()}
              className="  cursor-pointer text-xm py-2 px-2 hover:border-b-2 border-black"
            >
              backend
            </button>
            <button
              onClick={() => othersshow()}
              className=" cursor-pointer text-xm py-2 px-1 hover:border-b-2 border-black"
            >
              others
            </button>
          </div>
        </div>

        {frontend && (
          <div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 md:p-0">

<Zoom>
              <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center ">
                  <div className="m-auto ">
                    <Image
                      src="/html.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>
              </Zoom>

              <Zoom >
              <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/css.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>
              </Zoom>

              <Zoom >
              <div className="p-6  hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/react.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>React js</h3>
                  </div>
                </div>
              </div>
              </Zoom>
              <Zoom >
              <div className="p-6  hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/next.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Next js</h3>
                  </div>
                </div>
              </div>
              </Zoom>
              <Zoom >
              <div className="p-6  hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/redux.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Redux</h3>
                  </div>
                </div>
              </div>
              </Zoom>
<Zoom >
              <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/js.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Java Script</h3>
                  </div>
                </div>
              </div>
              </Zoom>
            </div>
          </div>
        )}

        

        {backend && (     
        <div>
       
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 md:p-0">
          <Zoom >
            <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/node.png"
                    alt="vaghela"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Node js</h3>
                </div>
              </div>
            </div>
        </Zoom>
          <Zoom >
            <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/firebase.png"
                    alt="vaghela"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
        </Zoom>
          <Zoom >
            <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/express.png"
                    alt="vaghela"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Express Js</h3>
                </div>
              </div>
            </div>
        </Zoom>
          <Zoom >
            <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/supabase.png"
                    alt="vaghela"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Supabase</h3>
                </div>
              </div>
            </div>
        </Zoom>

        <Zoom >
            <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/mongo.png"
                    alt="vaghela"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Mongo DB</h3>
                </div>
              </div>
              
            </div>
            </Zoom>
          </div>
          </div>
          )}

       

          {others && (

         
          <div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 md:p-0">
            <Zoom >
              <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/figma.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Figma</h3>
                  </div>
                </div>
              </div>
              </Zoom>
            <Zoom >
              <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/python.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Python</h3>
                  </div>
                </div>
              </div>
              </Zoom>


              <Zoom >
              <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/cpp.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>cpp</h3>
                  </div>
                </div>
              </div>
              </Zoom>



              <Zoom >
              <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/Flutter.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Flutter</h3>
                  </div>
                </div>
              </div>
              </Zoom>

              <Zoom >
              <div className="p-6 hover:bg-blue-400 hover:text-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/git.png"
                      alt="vaghela"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Git</h3>
                  </div>
                </div>
              </div>
              </Zoom>
            </div>
          </div>
          )}
        
      </div>
    </div>
  );
}

export default Skills;
