import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';


export default function Navhome() {

    const links = [
      {
        label: ``,
        href: `/`,
      },
      {
        label: ``,
        href: `/`,
      },
      {
        label: ``,
        href: `/`,
      },
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
                            src="/img/logo2.svg"
                            alt=""
                            width="50"
                            height="40"
                            />
                        </span>
                        <span>WorkAway</span>
                      </span>
                    </Link>
                  </div>
                    {/* search  */}
                  
            {/* menu  */}
            <div className="hidden text-center lg:flex lg:items-center">
              <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                {links.map((link) => (
                  <div className="mr-3 nav__item" >
                    <a className="inline-block px-4 py-2 text-lg font-medium 
                                    text-gray-800 no-underline rounded-md dark:text-gray-200 
                                    hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 
                                    focus:outline-none dark:focus:bg-gray-300">
                    <Link href={link.href} key={link.label}>
                    
                          
                        {link.label}
                    
                    </Link>
                    </a>
                  </div>
                ))}
              </ul>
            </div>
    
    
           
    
            {/* botones  */}
    
            <div className="hidden mr-3 space-x-4 lg:flex nav__item">
              <Link href="/" className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5">
                  Sign in or register
              </Link>
              <Link href="/" className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5">
                  Añade tu Coworking
              </Link>
    
              <ThemeChanger />
            </div>
          </nav>
        </div>
      );
    }
    
    