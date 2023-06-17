import Navhome from "../components/navhome";
import Footer from "../components/footer";
import CardsSection from "../components/cardsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import 'swiper/css';
import CategoryFilter from "../components/categoryFilter";
import Container from "../components/container";
import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';

const Home = () => {
  return (
    <>
      <header>
        <Navhome/>  
      </header> 
      <main>
          <div className="flex mr-40">
             <form className="mx-auto md:flex " >
                  <input
                      onChange=""
                      type="text"
                      className="rounded border 2 p-2 text-sm focus:ring-0 w-60"
                      placeholder="Search coworking spaces"/>
                    <button
                      className="rounded rounded-tl-none rounded-bl-none p-3 text-sm dark:text-white text-white bg-indigo-800 "
                      type="submit">
                    <SearchIcon className="h-5 w-5"></SearchIcon>
                    </button>
            <div class="flex items-baseline ">
                    <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                        Puntuacion
                    </label>
                      <select class="w-20 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                      <option value>1</option>
                      <option value>2</option>
                      <option value>3</option>
                      <option value>4</option>
                      <option value>5</option>
                    </select>
          </div>
          <div class="flex items-baseline ">
                    <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                        Ubicacion
                    </label>
                      <select class="w-20 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                      <option value>1</option>
                    </select>
          </div>
          <div class="flex items-baseline ">
                    <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                        Capacidad
                    </label>
                      <select class="w-20 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                      <option value>5</option>
                      <option value>10</option>
                      <option value>15</option>
                    </select>
          </div>
          <div class="flex items-baseline ">
                    <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                        Servicios
                    </label>
                      <select class="w-20 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                      <option value>Cafeteria</option>
                      <option value>Cafeteria</option>
                      <option value>Cafeteria</option>
                    </select>
          </div>
          <div class="flex items-baseline ">
                    <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                        Precios
                    </label>
                      <select class="w-20 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                      <option value>1</option>
                    </select>
          </div>
            </form>
         </div>
      < CardsSection/>
      </main>
      <Footer />
     </>
  )}

  export default Home;

<CategoryFilter/> 