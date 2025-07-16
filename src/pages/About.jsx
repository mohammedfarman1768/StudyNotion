import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/About/Quote";
import FoundingImage from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/About/StatsComponent";
import LearningGrid from "../components/core/About/LearningGrid";
import ContactSection from "../components/core/About/ContactSection";
import Footer from "../components/core/common/Footer";

const About = ()=>{
    return (
        <div className=" text-white">
            {/* section -1 */}
            <div className="w-full bg-richblack-700 h-[450px] mb-32">
                <section className="mt-20 flex flex-col w-[90%]  absolute">
                    <div className="flex flex-col w-full">
                        <div className="w-[60%] mx-auto flex flex-col items-center jsutify-center translate-x-[70px]">
                        <header className="text-4xl font-semibold text-center">
                            Driving innovation in online Education for a 
                            <HighlightText text={" Brighter Future"}/>
                        </header>
                            <p className="text-richblack-400 font-medium mb-10 text-center">Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                        </div>
                        <div className="flex gap-6 absolute lg:translate-y-[170px] lg:translate-x-[160px] lg:h-[270px] ">
                            <img src={BannerImage1}/>
                            <img src={BannerImage2}/>
                            <img src={BannerImage3}/>
                        </div>
                    </div>
                </section>
            </div>



            {/* Section -2 */}
            <section className="w-11/12 max-w-maxContent mx-auto ">
                <div>
                    <Quote/>
                </div>
            </section>

            {/* Section -3 */}
            <section className="w-11/12 max-w-maxContent mx-auto mt-36">
                    {/* Founding story wala div */}
                    <div className="flex justify-between ">
                        {/* Founding story left box */}
                        <div className="w-[45%]">
                            <h1 className="color3 text-4xl font-semibold mb-10">Our Founding Story</h1>
                            <p className="text-richblack-300 mb-10">Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                            <p className="text-richblack-300">As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                        </div> 
                        {/* Founding story right box */}
                        <div>
                            <img src={FoundingImage}  />
                        </div>
                    </div>
           

    
                    {/* Vision and mission wala div */}
                    <div className="flex justify-between gap-72 mt-32">
                        {/* left box */}
                        <div classname="w-[1200px]">
                            <h1 className="text-4xl font-semibold mb-10 color1">Our Vision</h1>
                            <p className="text-richblack-300 mb-10">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                        </div>

                        {/* right box */}
                        <div className="w-full">
                            <h1 className="text-4xl font-semibold mb-10 color4">
                                Our Mission
                            </h1>
                            <p className="text-richblack-300 mb-10">Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                        </div>

                    </div>
            </section>

            {/* Section -4 */}
            <StatsComponent/>

            {/* Section-5 */}
            <section className="flex flex-col items-center justify-between mb-[140px]">
                <LearningGrid/>
                <ContactSection/>
            </section>

            <section className="text-center text-4xl font-semibold">
                Review from other Learners
            </section>

            <Footer/>
        </div>
    )
}

export default About