import Image from 'next/image'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import 'swiper/css';
import { Navigation } from "swiper";
import { useSelector,useDispatch } from 'react-redux';
import {useState, useEffect} from 'react'
import { getCoworkSpaces } from '../redux/actions/coworkSpaces';


export default function cardsSection() {
      const coworkSpaces = useSelector((state) => state.coworkSpaces.coworkSpaces);
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getCoworkSpaces())
      }, [dispatch]);

  return (
      <div>

        <div className="container py-12 flex ">
          <div className="grid lg:grid-cols-3 gap-12 ">
            {coworkSpaces.length && coworkSpaces?.map((card) => (
                <div className ="shadow-lg rounded-lg hover:scale-110 transition duration-300" key={card._id}>
                  <Link href={`/detail/${card.id}`}>
                  
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                      card.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          {/* <Image className = "rounded-t-2xl h-80 object-cover"  
                            width={450} 
                            height={500} 
                            loading='eager'
                            src={image} 
                            alt="" /> */}
                            <img className = "rounded-t-2xl h-80 object-cover" src={image} alt="" />
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                    </Link>
                   <div className='p-5'>
                    <h3 className='text-3xl font-bold text-slate-700 mb-3 dark:text-white'>{card.name}</h3>
                    <p className='text-lg font-normal text-gray-600 dark:text-white'>{card.about}</p>
                    <Rating stars={Array(5).fill(card.rating)} className=""/>
                    <p className='text-2xl font-bold text-gray-800 text-center dark:text-white'>{`${card.price}usd`}/dia</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
          
    </div>
    )} 



const Rating = ({ stars }) => {
  return (
    <div className="flex items-center">
      {stars.map((star, idx) => ( 
        <svg 
          key = {idx}
          aria-hidden = "true"
          className = {`w-5 h-5 ${star <= idx ?  'text-gray-300' : 'text-yellow-400' } `}
          fill = "currentColor"
          viewBox='0 0 20 20'
          xlmns = "http://www.w3.org/2000/svg">
          <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218">
          </path>
        </svg>
      ))}
      </div>
    )
  }
