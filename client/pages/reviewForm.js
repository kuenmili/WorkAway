import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Importa Axios
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useSelector, useDispatch } from 'react-redux';
import { createReview } from '../redux/actions/review';
import Modal from '../components/Modal';
import { useRouter } from "next/router";


const ReviewForm = () => {
    const dispatch = useDispatch();
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
 
  const [userId, setUserId] = useState(''); // Agrega el estado para user_id
  const [cowork_space, setCoworkSpace] = useState("");
  const [coworkSpaceError, setCoworkSpaceError] = useState(false);

  const coworkspace = useSelector((state) => state.coworkSpaces.coworkSpace);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (coworkspace) {
        
      const { name } = coworkspace;
      setCoworkSpace(name);
    }
    if (user) {
        console.log(user);
      const { id } = user;
      setUserId(id);
    }
  }, [coworkspace, user]);

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
    console.log(userId, score, comment, coworkspace._id);
    dispatch(createReview({ 
        user_id: userId, 
        score, 
        comment, 
        coworkspace : coworkspace._id })
    
    );
    openModal();
  };

  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    router.push('/home');
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
      <Navbar/>  
      <div className="mt-8 flex-grow mx-auto p-4 bg-white rounded shadow max-w-md">
        <h2 className="text-xl font-semibold mb-4  dark:text-black">Dejanos tu reseña del espacio</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className={`w-full mx-auto bg-white border ${
                coworkSpaceError ? 'border-red-500' : 'border-indigo-300'
              } rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black`}
              value={coworkspace?.name}
              onChange={handleCoworkspaceChange}
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2  dark:text-black">Puntuación</label>
            <div className="flex items-center">{renderStars(score)}</div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2  dark:text-black">Comentario</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 dark:text-black"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
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
      {showModal && (
        <Modal
          onClose={closeModal}
          content="Nueva reseña creada"
        />
        )}
    </div>
  );
};

export default ReviewForm;