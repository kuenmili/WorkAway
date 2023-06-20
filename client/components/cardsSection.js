import Image from 'next/image'
import cardList from "./datalist"
import Container from "./container";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css/navigation";
import 'swiper/css';

export default function cardsSection() {
    
    return (
      <div>

        <div className="container py-12 flex">
          <div className="grid lg:grid-cols-3 gap-12 ">
              {cardList.map((card) => (
                
                <div className ="shadow-lg rounded-lg hover:scale-110 transition duration-300 " key={card.id}>
              <Link href={`/detail/${card.id}`}>
              <Image className = "rounded-t-2xl h-80 object-cover"  
                width={450} 
                height={500} 
                loading='eager'
                src={card.img} 
                alt="" /></Link>
              <div className='p-5'>
                <h3 className='text-3xl font-bold text-slate-700 mb-3 dark:text-white'>{card.title}</h3>
                <p className='text-lg font-normal text-gray-600 dark:text-white'>{card.text}</p>
                <Rating stars={Array(5).fill(card.rating)} />
                <p className='text-lg font-bold text-gray-800 text-center dark:text-white'>Price: {card.price}</p>
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
          className = {`w-5 h-5 ${star <= idx ?  'text-gray-300' : 'bg-yellow-300'} `}
          fill = "currentColor"
          viewBox='0 0 20 20'
          xlmns = "http://www.w3.org/2000/svg">
          <path d = "M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855 l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z">
          </path>
        </svg>
      ))}
      </div>
    )
  }
