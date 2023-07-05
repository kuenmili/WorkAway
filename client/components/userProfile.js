import { faEnvelope, faPhone, faQuoteLeft, faCalendar, faMinus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
 
  const user = useSelector((state) => state.auth?.user)
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



  return (
    <div className="flex justify-evenly pt-20">
      <div className="bg-white rounded-lg  w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]">
        <div className="relative flex justify-center">
          <div className="rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48 xl:w-56 xl:h-56">
            <img
              className="w-full h-full object-cover"
              src={user?.profile_image}
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
                    <div className="flex-col ">
        <div className="bg-white rounded-lg  w-auto my-5 p-8 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]">
          <div className='flex justify-center'>
           
          </div>
          {
            user?.reviews?.length > 0 ? user?.reviews.map((review, index) => {
              return (
                <div key={index} >
                  <div className="flex justify-center mb-4">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-700 mr-2 fa-lg dark:text-white" />
                     <h2 className='text'>Reseña</h2>
                  </div> 
                  <div className='leading-9'>                           
                  <p>Comentario: {review.comment}</p>
                  <p>Puntaje: {renderStars(review.score)}</p>
                  </div>
                  {index !== user?.reviews?.length - 1 && <FontAwesomeIcon icon={faMinus} className="text-gray-500 mx-2" />}
                  </div>
                    )
            }) 
            : 
            <div className='text-center items-center'>
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-700 mr-2 fa-lg dark:text-white" />
              </div>
              <p>No se han hecho reseñas</p>
            </div>
          }</div>

              <div className="bg-white rounded-lg w-auto p-8 dark:bg-[#26272c] shadow-2xl shadow-[rgba(0, 0, 0, 0.16)]">
                        {
                        user?.reserve_id?.length > 0 ? user?.reserve_id.map((reserve, index) => {
                          return (
                            <div key={index}>  
                             <div className="flex justify-center text-xl mb-4">
                                <FontAwesomeIcon icon={faCalendar} className="text-indigo-700 mr-2 dark:text-white" />
                            </div> 
                            <div className='flex justify-center'>
                            <h2>Reserva</h2>      
                            </div>  
                            <div className='leading-9'>                     
                            <p>Date: {reserve.date}</p>
                            <p>Duration: {reserve.duration}</p>
                            <p>Room:{reserve.room}</p>
                            </div>
                            {index !== user?.reserve_id.length - 1 && <FontAwesomeIcon icon={faMinus} className="text-gray-500 mx-2" />}
                            </div>
                        )
                    }) 
                  
                    : <div className='text-center items-center'>
                      <div className="flex justify-center text-xl mb-4">
                                <FontAwesomeIcon icon={faCalendar} className="text-indigo-700 mr-2 dark:text-white" />
                            </div>
                        <p>No se han hecho reservas</p>
                    </div>
                    }
            </div>
      </div>
    </div>
  );
};

export default Profile;