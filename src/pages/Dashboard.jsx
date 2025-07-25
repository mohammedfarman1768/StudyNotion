import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "../components/core/Dashboard/SideBar";

const Dashboard = ()=>{
    const {loading:authLoading} = useSelector((state)=> state.auth);
    const {loading:profileLoading} = useSelector((state)=> state.profile);

    if(authLoading || profileLoading){
        return (
            <div className="spinner">
            </div>
        )
    }
    return (
        <div className="relative flex  min-h-[calc(100vh-3.5rem) text-white mt-20">
            <SideBar/>
            <div className="">
                <div className="">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard