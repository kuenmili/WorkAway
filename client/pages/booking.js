import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from 'react';

export default function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedHours, setSelectedHours] = useState(1);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !startDate || !endDate || !selectedHours || !numberOfPeople || !confirmation) {
      setError('Por favor, completa todos los campos y confirma la reserva.');
      return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople < 0) {
      setError('El número de personas debe ser un valor positivo.');
      return;
    }

    setError('');
    // Lógica para enviar los datos de reserva al servidor
    console.log('Datos de reserva:', { name, email, organization, startDate, endDate, selectedHours, numberOfPeople, confirmation });
    alert('¡Reserva exitosa!');
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
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
          <h1 className="text-4xl font-bold mb-4 text-center dark:text-black">Reserva tu espacio</h1>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <label className="block mb-4">
              <span className="text-gray-700">Nombre:</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Email:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Organización (opcional):</span>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </label>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label>
                  <span className="text-gray-700">Desde:</span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                    required
                  />
                </label>
              </div>
              <div className="w-1/2 ml-2">
                <label>
                  <span className="text-gray-700">Hasta:</span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
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
                    type="number"
                    min={1}
                    max={10}
                    value={selectedHours}
                    onChange={handleHoursChange}
                    className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                    required
                  />
                </label>
              </div>
              <div className="w-1/2 ml-2">
                <label>
                  <span className="text-gray-700">Número de personas:</span>
                  <input
                    type="number"
                    min={0}
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                    className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                    required
                  />
                </label>
              </div>
            </div>
            <label className="block mb-4">
              <input
                type="checkbox"
                checked={confirmation}
                onChange={(e) => setConfirmation(e.target.checked)}
                className="form-checkbox mt-1"
                required
              />
              <span className="ml-2 text-gray-700">Confirmar reserva</span>
            </label>
            <div className="flex justify-center">
                        <button className="w-3/4  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none">Reservar</button>
                    </div>
                    
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

