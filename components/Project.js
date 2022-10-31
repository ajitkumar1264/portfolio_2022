import React,{useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Projectitem from "./Projectitem";
import para from ".././public/1p.jpg";
import para1 from ".././public/2p.png";
import para2 from ".././public/3p.png";
import { JackInTheBox, Zoom } from "react-awesome-reveal";

function Project() {


const [frontendproject, setfrontendproject] = useState(true)
const [backendproject, setbackendproject] = useState(false)


useEffect(() => {
 
frontendprojectshow();

}, [])


const frontendprojectshow=()=>{

  setfrontendproject(true);
  setbackendproject(false);
}

const backendprojectshow=()=>{

setbackendproject(true)
setfrontendproject(false);
}


  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-wider uppercase text-[#5651e5] px-5 md:px-0">
          Projects
        </p>
        <div className="items-center justify-between">
          <div>
          <JackInTheBox>
            <h2 className="py-4 px-5 md:px-0 md:mt-5 mt-0 md:mb-10 mb-5">
              What Ive Built
            </h2>
            </JackInTheBox>
          </div>
        <div className="flex flex-col justify-between items-center mb-10 ">
          <div className="flex gap-5 text-center md:px-0 px-5 ">
            <h3 onClick={()=>frontendprojectshow()} className="cursor-pointer text-xl py-2 px-2 hover:border-b-2 border-black ">
              frontend Project
            </h3>
            <h3 onClick={()=>backendprojectshow()} className=" cursor-pointer text-xl py-2 px-2 hover:border-b-2 border-black ">
              backend Project
            </h3>
           
          </div>
          </div>

        </div>
        

        

       {frontendproject &&
      ( <div className="grid md:grid-cols-2 gap-8 p-5 md:p-0">
      <Zoom >
        <Projectitem
        title="Property Finder"
        propertyImg={para}
        projectURl="/"
      />
      </Zoom>
      <Zoom>
      <Projectitem
        title="Property ajjitkdr"
        propertyImg={para1}
        projectURl="/"
      />
      </Zoom>
      <Zoom>
      <Projectitem
        title="hardik vaghela"
        propertyImg={para1}
        projectURl="/"
      />
      </Zoom>
      <Zoom>
      <Projectitem
        title="ajitkdjf vaghela"
        propertyImg={para1}
        projectURl="/"
      />
      </Zoom>
      </div>
      )
      }  
      
      {
        backendproject && (
          <div className="grid md:grid-cols-2 gap-8 p-5 md:p-0">
          <Zoom>
        <Projectitem
        title="Property Finder"
        propertyImg={para}
        projectURl="/"
      />
      </Zoom>
      <Zoom>
      <Projectitem
        title="Property ajjitkdr"
        propertyImg={para1}
        projectURl="/"
      />
      </Zoom>
      </div>
          
        )
      }




        
      </div>
    </div>
  );
}

export default Project;
