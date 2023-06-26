import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Modal from "../components/modal";
import Link from "next/link";

export default function Signup() {
    const router = useRouter();
    const [user, setUser] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [occupants, setOccupants] = useState("");
    const [coworkSpace, setCoworkSpace] = useState("");
    const [modalContent, setModalContent] = useState("");
    const [userError, setUserError] = useState(false);
    const [dateFromError, setDateFromError] = useState(false);
    const [dateToError, setDateToError] = useState(false);
    const [occupantsError, setOccupantsError] = useState(false);
    const [coworkSpaceError, setCoworkSpaceError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showCheckboxError, setShowCheckboxError] = useState(false);

    const handleUserChange = (e) => {
        setUser(e.target.value);
        setUserError(false);
    };

    const handleDateFromChange = (e) => {
        setDateFrom(e.target.value);
        setDateFromError(false);
    };

    const handleDateToChange = (e) => {
        setDateTo(e.target.value);
        setDateToError(false);
    };

    const handleOccupantsChange = (e) => {
        const value = e.target.value;
        const isValid = value >= 1 && value <= 20;

        setOccupants(value);
        setOccupantsError(!isValid);
    };

    const handleCoworkSpaceChange = (e) => {
        setCoworkSpace(e.target.value);
        setCoworkSpaceError(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user || !dateFrom || !dateTo || !occupants || !coworkSpace || !isChecked) {
            if (!user) setUserError(true);
            if (!dateFrom) setDateFromError(true);
            if (!dateTo) setDateToError(true);
            if (!occupants) setOccupantsError(true);
            if (!coworkSpace) setCoworkSpaceError(true);
            if (!isChecked) setShowCheckboxError(true);

            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/users/reserve", {
                user,
                dateFrom,
                dateTo,
                occupants,
                coworkSpace,
            });

            setModalContent("Registration successfully completed!");
            setShowModal(true);
        } catch (error) {
            setModalContent("An error occurred while submitting the form", error.message);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        router.push("/login");
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 ">
                <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6 text-center dark:text-black">Reserva tu espacio</h2>
                    <p className="mb-6 text-center text-gray-400 ">¿ya tienes una cuenta? <Link className="text-indigo-600 " href="/login" >Inicia sesion</Link></p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    value={user}
                                    placeholder="Nombre completo"
                                    onChange={handleUserChange}
                                    className={`w-3/4 mx-auto bg-white border ${userError ? "border-red-500" : "border-indigo-300"
                                        } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                                />
                                {userError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>This field is required.</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-col">
                                <input
                                    type="date"
                                    value={dateFrom}
                                    onChange={handleDateFromChange}
                                    className={`w-3/4 mx-auto bg-white bg-opacity-50 border ${dateFromError ? "border-red-500" : "border-indigo-300"
                                        } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black `}
                                />
                                {dateFromError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>This field is required.</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-col">
                                <input
                                    type="date"
                                    value={dateTo}
                                    onChange={handleDateToChange}
                                    className={`w-3/4 mx-auto bg-white border ${dateToError ? "border-red-500" : "border-indigo-300"
                                        } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
              
                                />
                               
                                {dateToError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>This field is required.</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-col">
                                <input
                                    type="number"
                                    value={occupants}
                                    placeholder="Número de ocupantes"
                                    onChange={handleOccupantsChange}
                                    className={`w-3/4 mx-auto bg-white border ${occupantsError ? "border-red-500" : "border-indigo-300"
                                        } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                                    min="1"
                                    max="20"
                                />
                                {occupantsError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>This field is required.</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    value={coworkSpace}
                                    placeholder="Espacio de trabajo"
                                    onChange={handleCoworkSpaceChange}
                                    className={`w-3/4 mx-auto bg-white border ${coworkSpaceError ? "border-red-500" : "border-indigo-300"
                                        } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
                                />
                                {coworkSpaceError && (
                                    <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>This field is required.</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4"
                                    checked={isChecked}
                                    onChange={() => {
                                        setIsChecked(!isChecked);
                                        setShowCheckboxError(false);
                                    }}
                                />
                                <span className="ml-2 dark:text-black">Confirmar reserva</span>
                            </label>
                            {showCheckboxError && (
                                <p className="text-red-500 mt-2" style={{ marginLeft: "92px" }}>Por favor confirme su reserva</p>
                            )}
                        </div>

                        <PayPalScriptProvider
              options={{
                clientId:
                  "AdiNb6McbAMTW-_Q6gDXi6R-NKPuo6adwdDY7U_a5biMXafZcYdgvf4kC533mTn8or1KeY-rq-YqO2gH",
              }}
            >
              <PayPalButtons
                style={{
                  layout: "vertical",
                  color: "silver",
                  shape: "pill",
                  label: "checkout",
                }}
              />
            </PayPalScriptProvider>
                    </form>
                </div>
            </div>
            <Footer />

            {showModal && (
                <Modal onClose={handleCloseModal}>
                    <h2 className="text-2xl font-bold mb-4">{modalContent}</h2>
                    <button
                        onClick={handleCloseModal}
                        className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                    >
                        Close
                    </button>
                </Modal>
            )}
        </>
    );
}







