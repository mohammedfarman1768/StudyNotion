import React from "react";
import CourseTable from "./InstructorCourses/CourseTable";
import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import IconBtn from "../common/IconBtn";


export default function MyCourses() {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])
  
    useEffect(() => {
      const fetchCourses = async () => {
        const result = await fetchInstructorCourses(token)
        if (result) {
          setCourses(result)
        }
      }
      fetchCourses()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    return (
      <div className="w-11/12 flex flex-col mx-auto translate-x-[30px]">
        <div className="mb-14 flex items-center justify-between">
          <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
          <IconBtn
            text="Add Course"
            onclick={() => navigate("/dashboard/add-course")}
          >
            <VscAdd />
          </IconBtn>
        </div>
        {courses && <CourseTable courses={courses} setCourses={setCourses} />}
      </div>
    )
  }