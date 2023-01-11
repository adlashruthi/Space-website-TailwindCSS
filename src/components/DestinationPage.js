import { useState } from "react";
//import { mockComponent } from "react-dom/test-utils";
// import "./DestinationPage.css";
import Navbar from "./Navbar";

const data = [
  {
    id: 1,
    img: `/assets/destination/image-moon.png`,
    title: `MOON`,
    description: `   See our planet as you’ve never seen it before. A perfect relaxing trip
    away to help regain perspective and come back refreshed. While you’re
    there, take in some history by visiting the Luna 2 and Apollo 11
    landing sites.`,
    distance: `384,400 km`,
    time: `3 days`,
  },
  {
    id: 2,
    img: `/assets/destination/image-mars.png`,
    title: `Mars`,
    description: ` Don't forget to pack your hiking boots.You'll need them to tackle
    Dlympus Mons,the tallest planetry mountain in our solar system.It's
    two and half times the size of Everest!.`,
    distance: ` 225 Mll KM`,
    time: `9 Months`,
  },
  {
    id: 3,
    img: `/assets/destination/image-europa.png`,
    title: ` Europa`,
    description: `The smallest of the four Galilean moons orbiting Jupiter,Europa is a
    winter lover's dream. With an icy surface, it's perfect for bit of ice
    skating,curling,hockey or simple relaxation innyour snug wintery
    cabin.`,
    distance: ` 628 MIL KM`,
    time: `3 YEARS`,
  },
  {
    id: 4,
    img: `/assets/destination/image-titan.png`,
    title: `Titan`,
    description: ` The only moon known to have a dense atmosphere other than Earth, Titan
    is a home away from home (just a few hundred degrees colder!).As a
    bonus you get striking views of the Rings of Saturn.`,
    distance: `1.6 BIL. km`,
    time: `7 years`,
  },
];

const Card = (props) => {
  const { img, title, description, distance, time } = props;
  return (
    <div className="flex flex-col sm:flex md:flex-row sm:items-center sm:flex-col sm:justify-center md:flex justify-around items-center h-[100%] sm:h-[100%]  lg:h-[100vh] w-[100%] bg-cover p-3 object-cover ">
      <img
        className="h-[280px] w-[280px] md:w-[355px] md:h-[353.35px] p-3 xl:mr-8 sm:ml-[20px]"
        src={img}
        alt="moon"
      />
      <div className="p-[10px] m-6 text-center">
        <h1 className="w-[400px] font-[Bellefair] font-[400] text-[45px] md:text-[70px] text-[white] text-center mb-1">
          {title}
        </h1>

        <h3 className="w-[374px] md:w-[398px] font-[Barlow] mb-1 text-[16px] md:text-[19px] text-[#979797] pl-8 pr-6">
          {description}
        </h3>
        <hr />
        <div className=" m-3 flex justify-between py-3  ">
          <div className="mb-[1px]">
            <h1 className="text-[#979797] font-[Bellefair] text-[14px]  h-[15px] mb-1 pl-8">
              AVG. DISTANCE
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[24px] uppercase pl-8">
              {distance}
            </h3>
          </div>
          <div className="">
            <h1 className="text-[#979797] font-[Bellefair] uppercase text-[14px]  h-[15px] mb-1 pr-8">
              Est. travel time
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[24px] uppercase pr-4">
              {time}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const DestinationPage = () => {
  const [index, setIndex] = useState(1);
  const myArray = [
    {
      id: 1,
      title: `Moon`,
    },
    {
      id: 2,
      title: `Mars`,
    },
    {
      id: 3,
      title: "Europa",
    },
    {
      id: 4,
      title: `Titan`,
    },
  ];

  return (
    <div className="bg-[url('/public/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/public/assets/destination/background-destination-tablet.jpg')] xl:bg-[url('/public/assets/destination/background-destination-desktop.jpg')] bg-cover bg-no-repeat overflow-auto">
      <Navbar />
      <h3 className="text-[#FFFFFF] h-[34px] w-[322px] md:pt-[80px] pt-[30px] uppercase text-[20px] font-[Barlow Condensed] mx-[15.5px] pb-8">
        <span className="text-[#979797] mr-4  font-[BarlowCondensed]  font-bold">
          01
        </span>{" "}
        Pick your destination
      </h3>
      <div className="flex flex-col justify-center items-center w-90%">
        <nav className="h-[1px] w-[285.5px] mx-[80px] my-[2px]">
          <ul className="flex justify-center items-center text-[#D0D6F9] space-x-4">
            {myArray.map((i) => (
              <li
                className={`mx-1  ${
                  index === i?.id ? "border-b-4 border-white" : ""
                }`}
                onClick={() => setIndex(i?.id)}
              >
                {i?.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-3">
        {data?.map((i) => (
          <>
            {i?.id === index ? (
              <Card
                img={i?.img}
                title={i?.title}
                description={i?.description}
                distance={i?.distance}
                time={i?.time}
              />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};
export default DestinationPage;
