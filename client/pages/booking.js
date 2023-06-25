"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import Container from "../components/container";
import Navbar from "../components/navbar";
import axios from "axios";

export default function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedHours, setSelectedHours] = useState(1);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !startDate ||
      !endDate ||
      !selectedHours ||
      !numberOfPeople ||
      !confirmation
    ) {
      setError("Por favor, completa todos los campos y confirma la reserva.");
      return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople < 0) {
      setError("El número de personas debe ser un valor positivo.");
      return;
    }

    setError("");
    //  lógica  para enviar los datos de reserva al servidor
    console.log("Datos de reserva:", {
      name,
      email,
      organization,
      startDate,
      endDate,
      selectedHours,
      numberOfPeople,
      confirmation,
    });
    alert("¡Reserva exitosa!");
  };

  const handleNumberOfPeopleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setNumberOfPeople(value);
    }
  };

  const handleHoursChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setSelectedHours(value);
    }
  };

  return (
    <>
      <Navbar />
      <Container className="flex flex-wrap ">
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
          <h1 className="text-2xl font-bold mb-6">Reserva tu espacio</h1>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <label className="block mb-4">
              <span className="text-gray-700">Nombre:</span>
              <input
                className="form-input mt-1 block w-full p-2 border border-gray-300 rounded"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Email:</span>
              <input
                className="form-input mt-1 block w-full p-2 border border-gray-300 rounded"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Organización (opcional):</span>
              <input
                className="form-input mt-1 block w-full p-2 border border-gray-300 rounded"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </label>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label>
                  <span className="text-gray-700">Desde:</span>
                  <input
                    className="form-input mt-1 block w-full p-2 border border-gray-300 rounded"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="w-1/2 ml-2">
                <label>
                  <span className="text-gray-700">Hasta:</span>
                  <input
                    className="form-input mt-1 block w-full p-2 border border-gray-300 rounded"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label>
                  <span className="text-gray-700">Horas:</span>
                  <input
                    className="form-input mt-1 block w-full p-2 border border-gray-300 rounded"
                    type="number"
                    min={1}
                    max={10}
                    value={selectedHours}
                    onChange={handleHoursChange}
                    required
                  />
                </label>
              </div>
              <div className="w-1/2 ml-2">
                <label>
                  <span className="text-gray-700">Número de personas:</span>
                  <input
                    className="form-input mt-1 block w-full p-2 border border-gray-300 rounded"
                    type="number"
                    min={0}
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <label className="block mb-4">
              <input
                className="form-checkbox mt-1"
                type="checkbox"
                checked={confirmation}
                onChange={(e) => setConfirmation(e.target.checked)}
                required
              />
              <span className="ml-2 text-gray-700">Confirmar reserva</span>
            </label>

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
      </Container>
    </>
  );
}