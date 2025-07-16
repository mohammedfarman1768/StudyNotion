import React from 'react';
import { Link } from "react-router-dom";  // link is used for client side navigation , it changes url without reloading
// react router dom is used for build a single page with multiple pages functionality
import { FaArrowRight } from "react-icons/fa"; // importing arrow right icon from font awesome library
import { Typewriter } from 'react-simple-typewriter'; // animates text like a typewriter

import CTAButton from '../components/core/HomePage/CTAButton';
import Banner from '../assets/Images/banner.mp4';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import HighlightText from '../components/core/HomePage/HighlightText';
import ExploreMore from "../components/core/HomePage/ExploreMore";
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/core/common/Footer'; 

const Home = () => {
  const htmlCode = `<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1><a href="/">Header</a></h1>
    <nav>
      <a href="one/">One</a>
      <a href="two/">Two</a>
      <a href="three/">Three</a>
    </nav>
    <footer>
      <p>Copyright © 2025</p>
    </footer>
  </body>
</html>`;

  return (
    <div className="text-white">
      {/* Section - 1 */}
      <div className="mt-10 mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between">
        {/* Become an Instructor */} 
        {/* create a button like div */}
        <Link to="/signUp">
          <div className="group mt-16 p-1 rounded-full bg-richblack-800 font-bold text-richblack-200 hover:scale-95 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all w-fit">
            <div className="flex items-center rounded-full px-7 py-[5px] gap-2 group-hover:bg-richblack-900 transition-all">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Main Heading */}
        <div className="text-center text-4xl font-semibold mt-8 w-full">
          Empower Your Future With{" "}
          <span className="text-blue-400 italic">
            <Typewriter
              words={["Coding Skills"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>

        {/* Subheading */}
        <div className="mt-4 w-[80%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto="/signUp">Learn More</CTAButton>
          <CTAButton active={false} linkto="/login">Book a Demo</CTAButton>
        </div>

        {/* Video Section */}
        <div className="mx-3 my-12 shadow-blue-200">
          <video
            className="w-[85%] mx-auto transition-all duration-200 shadow-[14px_-10px_30px_4px_rgba(0,0,0,0.1),_14px_10px_30px_4px_rgba(45,78,255,0.15)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* CodeBlocks Section - 1 */}
        <div className="w-[85%] mx-auto">
          <CodeBlocks
            position="lg:flex-row gap-36"
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighlightText text="coding potential" /> with our online courses
              </div>
            }
            subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            ctabtn1={{ btnText: "Try it yourself", linkto: "/signUp", active: true }}
            ctabtn2={{ btnText: "Learn more", linkto: "/login", active: false }}
            codeblock={htmlCode}
            codeColor="text-gradient"
          />
        </div>

        {/* CodeBlocks Section - 2 */}
        <div className="w-[85%] mx-auto">
          <CodeBlocks
            position="lg:flex-row-reverse gap-36"
            heading={
              <div className="text-4xl font-semibold">
                Start <HighlightText text="learning today" /> with powerful tools
              </div>
            }
            subheading="Practice what you learn with real-world projects and become job-ready with industry-relevant skills and tools."
            ctabtn1={{ btnText: "Start Now", linkto: "/signUp", active: true }}
            ctabtn2={{ btnText: "Explore", linkto: "/login", active: false }}
            codeblock={htmlCode}
            codeColor="text-gradient"
          />
        </div>

        <ExploreMore />
      </div>

      {/* Section - 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[330px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row text-white gap-7">
              <CTAButton active={true} linkto={"/signUp"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog 
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signUp"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-row items-center gap-10 mx-[20px] mb-10 mt-[95px]">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a 
              <HighlightText text={" Job that is in Demand "} />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signUp"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>

          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section - 3 */}
      <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white mb-10">
        <InstructorSection />
        {/* Optional: ReviewSlider */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider /> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
