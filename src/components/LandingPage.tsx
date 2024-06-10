import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="h-screen w-full bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker " key={index}>
              <div className="flex w-fit items-center pb-[1.2vh] overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] mt-[1.8vh] mr-3 bg-red-500 h-[5.7vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-no-repeat rounded-md "
                  ></motion.div>
                )}
                <h1 className=" font-founder leading-[7vw] uppercase text-[9vw] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 font-neue mt-32 flex justify-between items-center px-20 py-5">
        {[
          "For public and private compaines",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              className="text-md font-light tracking-tight leading-none"
              key={index}
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            Start The Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className=" rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
