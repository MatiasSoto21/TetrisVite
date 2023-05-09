import React from "react";

const StartButton = ({ callback }) => (
  <div
    className="text-white p-[20px] mt-16 min-h-[30px] w-full border-4 border-gray-400 rounded-3xl bg-gray-700 font-[pixel] text-xs md:text-xl lg:text-3xl hover:cursor-pointer hover:scale-[1.03]"
    onClick={callback}
  >
    Start Game
  </div>
);

export default StartButton;
