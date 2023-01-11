import { useState } from "react";
import Navbar from "./Navbar";
//import Navbar from "../Navbar";
const data = [
  {
    id: 1,
    description: ` THE TERMINOLOGY`,
    title: ` LAUNCH VEHICLE`,
    description1: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used
    to carry a payload from Earth's surface to space, usually to Earth
    orbit or beyond. Our WEB-X carrier rocket is the most powerful in
    operation. Standing 150 metres tall, it's quite an awe-inspiring sight
    on the launch pad!`,
    img: `/assets/technology/image-launch-vehicle-landscape.jpg`,
  },
  {
    id: 2,
    description: `THE TERMINOLOGY`,
    title: `  SPACEPORT`,
    description1: `A spaceport or cosmodrome is a site for launching (or receiving)
    spacecraft, by analogy to the seaport for ships or airport for
    aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
    situated to take advantage of the Earth’s rotation for launch.`,
    img: `/assets/technology/image-spaceport-landscape.jpg`,
  },
  {
    id: 3,
    description: ` THE TERMINOLOGY`,
    title: `  SPACE CAPSULE`,
    description1: `A space capsule is an often-crewed spacecraft that uses a blunt-body
    reentry capsule to reenter the Earth's atmosphere without wings. Our
    capsule is where you'll spend your time during the flight. It includes
    a space gym, cinema, and plenty of other activities to keep you
    entertained.`,
    img: `/assets/technology/image-space-capsule-landscape.jpg`,
  },
];

const Card = (props) => {
  const { description, title, description1, img } = props;

  return (
    <div className=" p-7 flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row   lg:justify-between lg:items-center  ">
      <div className="m-[10px] mr-[20px] order-2 md:order-2   flex flex-col  justify-center items-center lg:order-1">
        <h3 className=" font-[BarlowCondensed] text-[16px] mb-[10px] text-[#979797] font-[400]  ">
          {description}
        </h3>
        <h1 className=" font-[BarlowCondensed] text-[16px] md:text-[24px] mb-[10px] text-white font-[400]">
          {title}
        </h1>
        <h3 className="w-[324px]  font-[Barlow] mb-2 text-[14px] md:text-[16px] text-[#979797] pl-2 pr-2">
          {description1}
        </h3>
      </div>
      <div className="order-1 md-6 lg:order-2 md:mb-6 md:ml-[40px] flex flex-row-reverse">
        <img
          src={img}
          alt="tech"
          className="object-center  w-[100%] h-[150px]  md:mr-[20px] 
             md:w-[380px] md:h-[320px] md:object-cover"
        />
      </div>
    </div>
  );
};

const TechnologyPage = () => {
  const [index, setIndex] = useState(1);
  const myArray = [
    {
      id: 1,
      title: `LAUNCH VEHICLE`,
    },
    {
      id: 2,
      title: `SPACEPORT`,
    },
    {
      id: 3,
      title: ` SPACE CAPSULE`,
    },
  ];

  return (
    <>
      <div
        className="bg-[url('/public/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/public/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/public/assets/technology/background-technology-desktop.jpg')]
       h-screen w-screen bg-cover overflow-auto"
      >
        <Navbar />
        <div className=" md:pt-[90px] lg:pt-[90px] md:w-[90%]  flex flex-col justify-center  ">
          <h3 className="text-[#FFFFFF] h-[34px] w-[322px] pt-[50px] uppercase text-[20px] font-[Barlow Condensed] mx-[15.5px] pb-3 pl-6">
            <span className="text-[#FFFFFF] mr-4  font-[BarlowCondensed] opacity-[25%] font-bold">
              03
            </span>
            SPACE LAUNCH 101
          </h3>

          <div className="border-solid flex flex-col-reverse justify-around  text-center mr-[20px] p-3 w-[98%] md:flex md:flex-row md:justify-around md:items-center ">
            <div className="p-3">
              <ul className="border-solid box-border flex justify-around items-center w-[95%] md:flex md:flex-col md:justify-center md:items-center md:h-[390px] md:ml-16">
                {myArray.map((i) => (
                  <li
                    onClick={() => setIndex(i?.id)}
                    className={`text-[32px] font-[Bellefair] font-[400] w-[70px] h-[70px] rounded-full border-solid border-2 m-[5px] md:mb-[10px] text-white border-slate-400 flex justify-center items-center ${
                      index === i?.id ? "bg-white text-black" : ""
                    } `}
                  >
                    {i?.id}
                  </li>
                ))}
              </ul>
            </div>
            <div className="m-[10px] p-[10px]">
              {data?.map((i) => (
                <>
                  {i?.id === index ? (
                    <Card
                      description={i?.description}
                      title={i?.title}
                      description1={i?.description1}
                      img={i?.img}
                    />
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TechnologyPage;
