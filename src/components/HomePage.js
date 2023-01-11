import Navbar from "./Navbar";
//import "./HomePage.css";

//import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <div
        className="bg-[url('/public/assets/home/background-home-mobile.jpg')] md:bg-[url('/public/assets/home/background-home-tablet.jpg')] xl:bg-[url('/public/assets/home/background-home-desktop.jpg')]
       bg-cover bg-no-repeat overflow-auto"
      >
        <Navbar />
        <div className="flex flex-row justify-around items-start h-[100%] sm:h-[100%]  lg:h-[100vh] w-[100%] bg-cover object-cover">
          <div className="flex  md:pt-[50px] flex-col justify-center items-center lg:flex-row md:flex md:flex-col  sm:pt-[10px] sm:flex sm:flex-col sm:justify-center sm:items-center  mt-[100px] ">
            <div className=" w-[450px] text-center sm:text-center sm:flex sm:flex-col sm:justify-center sm:items-center sm:p-[20px]">
              <p className="text-[#979797] font-[BarlowCondensed] h-[34px] text-[18px] font-[400] pl-12">
                SO, YOU WANT TO TRAVEL TO
              </p>
              <h1 className=" text-[#FFFFFF] font-[Bellefair] w-[445px]  text-[45px] md:text-[70px] font-[400]">
                SPACE
              </h1>
              <h3 className="text-[#979797] font-[BarlowCondensed] w-[380px] text-[14px] md:text-[18px] pl-16">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </h3>
            </div>
            <div className="bg-white h-[214px] w-[214px] md:w-[274px] md:h-[274px] rounded-full flex flex-col justify-center items-center sm:mt-[40px] md:ml-[30px]  ">
              <h3 className="text-[#0B0D17] font-[Bellefair] w-[379px] h-[34px] text-[32px] text-center font-[400]  ">
                EXPLORE
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
