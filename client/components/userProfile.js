import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Profile = ({
  profile_image,
  first_name,
  last_name,
  email,
  cellphone_number,
  id,
}) => {

  return (
    <div className="flex flex-col items-center justify-center mx-auto py-10 px-2">
      <div className="bg-white rounded-lg  w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]">
        <div className="relative flex justify-center">
          <div className="rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48 xl:w-56 xl:h-56">
            <img
              className="w-full h-full object-cover"
              src={profile_image}
              alt=""
              loading="eager"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-3xl text-slate-700 mb-3 dark:text-white">
            {first_name}
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-white">
            {last_name}
          </h2>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-800 mr-2 dark:text-white " />
            <input
              type="text"
              value={email}
              className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 "
              readOnly
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-gray-800 mr-2 dark:text-white" />
            <input
              type="text"
              value={cellphone_number}
              className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 "
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center pt-3">
          <Link href={`/users/${id}/edit`} className="px-6 py-2 text-white bg-indigo-700 border border-transparent rounded-md hover:bg-blue-700">           
              Editar          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;