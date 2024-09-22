import React from "react";
import { IButton } from "../types";



const CustomButton = ({title, bgColor, shadowColor, border, textColor, handleSubmit}: IButton) => {
  return (
    <button onClick={handleSubmit} className={`w-[296px] text-center border ${border ? border : "border-[#8A226F]"} ${bgColor ? bgColor : "bg-[#8A226F]"} ${shadowColor ? shadowColor : "shadow-[#8A226F]"} p-[20px] rounded-[90px] text-[14px] tracking-[0.5%] leading-[18.23px] font-medium ${textColor ? textColor : "text-[#FFFFFF]"} hover:cursor-pointer shadow-md active:drop-shadow-[20%]`}>
      {title}
    </button>
  );
};

export default CustomButton;
