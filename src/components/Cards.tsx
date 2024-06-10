import { FaRegCopyright } from "react-icons/fa";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-2 rounded-full border-2 flex justify-center items-center gap-[2px]">
            <FaRegCopyright />
            2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] flex gap-5 w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-2 rounded-full border-2 flex justify-center items-center gap-[2px]">
            <FaRegCopyright />
            2019-2022
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-2 rounded-full border-2 flex justify-center items-center gap-[2px]">
            <FaRegCopyright />
            2019-2022
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
