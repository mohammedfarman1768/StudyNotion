import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../common/IconBtn";
import { LiaEdit } from "react-icons/lia";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center max-w-maxContent lg:translate-x-[200px]">
      <h1 className="text-3xl font-semibold mb-10 mr-auto">My Profile</h1>

      {/* Section 1 - Basic Info */}
      <div className="bg-richblack-800 rounded-md py-5 px-6 mb-6">
        <div className="flex justify-between lg:gap-[294px] items-center">
          <div className="flex gap-3 items-center">
            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`}
              className="aspect-square w-[78px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg ">{user?.firstName + " " + user?.lastName}</p>
              <p className="text-sm text-richblack-300">{user?.email}</p>
            </div>
          </div>
          <div className="flex h-[35px] gap-1 px-3 items-center bg-yellow-50 rounded-md text-richblack-900 text-sm font-semibold">
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings");
              }}
            />
            <LiaEdit />
          </div>
        </div>
      </div>

      {/* Section 2 - About */}
      <div className="bg-richblack-800 rounded-md py-8 px-6 mb-10">
        <div className="flex justify-between gap-96 items-center">
          <div className="flex flex-col gap-10">
            <p className="text-lg">About</p>
            <p className="text-sm text-richblack-300">
              {user?.additionalDetails?.about ?? "Write Something about Yourself"}
            </p>
          </div>
          <div className="flex h-[35px] gap-1 px-3 items-center bg-yellow-50 rounded-md text-richblack-900 text-sm font-semibold">
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings");
              }}
            />
            <LiaEdit />
          </div>
        </div>
      </div>

      {/* Section 3 - Personal Details */}
      <div className="bg-richblack-800 rounded-md py-6 px-6 mb-10">
        <div className="flex justify-between lg:gap-[445px] items-center">
          <p className="text-lg font-semibold translate-x-[-9px] mb-10">
            Personal Details
          </p>
          <div className="flex h-[35px] gap-1 px-3 items-center bg-yellow-50 rounded-md text-richblack-900 text-sm font-semibold">
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings");
              }}
            />
            <LiaEdit />
          </div>
        </div>

        <div className="translate-x-[-9px] grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-base text-richblack-300">First Name</p>
            <p className="text-lg text-richblack-5">{user?.firstName}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-base text-richblack-300">Last Name</p>
            <p className="text-lg text-richblack-5">{user?.lastName}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-base text-richblack-300">Email</p>
            <p className="text-lg text-richblack-5">{user?.email}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-base text-richblack-300">Phone Number</p>
            <p className="text-lg text-richblack-5">
              {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-base text-richblack-300">Gender</p>
            <p className="text-lg text-richblack-5">
              {user?.additionalDetails?.gender ?? "Add Gender"}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-base text-richblack-300">Date of Birth</p>
            <p className="text-lg text-richblack-5">
              {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
