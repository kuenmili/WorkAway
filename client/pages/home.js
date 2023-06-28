'use client';

import React, { useEffect, useState } from "react";
import Navhome from "../components/navhome";
import Footer from "../components/footer";
import CardsSection from "../components/cardsSection";
import cardList from "../components/datalist"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel, Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Filters from "../components/filters";
import Search from "../components/search";
import Chatbot from "../components/chatbot";

const Home = () => {
  const [cards, setCards] = useState(cardList);
  const [ filters, setFilters ] = useState({
    rating: '',
    location: '',
    capacity: '',
    services: '',
    prices: ''
  });

  const handleInputChange = ({ target: { name, value } }) => {
      if (value === 'reset') {
          setFilters({
              rating: '',
              location: '',
              capacity: '',
              services: '',
              price: ''
          });
          return setCards(cardList);
      }

      if (name === "price") {
          const [min, max] = value.split('-');
          setCards(cardList.filter(card => card.price >= min && card.price <= max));
          return
      }

      setFilters({
          ...filters,
          [name]: value,
      });
      setCards(cardList.filter(card => card[name] === value));
  }

  return (
    <>
      <header>
      <Navhome/>  
      </header> 
      <Search/>
      <Swiper
          direction={"vertical"}
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel, ]}
          className="mySwiper"
          >
            <SwiperSlide>
            <main className=" flex space-x-28 > * + * ">
              <div className="">
            <Filters filters={filters} setFilters={setFilters} handleInputChange={handleInputChange} className="" />
              </div>
            <CardsSection className=""/>
            </main>
            </SwiperSlide>
        </Swiper>
        <Chatbot/>   
      <Footer />
     </>
  )}

  export default Home;




  