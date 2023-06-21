import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from 'next/router';
import axios from "axios";
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

export default function Signup() {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cellphoneNumber, setCellphoneNumber] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [cellphoneNumberError, setCellphoneNumberError] = useState(false)



    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(false);// Reiniciamos el estado de error al cambiar el valor del campo
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setLastNameError(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(false);
    };

    const handleCellphoneNumberChange = (e) => {
        setCellphoneNumber(e.target.value);
        setCellphoneNumberError(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!firstName || !lastName || !email || !password || !cellphoneNumber){
            //alert("Todos los campos son obligatorios")
            if (!firstName) setFirstNameError(true); // Establecemos el estado de error para el campo de "First Name"
            if (!lastName) setLastNameError(true);
            if (!email) setEmailError(true);
            if (!password) setPasswordError(true);
            if (!cellphoneNumber) setCellphoneNumberError(true);

            return;
        }
        try {
            // Enviar los datos del formulario a la base de datos
            const response = await axios.post("http://localhost:3001/users/signup", {
                firstName,
                lastName,
                email,
                password,
                cellphoneNumber,
            });

            console.log("Formulario enviado exitosamente");
            console.log("Respuesta del servidor:", response.data);

            // Redireccionar a otra página después de enviar el formulario exitosamente
            router.push('/login');
        } catch (error) {
            console.log("Ocurrió un error al enviar el formulario:", error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 ">
                <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6 text-center dark:text-black">Sign Up</h2>
                    <p className="mb-6 text-center text-gray-400 ">Get access to the WorkAway service.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    value={firstName}
                                    placeholder="First Name"
                                    onChange={handleFirstNameChange}
                                    className={`w-3/4 mx-auto bg-white border ${
                                        firstNameError ? "border-red-500" : "border-indigo-300"
                                    } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                                />
                                {firstNameError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>Este campo es obligatorio</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            {/* <label className="text-black mb-2 block">Last Name</label> */}
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    value={lastName}
                                    placeholder="Last Name"
                                    onChange={handleLastNameChange}
                                    className={`w-3/4 mx-auto bg-white border ${
                                        lastNameError ? "border-red-500" : "border-indigo-300"
                                    } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                                />
                                {lastNameError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>Este campo es obligatorio</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            {/* <label className="text-black mb-2 block">Email Address</label> */}
                            <div className="flex flex-col">
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="name@address.com"
                                    onChange={handleEmailChange}
                                    className={`w-3/4 mx-auto bg-white border ${
                                        emailError ? "border-red-500" : "border-indigo-300"
                                    } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                                />
                                {emailError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>Este campo es obligatorio</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            {/* <label className="text-black mb-2 block">Password</label> */}
                            <div className="flex flex-col">
                                <input
                                    type="password"
                                    value={password}
                                    placeholder="Enter your password"
                                    onChange={handlePasswordChange}
                                    className={`w-3/4 mx-auto bg-white border ${
                                        passwordError ? "border-red-500" : "border-indigo-300"
                                    } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                                />
                                {passwordError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>Este campo es obligatorio</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            {/* <label className="text-black mb-2 block">Cellphone Number</label> */}
                            <div className="flex flex-col">
                                <input
                                    type="tel"
                                    value={cellphoneNumber}
                                    placeholder="Enter your cellphone Number"
                                    onChange={handleCellphoneNumberChange}
                                    className={`w-3/4 mx-auto bg-white border ${
                                        cellphoneNumberError ? "border-red-500" : "border-indigo-300"
                                    } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                                />
                                {cellphoneNumberError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>Este campo es obligatorio</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6 flex justify-center">
                            <div className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-indigo-600" />
                                <p className="ml-2 text-gray-500">
                                    I agree to WorkAway's{" "}
                                    <a href="#" className="text-indigo-600 underline">
                                        privacy policy and terms of service
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        <div className="mb-6 flex justify-center">
                            <button
                                type="submit"
                                className="w-3/4 mx-auto px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-900 focus:outline-none"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 flex justify-center">
                        <button className="mr-2 bg-white hover:bg-gray-200 p-2 rounded-full">
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
                        Already have an account? <a href="/login" className="text-indigo-600">Log in</a>.
                    </p>
                </div>
            </div>

            {/* footer */}
            <div className="mt-8">
                <Footer />
            </div>
        </>
    );
}
