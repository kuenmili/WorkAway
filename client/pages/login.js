import { FaGoogle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import useUser from "../components/hooks/useUser";
import { loginWithGoogle, signIn, signOut } from '../components/firebase/client';
import { onAuthStateChanged } from "../components/firebase/client";


export default function Login() {

  const user = useUser();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleClickGoogle = () => {
    loginWithGoogle()
    .then(user => {
      console.log(user);
    }).catch(error => console.log(error))
  }

  const handleNormalLogin = () => {
    const {email, password} = data
    try {
      signIn(email, password)
      router.push('/home')
    } catch (error) {
      console.log(error.message);
    }    
  }

  const handleSignOut = () => {
    signOut()
  }

  useEffect(() => {
    if (user) router.push('/login')
  },[user])


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
                name="email"
                placeholder="nombre@email.com"
                className={`w-3/4 mx-auto bg-white border rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                value={data.email}
                onChange={handleInputChange}
                required
              />
             
            </div>
          </div>

          {/* Input password */}
          <div className="mb-6">
            {/* <label htmlFor="email" className="text-black mb-2 block">Email</label> */}
            <div className="flex flex-col">
              <input
                type="password"
                id="password"
                name= "password"
                placeholder="ingresa un password"
                className={`w-3/4 mx-auto bg-white border 
                   rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                value={data.password}
                onChange={handleInputChange}
                required
              />
              

            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            {/* <div className="bg-white-500 text-red-500 text-center py-1 px-2 text-sm w-60 dark:text-red-500">
              {errorMessage}
            </div> */}
           
          </div>
          {/* Renderizado del modal */}
          

          {/* Botón login */}
          <div className="flex justify-center mt-4">
            <button
              className="w-3/4  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
              onClick={handleNormalLogin}
            >Iniciar sesión</button>
          </div>

          {/* Iconos de google, facebook, apple */}
          <div className="mt-6 flex justify-center">
            <button
              className="mr-2 bg-white hover:bg-gray-200 p-2 rounded-full"
              onClick={handleClickGoogle}
            >
              <FaGoogle size={24} color="#DB4437" />
            </button>
            

          </div>
          <p className="mt-4 text-center text-gray-500">
            ¿Todavía no tienes una cuenta?{" "} <a href="/signup" className="text-indigo-600"> Registrate</a>.
          </p>

          <button onClick={handleSignOut}> SIGN OUT</button>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
}

