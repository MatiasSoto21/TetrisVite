import React from "react";

const StartButton = ({ callback }) => (
  <div
    className="text-white p-[20px] mt-2 md:mt-16 lg:mt-16 min-h-[30px] w-36 md:w-full lg:w-full border-4 border-gray-400 rounded-3xl bg-gray-700 font-[pixel] text-xs md:text-xl lg:text-3xl hover:cursor-pointer hover:scale-[1.03]"
    onClick={callback}
  >
    Start Game
  </div>
);

export default StartButton;
