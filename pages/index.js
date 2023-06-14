import Head from "next/head";
import FirstSection from "../components/firstsection";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import { Swiper, SwiperSlide } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import { Navigation } from "swiper";




const Home = () => {
  return (
    <>
      <Head>
        <title>WorkAway</title>
        <meta
          name="description"
          content="WorkAway es una plataforma que te permite encontrar tu lugar de trabajo de manera remota."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <FirstSection />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Testimonios"
        title="Estas son las opiniones de nuestros clientes">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
      
    </>
  );
}

<div class="swiper">
  
  <div class="swiper-wrapper">
   
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    
  </div>
  
  <div class="swiper-pagination"></div>

 //navigation buttons
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>


</div>


export default Home;