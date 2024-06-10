import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index: number) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index: number) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 bg-[#F1F1F1] text-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-8xl font-neue tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => {
              handleHover(0);
            }}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <div className="w-full h-full bg-center bg-no-repeat bg-cover bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')]"></div>

            <h1 className="absolute flex left-full text-[#CDEA68] -translate-x-1/2 top-1/2 overflow-hidden -translate-y-1/2 z-[9] text-8xl leading-none font-founder">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                  className=" inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          <motion.div
            onHoverStart={() => {
              handleHover(1);
            }}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl  overflow-hidden ">
              <div className="w-full h-full bg-center bg-no-repeat bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')]"></div>

              <h1 className="absolute flex right-full text-[#CDEA68] overflow-hidden translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] text-8xl leading-none font-founder">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                    className=" inline-block "
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
