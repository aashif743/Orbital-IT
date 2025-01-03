"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../constants";
import { PinContainer } from "./design/Pin";
import Heading from "./Heading";

const RecentProjects = () => {
  return (
    <div className="py-10 pb-20" id="projects">
        <div className="container">
        <Heading title="Recent Projects" />
        </div>
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map((item) => (
              <div
                className="lg:min-h-[30.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}
              >
                <PinContainer title={item.link} href={item.link}>

                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 transition duration-400">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="src/public/bg.png" alt="bgimg" /> 
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-base md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
    </div>
  );
};

export default RecentProjects;