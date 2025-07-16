import React from "react";
import { IoIosChatboxes } from "react-icons/io";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import ContactUsForm from "../components/ContactPage/ContactUsForm";
import Footer from "../components/core/common/Footer";
const Contact = ()=>{
    return (
        <div>

            <div className="mt-[150px] flex w-11/12 max-w-maxContent mx-auto gap-5 justify-between">
                {/* left section */}
                <div className="flex flex-col gap-10 bg-richblack-800 py-8 px-4 rounded-md h-fit w-[35%]">
                    <div className="flex flex-col">
                        <h1 className="text-pure-greys-5 text-xl flex items-center font-semibold">
                            <IoIosChatboxes className="text-richblack-500"/>
                            Chat with us
                        </h1>
                        <p className="text-richblack-500 text-base">Our friendly team is here to help. info@studynotion.com</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-pure-greys-5 text-xl flex items-center font-semibold">
                            <HiGlobeEuropeAfrica className="text-richblack-500"/>
                            Visit Us
                        </h1>
                        <p className="text-richblack-500 text-base">Come and say hello at our office HQ.
                            Akshay Nagar 1st Block 1st Cross,Rammurthy Nagar, Banglore-560016
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-pure-greys-5 text-xl flex items-center font-semibold">
                            <FaPhoneAlt className="text-richblack-500"/>
                            Call Us
                        </h1>
                        <p className="text-richblack-500 text-base">Mon-Fri Form 8am to 5pm
                            +123 456 7869
                        </p>
                    </div>
                </div>

                {/* right section */}
                <div className="border border-pure-greys-200 rounded-md py-5 px-4 w-[60%] mb-5">
                    <div className="text-center">
                        <h1 className="text-pure-greys-5 text-4xl font-semibold">
                            Got a Idea? We've got skills. Let's team up
                        </h1>
                        <p className="text-richblack-400">Tell us more about yourself and what you've got in your mind</p>
                    </div>
                    <ContactUsForm/>
                </div>
            </div>

            {/* <section className="text-center text-4xl font-semibold text-pure-greys-5">
            Review from other Learners
            </section> */}

            <Footer/>
        </div>
    )
}

export default Contact