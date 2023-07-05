import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { getBusinessById } from '../../redux/actions/business';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import 'swiper/css';
import Image from 'next/image';


function Dashboard() {
 
    const dispatch = useDispatch();
    
    const id = useSelector((state) => state.auth.user?.id);
    const business = useSelector((state) => state.business.business);
    
    useEffect(() => {
      id && dispatch(getBusinessById(id));
    }, [dispatch, id]);



  return (
    <Layout>
      <h1 className='text-center text-3xl'>CoworkSpaces</h1>
      <div className='ml-8'>
        <div className="container py-12 flex ">
          <div className="grid lg:grid-cols-3 gap-12 ">
            {business?.cowork_spaces?.map((card) => ( 
              <div className ="shadow-lg rounded-lg hover:scale-110 transition duration-300" key={card._id}>
                
                   
                    {
                      card.images?.map((image, index) => (
                      
                           <img className = "rounded-t-2xl h-80 object-cover ml-4"  
                            width={300} 
                            height={300} 
                            loading='eager'
                            src={image} 
                          alt="" /> 
                          
                      ))
                    } 
                  
                   <div className='p-5'>
                    <h3 className='text-3xl font-bold text-slate-700 mb-3 dark:text-white'>{card.name}</h3>
                    <p className='text-lg font-bold text-gray-700 dark:text-white mb-1'>{card.location}</p>
                    <p className='text-lg font-normal text-gray-600 dark:text-white line-clamp-5'>{card.address} </p> 
                    <p className='text-lg font-normal text-gray-600 dark:text-white line-clamp-5'> ${card.price}Usd </p> 
                  </div>
                </div>
            ))}
          </div>
        </div>
          
    </div>
      </Layout>
            
    
  )
}

export default Dashboard
