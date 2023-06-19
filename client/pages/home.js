import Navhome from "../components/navhome";
import Footer from "../components/footer";
import CardsSection from "../components/cardsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import 'swiper/css';
import Filters from "../components/filters";
import Search from "../components/search";

const Home = () => {
  return (
    <>
      <header>
        <Navhome/>  
      </header> 
      <Search/>
      <main className="flex space-x-28 > * + *">
       <Filters/>
       <CardsSection/>
      </main>
      <Footer />
     </>
  )}

  export default Home;

