import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdPlayLesson } from "react-icons/md";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData.heading;

  return (
    <div
      className={`w-[370px] cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-white shadow-[12px_12px_0px_0px_rgba(255,193,7,0.85)] border-b-[4px] border-yellow-50"
          : "bg-richblack-800"
      }`}
      onClick={() => setCurrentCard(cardData.heading)}
    >
      <div className="flex flex-col px-6 py-6 h-full">
        <h2 className={`text-xl font-bold ${isActive ? "text-richblack-900" : "text-white"}`}>
          {cardData.heading}
        </h2>
        <p className="text-richblack-400 mt-3">{cardData.description}</p>

        <div className="border-b border-dashed border-richblack-400 my-6 w-full"></div>

        <div className="flex flex-row justify-between items-center mt-auto">
          <div className="flex flex-row gap-2 items-center text-richblue-200">
            <FaUserGroup />
            <span>{cardData.level}</span>
          </div>
          <div className="flex flex-row gap-2 items-center text-richblue-200">
            <MdPlayLesson />
            <span>{cardData.lessionNumber} Lessons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
