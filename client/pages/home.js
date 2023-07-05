'use client';

import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardsSection from "../components/cardsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel, Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Filters from "../components/filters";
import Search from "../components/search";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../redux/actions/auth";
import Chatbot from "../components/chatbot";




const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const queries = router.query
  if (queries.token) {
    localStorage.setItem("token", queries.token);
    localStorage.setItem("isAdmin", "false");

    dispatch(login({}));
  }

  const [ filters, setFilters ] = useState({
    rating: '',
    location: '',
    capacity: '',
    services: '',
    prices: ''
  });




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
            <Filters filters={filters} setFilters={setFilters}  className="" />
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




  