import {
  faEnvelope,
  faPhone,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

const BusinessProfile = ({ name, email, cellphone_number, address, cuit }) => {
  return (
    <div className="flex justify-evenly pt-20 ">
      {/*info container */}
      <div className=" bg-white rounded-lg  w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]">
        {/* business name */}
        <div className="flex  mt-8">
          <h1 className="text-3xl font-bold text-slate-700  dark:text-white">
            {"Work Away"}
          </h1>
        </div>
        {/* business address */}
        <div>
          <h2 className=" mt-2 text-l text-gray-600 dark:text-white mb-5">
            {"Av Corrientes 1145, Buenos Aires, Argentina."}
          </h2>
        </div>
        {/* business email */}
        <div className="mt-6">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-indigo-700 mr-2 dark:text-white "
            />
            <input
              type="text"
              value={"workaway@business.example.com"}
              className="block w-full dark:bg-transparent dark:text-white bg-white border border-indigo-600 rounded-md py-2 px-4 mt-1 ml-4 mr-8 "
              readOnly
            />
          </div>
        </div>
        {/*business cellphone */}
        <div className="mt-6">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-indigo-700 mr-2 dark:text-white"
            />
            <input
              type="text"
              value={"+54 9 2920 35-8382"}
              className="block w-full dark:bg-transparent dark:text-white bg-white border border-indigo-600 rounded-md py-2 px-4 mt-1 ml-4 mr-8 "
              readOnly
            />
          </div>
        </div>
        {/*business cuit */}
        <div className="mt-6">
          <div className="flex  intems-center">
            <FontAwesomeIcon
              icon={faIdCard}
              className="text-indigo-700 mr-2 dark:text-white mt-3"
            />
            <input
              type="text"
              value={"24881083708"}
              className="block w-full dark:bg-transparent dark:text-white bg-white border border-indigo-600 rounded-md py-2 px-4 ml-4 mr-8  "
              readOnly
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center pt-3">
          <Link
            href={`/dashboard/account`}
            className="px-6 py-2 text-white bg-indigo-700 border border-transparent rounded-md hover:bg-blue-700"
          >
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
