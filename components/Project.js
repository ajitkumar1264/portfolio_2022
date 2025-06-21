import { useEffect, useState } from "react";
import blog from ".././public/project/blog.png";
import chat from ".././public/project/chat.png";
import ETH from ".././public/project/ETH.png";
import Imgc from ".././public/project/imgc.png";
import stp from ".././public/project/stpp.png";
import Projectitem from "./Projectitem";

import { JackInTheBox, Zoom } from "react-awesome-reveal";

function Project() {
  const [frontendproject, setfrontendproject] = useState(true);
  const [backendproject, setbackendproject] = useState(false);

  useEffect(() => {
    frontendprojectshow();
  }, []);

  const frontendprojectshow = () => {
    setfrontendproject(true);
    setbackendproject(false);
  };

  const backendprojectshow = () => {
    setbackendproject(true);
    setfrontendproject(false);
  };

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
                What I&apos;ve Built
              </h2>
            </JackInTheBox>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-5 md:p-0">
          <Zoom>
            <Projectitem
              title="Annex Chat Web App"
              propertyImg={chat}
              tech="Socket.io"
              projectURl="/Chat"
            />
          </Zoom>

          <Zoom>
            <Projectitem
              title="Student-Placement-cell"
              propertyImg={stp}
              tech="MERN"
              projectURl="/Crud"
            />
          </Zoom>

          <Zoom>
            <Projectitem
              title="Annex Blog"
              propertyImg={blog}
              tech="Firebase"
              projectURl="/Blog"
            />
          </Zoom>
          <Zoom>
            <Projectitem
              title="ETH Transfer"
              propertyImg={ETH}
              tech="blockChain"
              projectURl="/ETH"
            />
          </Zoom>
          <Zoom>
            <Projectitem
              title="ImgCompressor"
              propertyImg={Imgc}
              tech="chrome Extension"
              projectURl="/ETH"
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Project;
