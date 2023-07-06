import React from 'react';

const OfficeRules = () => {
  return (
    <div className="w-full dark:text-gray-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Qué tenés que saber</h2>
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-2">Normas de la casa</h3>
          <ul className="list-disc list-inside">
            <li>Check-in a partir de las 15:00</li>
            <li>Check-out antes de las 11:00</li>
            <li>4 huéspedes como máximo</li>
          </ul>
          <button className="text-blue-500 hover:underline mt-4">Mostrar más</button>
        </div>
        <div className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-2">Sobre la seguridad y la propiedad</h3>
          <ul className="list-disc list-inside">
            <li>No hay un detector de monóxido de carbono</li>
            <li>No hay un detector de humo</li>
            <li>Pileta/jacuzzi sin rejas ni puerta con llave</li>
          </ul>
          <button className="text-blue-500 hover:underline mt-4">Mostrar más</button>
        </div>
        <div className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-2">Política de cancelación</h3>
          <p className="mt-2">Si cancelás antes del 25 jun., vas a obtener un reembolso parcial.</p>
          <p className="mt-2">Consultá la política de cancelación completa del anfitrión, que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.</p>
          <button className="text-blue-500 hover:underline mt-4">Mostrar más</button>
        </div>
      </div>
    </div>
  );
}

export default OfficeRules;









