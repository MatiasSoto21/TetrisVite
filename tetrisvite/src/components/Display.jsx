import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = ({ gameOver, text }) => (
  <div
    className={
      gameOver
        ? "text-red-500 text-2xl box-border flex items-center p-[20px] border-4 mb-4 rounded-[20px] border-gray-500 min-h-[30px] w-full bg-black font-[Pixel]"
        : "text-white text-2xl box-border flex items-center p-[20px] border-4 mb-4 rounded-[20px] border-gray-500 min-h-[30px] w-full bg-black font-[Pixel]"
    }
  >
    {text}
  </div>
);

export default Display;
