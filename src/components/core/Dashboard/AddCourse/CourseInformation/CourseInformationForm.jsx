import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../services/operations/courseDetailsAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import RequirementField from "./RequirementField";
import IconBtn from "../../../common/IconBtn";
import { setStep,setCourse } from "../../../../../slices/courseSlice";
import { addCourseDetails,editCourseDetails } from "../../../../../services/operations/courseDetailsAPI";
import { COURSE_STATUS } from "../../../../../utils/constants";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import ChipInput from "./ChipInput";
import Upload from "../Upload";


const CourseInformationForm = ()=>{
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors},
    } = useForm();

    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auth);
    const {course,editCourse} = useSelector((state)=>state.course);
    const [loading,setLoading] = useState(false);
    const [courseCategories,setCourseCategories] = useState([]);

    useEffect(()=>{
        const getCategories = async()=>{
            setLoading(true);
            const categories = await fetchCourseCategories();
            if(categories.length>0){
                setCourseCategories(categories);
            }
            setLoading(false);
        }

        if(editCourse) {
            setValue("courseTitle", course.courseName);
            setValue("courseShortDesc", course.courseDescription);
            setValue("coursePrice", course.price);
            setValue("courseTags", course.tag);
            setValue("courseBenefits", course.whatYouWillLearn);
            setValue("courseCategory", course.category);
            setValue("courseRequirements", course.instructions);
            setValue("courseImage", course.thumbnail);
        }

        getCategories();
    },[]);

    const isFormUpdated = () => {
        const currentValues = getValues();
        if(currentValues.courseTitle !== course.courseName ||
            currentValues.courseShortDesc !== course.courseDescription ||
            currentValues.coursePrice !== course.price ||
            currentValues.courseTitle !== course.courseName ||
            //currentValues.courseTags.toString() !== course.tag.toString() ||
            currentValues.courseBenefits !== course.whatYouWillLearn ||
            currentValues.courseCategory._id !== course.category._id ||
            //currentValues.courseImage !== course.thumbnail ||
            currentValues.courseRequirements.toString() !== course.instructions.toString() )
            return true;
        else
            return false;
    }

    const onSubmit = async(data) => {

        if(editCourse) {
            if(isFormUpdated()) {
                const currentValues = getValues();
            const formData = new FormData();

            formData.append("courseId", course._id);
            if(currentValues.courseTitle !== course.courseName) {
                formData.append("courseName", data.courseTitle);
            }

            if(currentValues.courseShortDesc !== course.courseDescription) {
                formData.append("courseDescription", data.courseShortDesc);
            }

            if(currentValues.coursePrice !== course.price) {
                formData.append("price", data.coursePrice);
            }

            if(currentValues.courseBenefits !== course.whatYouWillLearn) {
                formData.append("whatYouWillLearn", data.courseBenefits);
            }

            if(currentValues.courseCategory._id !== course.category._id) {
                formData.append("category", data.courseCategory);
            }

            if(currentValues.courseRequirements.toString() !== course.instructions.toString()) {
                formData.append("instructions", JSON.stringify(data.courseRequirements));
            }

            setLoading(true);
            const result = await editCourseDetails(formData, token);
            setLoading(false);
            if(result) {
                setStep(2);
                dispatch(setCourse(result));
            }
            } 
            else {
                toast.error("NO Changes made so far");
            }
            console.log("PRINTING FORMDATA", formData);
            console.log("PRINTING result", result);

            return;
        }

        //create a new course
        const formData = new FormData();
        formData.append("courseName", data.courseTitle);
        formData.append("courseDescription", data.courseShortDesc);
        formData.append("price", data.coursePrice);
        formData.append("tag", JSON.stringify(data.courseTags))
        formData.append("whatYouWillLearn", data.courseBenefits);
        formData.append("category", data.courseCategory);
        formData.append("instructions", JSON.stringify(data.courseRequirements));
        formData.append("status", COURSE_STATUS.DRAFT);
        formData.append("thumbnailImage", data.courseImage)

        setLoading(true);
        console.log("BEFORE add course API call");
        console.log("PRINTING FORMDATA", formData);
        const result = await addCourseDetails(formData,token);
        if(result) {
            dispatch(setStep(2));
            dispatch(setCourse(result));
        }
        setLoading(false);
        console.log("PRINTING FORMDATA", formData);
        console.log("PRINTING result", result);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}  className='rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8 text-black'>
            <div className="flex flex-col gap-2"> 
                <label  htmlFor='courseTitle' className="text-white ">Course Title<sup className="text-pink-500">*</sup></label>
                <input
                    id='courseTitle'
                    placeholder='Enter Course Title'
                    {...register("courseTitle", {required:true})}
                    className='w-full bg-richblack-700 rounded-md p-2 text-pure-greys-5'
                />
                {
                    errors.courseTitle && (
                        <span className="text-pure-greys-5">Course Title is Required**</span>
                    )
                }
            </div>

            <div className="flex flex-col gap-2">
                <label  htmlFor='courseShortDesc' className="text-white ">Course Short Description<sup className="text-pink-500">*</sup></label>
                <textarea
                    id='courseShortDesc'
                    placeholder='Enter Description'
                    {...register("courseShortDesc", {required:true})}
                    className='min-h-[140px] w-full  bg-richblack-700 rounded-md p-2 text-pure-greys-5'
                    />
                {
                    errors.courseShortDesc && (<span className="text-pure-greys-5">
                        Course Description is required**
                    </span>)
                }
            </div>
    
            <div className='relative flex flex-col gap-2'>
                <label htmlFor='coursePrice' className="text-white ">Course Price<sup className="text-pink-600">*</sup></label>

                <input
                    id='coursePrice'
                    placeholder='Enter Course Price'
                    {...register("coursePrice", {
                        required:true,
                        valueAsNumber:true
                    })}
                    className='w-full  bg-richblack-700 rounded-md py-2 px-8 text-pure-greys-5'
                    />
                <HiOutlineCurrencyRupee fontSize={24} className='absolute translate-y-[40px] text-richblack-400'/>
            
                {
                    errors.coursePrice && (
                        <span>Course Price is Required**</span>
                    )
                }
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor='courseCategory' className="text-pure-greys-5">Course Category<sup className="text-pink-600">*</sup></label>
                <select
                id='courseCategory'
                defaultValue=""
                {...register("courseCategory", {required:true})}
                className="bg-richblack-700 rounded-md py-2 px-8 text-pure-greys-5"
                >
                    <option value="" disabled>Choose a Category</option>

                    {
                        !loading && courseCategories.map((category, index) => (
                            <option key={index} value={category?._id}>
                                {category?.name}
                            </option>
                        ))
                    }

                </select>
                {errors.courseCategory && (
                    <span>
                        Course Category is Required
                    </span>
                )}
            </div>

            {/* Course Tags */}
            <ChipInput
                label="Tags"
                name="courseTags"
                placeholder="Enter Tags and press Enter"
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
            />
            {/* Course Thumbnail Image */}
            <Upload
                name="courseImage"
                label="Course Thumbnail"
                register={register}
                setValue={setValue}
                errors={errors}
                editData={editCourse ? course?.thumbnail : null}
            />            
            {/* Benifits of course */}
            <div className=" flex flex-col gap-2">
                <label className="text-pure-greys-5">Benefits of the course<sup className="text-pink-600">*</sup></label>
                <textarea
                id='coursebenefits'
                placeholder='Enter Benefits of the course'
                {...register("courseBenefits", {required:true})}
                className='min-h-[130px] w-full rounded-md p-2 text-pure-greys-5 bg-richblack-700'
                />
                {errors.courseBenefits && (
                    <span className="text-pure-greys-5">
                        Benefits of the course are required**
                    </span>
                )}
            </div>

            <RequirementField
            name="courseRequirements"
            label="Requirements/Instructions"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            />

            <div className="flex justify-between">
                {
                    editCourse && (
                        <button
                        onClick={() => dispatch(setStep(2))}
                        className='flex items-center gap-x-2 bg-richblack-300'
                        >
                            Continue Without Saving
                        </button>
                    )
                }
                <div className="flex gap-2 rounded-md bg-yellow-50 p-2 items-center ml-auto">
                    <IconBtn 
                        text={!editCourse ? "Next" : "Save Changes"}
                        />
                    <FaArrowRight/>
                </div>
            </div>

        </form>

    )
}

export default CourseInformationForm