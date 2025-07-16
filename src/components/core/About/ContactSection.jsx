import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactSection = ()=>{
    return (
        <div className="w-[40%] mx-auto mt-10">
            <h1 className="text-center text-3xl font-semibold mb-3">Get in Touch</h1>
            <p className="text-center text-richblack-300 text-base">
                We'd would to hear from you. Please fill this form
            </p>
            <div>
                <ContactUsForm/>
            </div>
        </div>
    )
}
export default ContactSection