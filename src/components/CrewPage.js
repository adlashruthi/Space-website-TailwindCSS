import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";

const data = [
  {
    id: 1,
    img: `/assets/crew/image-douglas-hurley.png`,
    heading: ` Commander`,
    title: `Douglas Hurley`,
    description: ` Douglas Gerald Hurley is an American engineer, former Marine Corps
    pilot and former NASA astronaut. He launched into space for the third
    time as commander of Crew Dragon Demo-2.`,
  },
  {
    id: 2,
    img: `/assets/crew/image-mark-shuttleworth.png`,
    heading: `  Mission Specialist`,
    title: `MARK SHUTTLEWORTH`,
    description: `  Mark Richard Shuttleworth is the founder and CEO of Canonical, the
    company behind the Linux-based Ubuntu operating system. Shuttleworth
    became the first South African to travel to space as a space tourist.`,
  },
  {
    id: 3,
    img: `/assets/crew/image-victor-glover.png`,
    heading: `PILOT`,
    title: ` Victor Glover`,
    description: `  Pilot on the first operational flight of the SpaceX Crew Dragon to the
    International Space Station. Glover is a commander in the U.S. Navy
    where he pilots an F/A-18.He was a crew member of Expedition 64, and
    served as a station systems flight engineer.`,
  },
  {
    id: 4,
    img: `/assets/crew/image-anousheh-ansari.png`,
    heading: ` Flight Engineer`,
    title: ` Anousheh Ansari`,
    description: ` Anousheh Ansari is an Iranian American engineer and co-founder of
    Prodea Systems. Ansari was the fourth self-funded space tourist, the
    first self-funded woman to fly to the ISS, and the first Iranian in
    space.`,
  },
];
const Card = (props) => {
  const { img, heading, title, description } = props;

  return (
    <div className="flex flex-col md:flex-row md:justify-around md:items-center p-[30px] sm:m-[20px]">
      <div className="flex flex-col justify-center items-center order-2 md:order-1 xl:order-1">
        <h5 className="font-[BarlowCondensed] text-[16px] md:text-[25px] mb-[10px] text-[#979797] font-[400]  ">
          {heading}
        </h5>
        <h3 className=" text-center text-[#FFFFFF] font-[Bellefair] text-[22px]  mb-2 md:text-[32px] font-[400]">
          {title}
        </h3>
        <h3 className="w-[274px] md:w-[380px] font-[Barlow] mb-2 text-[12px] md:text-[18px] text-[#979797] pl-2 pr-2">
          {description}
        </h3>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2 mb-[40px] xl:order-1 ">
        <img src={img} alt="img" className="w-100% h-[240px] sm:h-[320px]" />
      </div>
    </div>
  );
};

const Crew = () => {
  const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div
      className="bg-[url('/public/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/public/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/public/assets/crew/background-crew-desktop.jpg')]
     h-full w-screen bg-cover overflow-auto"
    >
      <Navbar />
      <div className=" md:pt-[30px] lg:pt-[30px] flex justify-start items-start w-[100%]">
        <h1 className="text-[#FFFFFF] h-[34px] w-[322px] md:pt-[80px] pt-[40px] uppercase text-[20px] font-[Barlow Condensed] mx-[15.5px] pb-8">
          <span className="text-[#FFFFFF] mr-4  font-[BarlowCondensed] opacity-25 font-bold">
            02
          </span>{" "}
          Meet your crew
        </h1>
      </div>

      <div className=" m-6 w-[90%] z-30 ">
        <Slider {...settings}>
          {data?.map((item, index) => (
            <Card
              key={index}
              img={item?.img}
              heading={item?.heading}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Crew;
