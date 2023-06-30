import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { auth } from "../components/firebase/firebase-config";
import React, { useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ApiCaller from "../components/apiCaller";
import ModalAuth from "../components/modalAuth";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import Modal from "../components/modal";


export default function Login() {
  
  const [emailData, setEmailData] = useState([]);
  const [inputEmail, setInputEmail] = useState("");
  const [modalContent, setModalContent] = useState("");// Estado del modal
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showModal, setShowModal] = useState(false); // Configuración del modal.
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const passwordInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const router = useRouter();
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isEmailPasswordError, setIsEmailPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useAuthState(auth);
  /*----------------------*/
  // Estado para controlar la apertura o cierre del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userImage, setUserImage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // autenticándose con google
  const googleAuth = new GoogleAuthProvider();
  // const login = async () => {
  //   const result = await signInWithPopup(auth, googleAuth);
  //   return result;
  // }

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      const email = result.user.email;
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
      //const userEmails = data.map(user => user.email);

      // Verificar si el email existe en los datos obtenidos de la API
      const userExists = data.find((item) => item.email === email);

      if (userExists) {
        // El email existe en la base de datos
        const userMail = userExists.email;
        console.log("Inicio de sesión exitoso como:", userMail);
        // El usuario está autenticado, guarda la información relevante
        setUserEmail(result.user.email);
        setUserImage(result.user.photoURL);

        // Abre el modal
        setIsModalOpen(true);
        setIsLoggedIn(true);
      } else {
        // El email no existe en la base de datos
        console.log("La cuenta no existe. Por favor, regístrate.");
        setUserEmail(""); // 
        setUserImage("");
        setIsLoggedIn(false);
        setModalContent("No tienes una cuenta activa con WorkAway. Por favor, regístrate.");
        setShowModal(true);
        setTimeout(() => {
          router.push('/signup');
        }, 20000);
      }
    } catch (error) {
      console.error("Error al autenticar con Google:", error);
      setModalContent("Error al autenticar con Google:", error);
      setShowModal(true);
    }
  };

 // Lamado a la API para que nos envíe la data, en este caso necesitamos el email.
  useEffect(() => {
    const fetchData = async () => {
      const data = await ApiCaller();
      setEmailData(data);
    };
    fetchData();
  }, []);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setInputEmail(value);
    setIsEmailValid(emailData && emailData.includes(value));
  };

  const clearForm = () => {
    setInputEmail("");
    passwordInputRef.current.value = "";
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    const inputEmail = emailInputRef.current.value.trim();
    console.log(inputEmail, "Este es el email ingresado");
    const inputPassword = passwordInputRef.current.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setIsEmailEmpty(inputEmail === "");
    setIsPasswordEmpty(inputPassword === "");

    if (inputEmail === "" || inputPassword === "") {
      return;
    }

    if (emailRegex.test(inputEmail)) {
      const user = emailData.find((item) => item.email === inputEmail);

      if (user) {
        if (user.password === inputPassword) {
          setModalContent("Login exitoso");
          setShowModal(true);
        } else {
          //setErrorMessage("Error: Contraseña incorrecta");
          //clearForm();
          setIsEmailPasswordError(true);
          setErrorMessage("Contraseña incorrecta");
        }
      } else {
        // setErrorMessage("Error: Email incorrecto");
        // clearForm();
        setIsEmailPasswordError(true);
        setErrorMessage("Email incorrecto");
      }
    } else {
      setErrorMessage("Error: Email inválido");
      clearForm();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserEmail("");
    setUserImage("");
    setIsLoggedIn(false);
    if (modalContent === "No tienes una cuenta activa con WorkAway. Por favor, regístrate.") router.push('/signup');
    if (isLoggedIn) router.push('/home');
  }

  // Función para cerrar el modal
  const closeModalAuth = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
          <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">Iniciar sesión</h2>
          <p className="mb-6 text-center text-gray-400 ">Accede a tu cuenta de WorkAway</p>

          {/* Input email */}
          <div className="mb-6 ">
            {/* <label htmlFor="email" className="text-black mb-2 block">Email</label> */}
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                placeholder="nombre@email.com"
                className={`w-3/4 mx-auto bg-white border ${isEmailEmpty ? "border-red-500" : "border-indigo-300"
                  } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                value={inputEmail}
                onChange={handleEmailChange}
                ref={emailInputRef}
                required
              />
              {isEmailEmpty && <p className="text-red-500 ml-20">El campo email es obligatorio</p>}

            </div>
          </div>

          {/* Input password */}
          <div className="mb-6">
            {/* <label htmlFor="email" className="text-black mb-2 block">Email</label> */}
            <div className="flex flex-col">
              <input
                type="password"
                id="password"
                placeholder="ingresa un password"
                className={`w-3/4 mx-auto bg-white border ${isPasswordEmpty ? "border-red-500" : "border-indigo-300"
                  } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                ref={passwordInputRef}
                required
              />
              {isPasswordEmpty && <p className="text-red-500 ml-20">El campo password es obligatorio</p>}

            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            {/* <div className="bg-white-500 text-red-500 text-center py-1 px-2 text-sm w-60 dark:text-red-500">
              {errorMessage}
            </div> */}
            {isEmailPasswordError && (
              <input
                type="text"
                className="w-3/4 mx-auto bg-rose-200 border border-red-500 text-red-600 font-bold rounded-md py-2 px-4 focus:outline-none focus:border-red-600 dark:text-red-600"
                value={errorMessage}
                readOnly
              />
            )}
          </div>
          {/* Renderizado del modal */}
          {showModal && (
            <Modal
              onClose={handleCloseModal}
              content={modalContent}
            />
          )}

          {/* Botón login */}
          <div className="flex justify-center mt-4">
            <button
              className="w-3/4  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
              onClick={handleSubmit}
            >Iniciar sesión</button>
          </div>

          <div>
            <button onClick={() => setIsModalOpen(true)}></button>

            {isModalOpen && (
              <ModalAuth
                email={userEmail}
                image={userImage}
                onClose={closeModalAuth}
                isLoggedIn={isLoggedIn}
              />
            )}
          </div>

          {/* Iconos de google, facebook, apple */}
          <div className="mt-6 flex justify-center">
            <button
              className="mr-2 bg-white hover:bg-gray-200 p-2 rounded-full"
              onClick={login}
            >
              <FaGoogle size={24} color="#DB4437" />
            </button>
            <button className="mr-2 bg-white hover:bg-gray-200 p-2 rounded-full">
              <FaFacebook size={24} color="#1877F2" />
            </button>
            <button className="bg-white hover:bg-gray-200 p-2 rounded-full">
              <FaApple size={24} color="#000000" />
            </button>

          </div>
          <p className="mt-4 text-center text-gray-500">
            ¿Todavía no tienes una cuenta?{" "} <a href="/signup" className="text-indigo-600"> Registrate</a>.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
}

