import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const sideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-72 h-full shadow-sm bg-white-500">
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
                : "text-black hover:bg-indigo-100 hover:text-indigo-500"
            }`}
          >
            <div className="mr-4">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="dark:text-white">Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/account">
          <hr className="mx-auto w-20 border-black"></hr>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/profile"
                ? "bg-indigo-100 text-indigo-500"
                : "text-black hover:bg-indigo-100 hover:text-indigo-500"
            }`}
          >
            <div className="mr-4">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <span className=" dark:text-white">Panel de perfil</span>
            </div>
          </div>
        </Link>

        <Link href="/dashboard/account/profile">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "dashboard/account"
                ? "bg-indigo-100 text-indigo-500"
                : "text-black hover:bg-indigo-100 hover:text-indigo-500"
            }`}
          >
            <div className="mr-3">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="dark:text-white">Agregar CoworkSpace </p>
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
