import React from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";

const ModalAuth = ({ onClose, email, image, isLoggedIn }) => {
  const router = useRouter();

  // handle para controlar el cierre del modal.
  const handleClose = () => {
    onClose();
    router.push("/home");
  };

// cierre de sesión, no persiste la auth aunque se refresque la página.
  const handleSignOut = () => {
    signOut(getAuth())
      .then(() => {
        // Cierre de sesión exitoso
        console.log("Cierre de sesión exitoso");
      })
      .catch((error) => {
        // Error al cerrar sesión
        console.log(error);
      });

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
    onClose();
  };


  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-64 p-1 rounded-lg">
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-900 focus:outline-none"
            onClick={handleClose}
          >
            X
          </button>
        </div>
        <h2 className="text-xl dark:text-black font-bold mb-4 text-center">Iniciaste sesión como:</h2>
        <p className="text-indigo-600 text-center mb-4">{email}</p>
        <img src={image} alt="User" className="rounded-full w-20 h-20 mx-auto mb-4" />
        {isLoggedIn && (
          <div className="flex justify-center">
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-900 focus:outline-none"
              onClick={handleSignOut}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalAuth;

