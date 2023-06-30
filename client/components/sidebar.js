import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const sideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full  shadow-sm bg-indigo-100">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto rounded-lg object-cover object-center shadow-lg"
            src="/img/WORK.svg"
            alt="WorkAway"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-800 hover:bg-indigo-100 hover:text-indigo-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="">
          <hr className="mx-auto w-20 border-black"></hr>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-indigo-100 text-indigo-500"
                : "text-gray-800 hover:bg-indigo-100 hover:text-indigo-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <span className="">Panel de perfil</span>
            </div>
          </div>
        </Link>

        <Link href="/dashboard/account"> 
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-indigo-100 text-indigo-500"
                : "text-gray-800 hover:bg-indigo-100 hover:text-indigo-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <span className="">Editar perfil</span>
            </div>
          </div>
        </Link>
        <hr className="mx-auto w-20 border-black"></hr>
        <Link href="/billing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-800 hover:bg-indigo-100 hover:text-indigo-500"
            }`}
          >
            <div className="-mr-8">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Formulario CoworkSpace</p>
            </div>
          </div>
        </Link>
        <hr className="mx-auto w-20 border-black"></hr>
      </div>
    </div>
  );
});

sideBar.displayName = "SideBar";

export default sideBar;
