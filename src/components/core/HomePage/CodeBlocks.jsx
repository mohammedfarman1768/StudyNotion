import React from "react";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codeColor,
}) => {
  // Limit code to 12 lines max
  const MAX_LINES = 12;
  const truncatedCode = codeblock
    .split("\n")
    .slice(0, MAX_LINES)
    .join("\n");

  return (
    <div
      className={`flex ${position} my-20 items-center justify-between gap-28`}
    >
      {/* Left Text Section */}
      <div className="w-[48%] flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300 font-bold">{subheading}</div>

        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Code Section */}
      <div className="h-[264px] overflow-hidden text-[17px] leading-[22px] w-[480px] lg:w-[500px] py-4 border-2 border-transparent shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-richblack-800 via-richblack-900 to-richblack-800 rounded-md">
        <div className="flex">
          {/* Line Numbers 1-12 */}
          <div className="flex flex-col text-center w-[10%] text-richblack-400 font-inter font-bold select-none pl-2">
            {[...Array(12)].map((_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>

          {/* Code Animation */}
          <div
            className={`flex flex-col w-[90%] ${codeColor} font-bold font-mono pr-2`}
          >
            <TypeAnimation
              sequence={[truncatedCode, 5000, ""]}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
                fontSize: "17px",
                lineHeight: "22px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
