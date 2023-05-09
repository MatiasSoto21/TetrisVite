import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = ({ gameOver, text }) => (
  <div
    className={
      gameOver
        ? "text-red-500 text-xs md:text-xl lg:text-2xl box-border flex items-center p-[20px] border-4 mb-4 rounded-[20px] border-gray-500 lg:min-h-[30px] w-32 md:w-full lg:w-full bg-black font-[Pixel]"
        : "text-white text-xs md:text-xl lg:text-2xl box-border flex items-center p-[20px] border-4 mb-4 rounded-[20px] border-gray-500 lg:min-h-[30px] w-32 md:w-full lg:w-full bg-black font-[Pixel]"
    }
  >
    {text}
  </div>
);

export default Display;
