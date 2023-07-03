import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Importa Axios

import Footer from '../components/footer';
import NavbarBooking from "../components/navBarBooking";
import { useSelector } from 'react-redux';

const ReviewForm = () => {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
 
  const [userId, setUserId] = useState(''); // Agrega el estado para user_id
  const [cowork_space, setCoworkSpace] = useState("");
  const [coworkSpaceError, setCoworkSpaceError] = useState(false);

  const coworkspace = useSelector((state) => state.coworkSpaces.coworkSpace);

  useEffect(() => {
    if (coworkspace) {
      const { name } = coworkspace;
      setCoworkSpace(name);
    }
  }, [coworkspace]);

  const renderStars = (selectedScore) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= selectedScore ? 'text-yellow-500' : 'text-gray-300';
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`text-2xl ${starClass} mr-1`}
          onClick={() => setScore(i)}
        />
      );
    }
    return stars;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Data:", {
      user_id: userId, // Obtén el valor de user_id del estado
      score: score,
      comment: comment,
      cowork_space: cowork_space
    });

    axios.post("http://localhost:3001/reviews/post", {
      user_id: userId,
      score: score,
      comment: comment,
      cowork_space: cowork_space
    })
      .then(response => {
        console.log("Response:", response.data);
        // Reiniciar los campos del formulario
        console.error("Error:", error);
        // Manejar el error de alguna forma si es necesario
      });
  };

  const handleCoworkspaceChange = (event) => {
    setCoworkSpace(event.target.value);
  };

  const handleScoreChange = (selectedScore) => {
    setScore(selectedScore);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarBooking />
      <div className="mt-8 flex-grow mx-auto p-4 bg-white rounded shadow max-w-md">
        <h2 className="text-xl font-semibold mb-4">Dejanos tu reseña del espacio de trabajo</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className={`w-3/4 mx-auto bg-white border ${
                coworkSpaceError ? 'border-red-500' : 'border-indigo-300'
              } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
              value={coworkspace?.name}
              onChange={handleCoworkspaceChange}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">Puntuación</label>
            <div className="flex items-center">{renderStars(score)}</div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">Comentario</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">ID de usuario</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              value={userId}
              onChange={handleUserIdChange}
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            Crear
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewForm;
