function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-8xl font-neue tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh] ">
            <div className="card w-full h-full rounded-xl bg-no-repeat bg-cover bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')] overflow-hidden ">
              <h1 className="absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none font-founder">
                {"FYDE".split("").map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h1>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl bg-no-repeat bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')] overflow-hidden ">
              <h1 className="absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none font-founder">
                {"VISE".split("").map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
