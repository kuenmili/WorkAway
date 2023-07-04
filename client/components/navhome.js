import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";


export default function Navhome() {
  const links = [
    {
      label: `About`,
      href: `/about`,
    },
  ];


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
                            />
                        </span>
                        <span>WorkAway</span>
                      </span>
                    </Link>
                  </div>
                  
                  
            {/* menu  */}
            <div className="relative inset-y-0 -left-80 hidden text-center lg:flex lg:items-center">
              <li className="items-center  flex-1 pt-6 list-none lg:pt-0 lg:flex">
                {links.map((link, index) => (
                  <div className="mr-3 nav__item" key={index} >
                    <ul className=" px-4 py-2 text-lg font-medium 

                                    text-gray-800 no-underline rounded-md dark:text-gray-200 
                                    hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 
                                    focus:outline-none dark:focus:bg-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-500"
                >
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                </ul>
              </div>
            ))}
          </li>
        </div>
        {/* botones  */}
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/login"
            className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5"
          >
            Sign in or register
          </Link>
          <Link
            href="/business-login"
            className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5"
          >
            Ingresa como proveedor
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
