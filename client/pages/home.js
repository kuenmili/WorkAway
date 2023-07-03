'use client';

import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
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
import { useDispatch, useSelector } from "react-redux";

import Chatbot from "../components/chatbot";
import { getBusinessById } from "../redux/actions/business";



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
  const dispatch = useDispatch();

  return (
    <>
      <header>
      <Navbar/>  
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




  