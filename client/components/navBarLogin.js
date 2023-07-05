import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/auth';

const DropdownMenu = () => {
  const { user, loggedIn, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex px-1 py-2 text-gray-800 hover:text-gray-600 focus:outline-none rounded-md bg-white dark:bg-transparent ml-96"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/img/default.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-12  "
        />
      </button>
      {(isHovered || isOpen) && (
        <div
          className="absolute right-0 mt-2 w-36 bg-indigo-200 dark:bg-indigo-800 rounded-md shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:text-indigo-800">
              <a href={loggedIn && isAdmin ? "/dashboard/account" : `users/${user.id}`}>
                {loggedIn && isAdmin ? "Dashboard" : "Perfil"}
              </a>
            </li>
            <li className=" px-4 py-2 hover:bg-gray-100 dark:hover:text-indigo-800 ">
              <button onClick={() => dispatch(logout())}>Cerrar sesión</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
