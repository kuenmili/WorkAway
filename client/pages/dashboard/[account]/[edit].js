import {
  faEnvelope,
  faPhone,
  faQuoteLeft,
  faPencilAlt,
  faAddressCard,
  faUser,
  faNavicon,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Layout from "../../../components/layout";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Profile = ({ profile_image }) => {
  const bussinesProfile = useSelector((state) => state.auth?.user);

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    profile_image: "",
    address: "",
    cuit: "",
    cellphone_number: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    dispatch(updateBusiness(inputValue));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <Layout>
        <div className="flex justify-evenly -mt-12">
          <div className="bg-white rounded-lg  w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]">
            <div className="mt-4 text-center mt-5">
              <h1>Nombre</h1>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-indigo-700 mr-2 dark:text-white"
                />
                <input
                  type="text"
                  value={bussinesProfile?.name}
                  onChange={handleInputChange}
                  className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 "
                  readOnly={isEditing ? false : true}
                />
                <BsFillPencilFill
                  className="cursor-pointer"
                  onClick={() => handleEditClick()}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h1>Mail</h1>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-indigo-700 mr-2 dark:text-white "
                />
                <input
                  type="text"
                  value={bussinesProfile?.email}
                  onChange={handleInputChange}
                  className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 "
                  readOnly={isEditing ? false : true}
                />
                <BsFillPencilFill
                  className="cursor-pointer"
                  onClick={() => handleEditClick()}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h1>Dirección</h1>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="text-indigo-700 mr-2 dark:text-white "
                />
                <input
                  type="text"
                  value={bussinesProfile?.address}
                  onChange={handleInputChange}
                  className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 "
                  readOnly={isEditing ? false : true}
                />
                <BsFillPencilFill
                  className="cursor-pointer"
                  onClick={() => handleEditClick()}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h1>Password</h1>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-indigo-700 mr-2 dark:text-white "
                />
                <input
                  type="text"
                  value={bussinesProfile?.password}
                  onChange={handleInputChange}
                  className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 "
                  readOnly={isEditing ? false : true}
                />
                <BsFillPencilFill
                  className="cursor-pointer"
                  onClick={() => handleEditClick()}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h1>Cuit</h1>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faNavicon}
                  className="text-indigo-700 mr-2 dark:text-white "
                />
                <input
                  type="text"
                  value={bussinesProfile?.cuit}
                  onChange={handleInputChange}
                  className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 "
                  readOnly={isEditing ? false : true}
                />
                <BsFillPencilFill
                  className="cursor-pointer"
                  onClick={() => handleEditClick()}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h1>Numero de contacto</h1>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-indigo-700 mr-2 dark:text-white"
                />
                <input
                  type="text"
                  value={bussinesProfile?.cellphone_number}
                  onChange={handleInputChange}
                  className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 "
                  readOnly={isEditing ? false : true}
                />
                <BsFillPencilFill
                  className="cursor-pointer"
                  onClick={() => handleEditClick()}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center pt-3">
              <Link
                onClick={handleSubmit}
                href=""
                className="px-6 py-2 text-white bg-indigo-700 border border-transparent rounded-md hover:bg-blue-700"
              >
                Guardar
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
