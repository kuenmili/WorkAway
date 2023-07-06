import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import DropdownMenu from "./navBarLogin";
import defaultProfileImage from '../public/img/default.jpg';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../redux/actions/auth";

function Navbar() {
  const loggedIn = useSelector((state) => state.auth?.loggedIn);
  
  const links = [
    {
      label: `Inicio`,
      href: `/`,
    },
    {
      label: `Home`,
      href: `/home`,
    },
 
    {
      label: `About`,
      href: `/about`,
    },
  ];
  let token;
  const image = '';
  const dispatch = useDispatch();
  
  useEffect(() => {
    token = localStorage.getItem("token");
    if (token) {
      dispatch(login({}));
    }
  }, [token]);

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/home">
                  <span className="flex items-center space-x-2 text-4xl 
                  font-bold text-indigo-800 dark:text-gray-100 ">
                    <span>
                      <Image 
                        src="/img/WORK.svg"
                        alt=""
                        width="50"
                        height="40"
                        className="text-dark-100 rounded-full"
                        />
                    </span>
                    <span>WorkAway</span>
                  </span>
                </Link>
              </div>
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {links.map((link, index) => (
              <li className="mr-3 nav__item" key={index}>
                <div
                  className="inline-block px-4 py-2 text-lg font-medium 
                                text-gray-800 no-underline rounded-md dark:text-gray-200 
                                hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 
                                focus:outline-none dark:focus:bg-gray-300 hover:bg-indigo-100"
                >
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* botones  */}

        { loggedIn
        ? <DropdownMenu profileImage={image ? image : defaultProfileImage} />
        :
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {/* <Link
            href="/login"
            className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5"
          >
            Sign in or register
          </Link> */}
          <Link
            href="/business-login"
            className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5 -mr-3"
          >
            Iniciar Sesion
          </Link>
        </div>
        }
        <ThemeChanger />
        </nav>
    </div>
  );
}

export default Navbar;
