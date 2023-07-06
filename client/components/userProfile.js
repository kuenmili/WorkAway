import { faEnvelope, faPhone, faQuoteLeft, faCalendar, faMinus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

const Profile = () => {
 
  const user = useSelector((state) => state.auth?.user)
  const [coworkSpaces, setCoworkSpaces] = useState([]);
  const [coworkReview, setCoworkReview] = useState([]);
  const renderStars = (score) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= score ? 'text-yellow-500' : 'text-gray-300';
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`text-2xl ${starClass} mr-1`}
        />
      );
    }
    return stars;
  };
  
  useEffect(() => {
    if (user?.reserve_id) {
      const fetchCoworkSpaces = async () => {
        try {
          const coworkSpacesData = await Promise.all(
            user.reserve_id.map((reserve) =>
              axios.get(`/cowork_spaces/${reserve.cowork_space}`)
            )
          );
          const coworkSpaces = coworkSpacesData.map(
            (response) => response.data
          );
          setCoworkSpaces(coworkSpaces);
        } catch (error) {
          console.log(error);
        }
      };

      fetchCoworkSpaces();
    }
  }, [user?.reserve_id]);

  useEffect(() => {
    if (user?.reviews) {
      const fetchReviews = async () => {
        try {
          const coworkSpacesData = await Promise.all(
            user.reviews.map((review) =>
              axios.get(`/reviews/${review.id}`)
            )
          );
          const coworkSpaces = coworkSpacesData.map(
            (response) => response.data
          );
          setCoworkReview(coworkSpaces);
        } catch (error) {
          console.log(error);
        }
      };

      fetchReviews();
    }
  }, [user?.reviews]);
  

  console.log(user?.reserve_id, user?.reviews);


  return (
    <div className="flex justify-evenly pt-20">
      <div className="bg-white rounded-lg  w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]">
        <div className="relative flex justify-center">
          <div className="rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48 xl:w-56 xl:h-56">
            <img
              className="w-full h-full object-cover"
              src={user?.profile_image ? user.profile_image : "/img/default.jpg"}
              alt=""
              loading="eager"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-3xl text-slate-700 mb-3 dark:text-white">
            {user?.first_name}
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-white">
            {user?.last_name}
          </h2>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-indigo-700 mr-2 dark:text-white " />
            <p className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 ">
              {user?.email}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-indigo-700 mr-2 dark:text-white" />
            <p className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 ml-4 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600 ">
              
             {user?.cellphone_number}
              
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-center pt-3">
          <Link href={`/users/${user?.id}/edit`} className="px-6 py-2 text-white bg-indigo-700 border border-transparent rounded-md hover:bg-blue-700">           
              Editar          
          </Link>
        </div>
                    </div>
                    <div className="flex  ">    
          { user?.reviews && <div className='flex flex-col'>
          {
            user?.reviews?.length > 0 ? user?.reviews.map((review, index) => {
              const cowork = coworkSpaces[index];
              return (
                <div key={index} className='flex flex-col bg-white rounded-lg mr-4 w-auto my-5 p-5 max-h-48 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]'>
                  <div className="flex justify-center mb-4">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-700 mr-2 fa-lg dark:text-white" />
                     <h2 className='text'>Reseña</h2>
                  </div> 
                  <div className='leading-9'> 
                  <p>Espacio: {cowork?.name}</p>                          
                  <p>Comentario: {review.comment}</p>
                  <p>Puntaje: {renderStars(review.score)}</p>
                  </div>
                  {index !== user?.reviews?.length - 1 && <FontAwesomeIcon icon={faMinus} className="text-gray-500 mx-2" />}
                  </div>
                    )
            }) 
            : 
            <div className='text-center bg-white rounded-lg  w-auto my-5 p-5 max-h-48 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)] mr-3 items-center'>
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-700 mr-2 fa-lg dark:text-white" />
              </div>
              <p>No se han hecho reseñas</p>
            </div>
          }
          </div>}

          { user?.reserve_id && <div className='flex flex-col'>
              {user?.reserve_id.length > 0 ? 
          user.reserve_id.map((reserve, index) => {
            const cowork = coworkSpaces[index];
            return (
              <div key={index} className='flex flex-col bg-white rounded-lg mr-4 w-auto my-5 p-5 max-h-48 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]'>
                <div className="flex justify-center text-xl mb-4">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-indigo-700 mr-2 dark:text-white"
                  />
                </div>
                <div className="flex justify-center">
                  <h2>Reserva</h2>
                </div>
                <div className="leading-9">
                  <p>Espacio: {cowork?.name}</p>
                  <p>Desde {reserve.date_from?.split('T')[0]}</p>
                  <p>Hasta {reserve.date_to?.split('T')[0]}</p>
                </div>
                {index !== user?.reserve_id.length - 1 && (
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="text-gray-500 mx-2"
                  />
                )}
              </div>
            );
          })
         : 
          <div className="text-center bg-white rounded-lg mr-4 w-auto my-5 p-5 max-h-48 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)] items-center">
            <div className="flex justify-center text-xl mb-4">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-indigo-700 mr-2 dark:text-white"
              />
            </div>
            <p>No se han hecho reservas</p>
          </div>
        }
        </div>}
            
      </div>
    </div>
  );
};

export default Profile;