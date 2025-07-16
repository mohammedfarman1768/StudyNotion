import React from "react";
import Instrcutor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = ()=>{
    return (
        <div className="mt-10">

            <div className="flex flex-row gap-20 items-center">
                <div className="w-[50%]">
                    <div className="relative w-[531px] h-[472px] bg-pure-greys-5 translate-x-[6%] translate-y-[6%]">
                        <img src={Instrcutor} alt="Instructor Image" className="absolute shadow-white h-fit translate-x-[-5%] translate-y-[-5%]" />
                    </div>


                </div>
                <div className="w-[50%] flex flex-col gap-10" >
                    <div className="text-4xl font-semibold w-[50%]">
                        Become an 
                        <HighlightText text={" Instructor "}/>
                    </div>
                    <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
                        Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                     </p>
                     <div className="w-fit">
                        <CTAButton active={true} linkto={"/signUp"}>
                            <div className="flex flex-row gap-2 items-center">
                                Start Learning Today 
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                     </div>


                </div>
            </div>
        </div>
    );
}

export default InstructorSection;