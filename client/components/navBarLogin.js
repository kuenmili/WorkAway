import { useState } from 'react';
import { Link } from "next/link";

const DropdownMenu = ({  user }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
 

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    console.log("logout");
  }

  return (
    <div className="relative">
      <button
        className="flex items-center px-4 py-2 text-gray-800 hover:text-gray-600 focus:outline-none rounded-md bg-white dark:bg-transparent"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={user.profile_image}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-2 transition duration-300 ease-in-out transform hover:scale-110"
        />
      </button>
      {(isHovered || isOpen) && (
        <div
          className="absolute right-0 mt-2 w-48 bg-gray-200 dark:bg-indigo-800 rounded-md shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:text-indigo-800">
              <Link  href={`/users/${user.id}`}>Perfil</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:text-indigo-800">
              <Link href={`/users/${user.id}/cuenta`}>Cuenta</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:text-indigo-800">
              <button onClick={handleLogOut}>Cerrar sesión</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
