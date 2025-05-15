"use client";
import Image from "next/image";
import Link from "next/link";

import logo from "@/src/assets/images/logo.png";
import navLinks from "@//src/constants/navLinks.";
import Navlink from "../components/Navlink.js";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/src/redux/auth/authSlice.js";
import { IoLogOutOutline } from "react-icons/io5";
import { toggleTheme } from "@/src/redux/userPreference/userPreferenceSlice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { LIGHT_THEME } from "@//src/constants/theme";
import AuthUser from "./AuthUser";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.userPreference);

  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 bg-primary-500 z-50">
      <nav className="bg-white border-gray-200 shadow dark:bg-slate-800 dark:text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-8 w-auto"
              alt="E-bazaar Logo"
              height={100}
              width={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              E-Bazaar
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              className="px-2 py-1 mr-2"
              title={theme == LIGHT_THEME ? "Dark mode" : "Light mode"}
              onClick={() => dispatch(toggleTheme())}
            >
              {theme == LIGHT_THEME ? (
                <MdOutlineDarkMode />
              ) : (
                <MdOutlineLightMode />
              )}
            </button>
            {user ? (
              <AuthUser user={user} />
            ) : (
              <Link
                href={"/login"}
                className="text-white bg-primary hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Login
              </Link>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 ">
              {navLinks.map((navLink, index) =>
                user || !navLink.isAuth ? (
                  <Navlink navLink={navLink} key={index} />
                ) : null
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
