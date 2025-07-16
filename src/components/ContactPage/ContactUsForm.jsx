import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import  { countryCode } from "../../data/countrycode";
import {countryCode} from "../../data/countrycode";

const ContactUsForm = ()=>{
    const [loading,setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors,isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async(data)=>{
        console.log("Logging Data :",data);
        // console.log(countryCode);
        try{
            setLoading(true);
            // we have not created the conatact us api yet so trying it with the mock data
            const response = {status:"Ok"};
            console.log("Logging response:",response);
            setLoading(false);
        }
        catch(error){
            console.log("Error Message",error.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneNo:""
            })
        }
    },[reset,isSubmitSuccessful]);
    return (
        <form onSubmit={handleSubmit(submitContactForm)}>
            <div className="flex flex-col gap-5 text-pure-greys-5 w-[65%] items-center mx-auto mt-5">

                <div className="flex gap-3 lg:w-[130%]">
                    {/* firstName */}
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="firstname" className="text-white">First Name</label>
                        <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter first name"
                        className="bg-richblack-600 p-2 rounded-md"
                        {...register("firstname",{required:true})}
                        />
                        {
                            errors.firstname && (
                                <span>
                                    Please enter your First Name
                                </span>
                            )
                        }
                    </div>
                    {/* lastname */}
                    <div className="flex flex-col w-[50%]">
                        <label htmlFor="lastname">Last Name</label>
                        <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter last name"
                        className="bg-richblack-600 py-2 px-5 rounded-md"
                        {...register("lastname")}
                        />
                    </div>

                </div>

                {/* email */}
                <div className="flex flex-col lg:w-[130%]">
                        <label htmlFor="email">Email Address</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your Email Address"
                        className="bg-richblack-600 p-2 rounded-md"
                        {...register("email",{required:true})}
                        />
                        {
                            errors.email && (
                                <span>
                                    Please enter your email address
                                </span>
                            )
                        }
                </div>

                {/* Phone No */}
                <div className='flex flex-col lg:w-[130%]'>

                    <label htmlFor='phonenumber'>Phone Number</label>
                    {/* dropdown */}

                    <div className='flex flex-row gap-3'>
                    
                            <select
                                name='dropdown'
                                id="dropdown"
                                className='bg-richblack-600  text-pure-greys-5 rounded-md p-2 w-[15%]'
                                {...register("countrycode", {required:true})}
                        
                            >
                                {
                                    countryCode.map( (element , index) => {
                                        return (
                                            <option key={index} value={`${element.code} - ${element.country}`}>
                                                {element.code} - {element.country}
                                            </option>
                                        )
                                    } )
                                }
                            </select>

                            <input 
                            className="w-[85%] rounded-md bg-richblack-600 p-2"
                            type="number"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="012345789"
                            
                            {...register("phoneNo",
                                {required:{value:true,message:"Please enter your phone number"},
                                maxLength:{value:10,message:"enter a valid Number"},
                                minLength:{value:8,message:"Enter a valid Number"}}
                            )}
                            />
                    </div>
                    {
                        errors.phoneNo && 
                        (
                            <span className="text-white">
                                {errors.phoneNo.message}
                            </span>
                        )
                    }

                </div>
                {/* message */}
                <div className="flex flex-col lg:w-[130%]">
                        <label htmlFor="message">Message</label>
                        <textarea 
                        name="message" 
                        id="message"
                        cols="30"
                        rows="7"
                        placeholder="Enter your message"
                        className="bg-richblack-600 p-2 rounded-md"
                        {...register("message",{required:true})}
                        />
                        {
                            errors.message && (
                                <span>
                                    Please enter your message
                                </span>
                            )
                        }
                </div>

                <button type="submit"
                className='rounded-md bg-yellow-50 text-center px-6 text-[16px] font-bold text-black lg:w-[130%] py-2'>
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactUsForm