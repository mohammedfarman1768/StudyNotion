import React, { useEffect, useState } from "react";
import { Link, matchPath, useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../../data/navbar-links";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { logout } from "../../../services/operations/authAPI";
import { apiConnector } from "../../../services/apiconnector";
import { categories } from "../../../services/apis";
import toast from "react-hot-toast";
import ProfileDropDown from "./ProfileDropDown";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]); // ✅ Always an array

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      if (Array.isArray(result?.data?.data)) {
        setSubLinks(result.data.data);
      } else {
        setSubLinks([]); // ✅ fallback to empty array
      }
    } catch (error) {
      console.log("Couldn't fetch Category Data");
      setSubLinks([]); // ✅ prevent undefined
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-richblack-700 fixed inset-x-0 drop-shadow-md bg-richblack-900 z-30">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} width={160} height={42} alt="Logo" />
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {/* Catalog Dropdown */}
                {link.title === "Catalog" && Array.isArray(subLinks) && (
                  <div className="flex items-center gap-2 group relative cursor-pointer">
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle />
                    <div
                      className="invisible absolute left-[50%] 
                      translate-x-[-50%] translate-y-[30%] top-[50%]
                      flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 
                      opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 
                      shadow-lg lg:w-[300px] z-50"
                    >
                      {/* Arrow */}
                      <div
                        className="absolute left-[50%] top-0 translate-x-[80%] 
                        translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5"
                      ></div>

                      {/* Dropdown Items */}
                      {subLinks.length > 0 ? (
                        subLinks.map((subLink, index) => (
                          <Link
                            key={index}
                            to={`/catalog/${subLink.name
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                          >
                            <p className="text-richblack-700 font-semibold uppercase">
                              {subLink.name}
                            </p>
                          </Link>
                        ))
                      ) : (
                        <div className="py-4 text-center text-richblack-300 font-medium">
                          No Courses Found
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Regular Links */}
                {link.title !== "Catalog" && (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / SignUp / Dashboard */}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {!token && (
            <>
              <Link to="/login">
                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                  Log In
                </button>
              </Link>
              <Link to="/signUp">
                <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                  Sign Up
                </button>
              </Link>
            </>
          )}

          {token && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
