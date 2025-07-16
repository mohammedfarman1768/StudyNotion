import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changePassword } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../common/IconBtn"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const UpdatePassword = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleToggle = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changePassword(token, formData))
  }

  return (
    <div className="rounded-md border border-richblack-700 bg-richblack-800 p-6">
      <h2 className="mb-5 text-lg font-semibold text-richblack-5">Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        {/* Current Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="oldPassword" className="text-sm text-richblack-100">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showPassword.old ? "text" : "password"}
              name="oldPassword"
              id="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              placeholder="Enter Current Password"
              className="w-full rounded-lg bg-richblack-700 p-3 pr-10 text-white placeholder:text-richblack-400"
            />
            <span
              onClick={() => handleToggle("old")}
              className="absolute right-3 top-3.5 cursor-pointer text-xl text-richblack-200"
            >
              {showPassword.old ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword" className="text-sm text-richblack-100">
            New Password
          </label>
          <div className="relative">
            <input
              type={showPassword.new ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter New Password"
              className="w-full rounded-lg bg-richblack-700 p-3 pr-10 text-white placeholder:text-richblack-400"
            />
            <span
              onClick={() => handleToggle("new")}
              className="absolute right-3 top-3.5 cursor-pointer text-xl text-richblack-200"
            >
              {showPassword.new ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-richblack-100"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPassword.confirm ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm New Password"
              className="w-full rounded-lg bg-richblack-700 p-3 pr-10 text-white placeholder:text-richblack-400"
            />
            <span
              onClick={() => handleToggle("confirm")}
              className="absolute right-3 top-3.5 cursor-pointer text-xl text-richblack-200"
            >
              {showPassword.confirm ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <IconBtn type="submit" text="Update Password" />
        </div>
      </form>
    </div>
  )
}

export default UpdatePassword