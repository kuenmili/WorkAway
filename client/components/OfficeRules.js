import React from 'react';

const OfficeRules = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800">Normas de la casa</h2>
      <ul className="list-disc list-inside mt-2">
        <li>Horario de ingreso flexible</li>
        <li>20 personas como máximo</li>
        <li>Se permiten mascotas</li>
      </ul>
      <button className="text-blue-500 hover:underline mt-2">Mostrar más</button>

      <h2 className="text-xl font-bold text-gray-800 mt-4">Sobre la seguridad y la propiedad</h2>
      <ul className="list-disc list-inside mt-2">
        <li>No se indicó si hay detector de monóxido de carbono</li>
        <li>No se indicó si hay detector de humo</li>
        <li>No apto para bebés (menores de 2 años)</li>
      </ul>
      <button className="text-blue-500 hover:underline mt-2">Mostrar más</button>

      <h2 className="text-xl font-bold text-gray-800 mt-4">Política de cancelación</h2>
      <p className="mt-2">Cancelación gratuita antes de las 15:00 del 26 junio.</p>
      <p className="mt-2">Consultá la política de cancelación completa del anfitrión, que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.</p>
      <button className="text-blue-500 hover:underline mt-2">Mostrar más</button>
    </div>
  );
}

export default OfficeRules;
