import Head from "next/head";
import FirstSection from "../components/firstsection";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitFour, benefitOne, benefitThree, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import 'swiper/css';
import { Navigation } from "swiper";





const Landing = () => {
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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Benefits data={benefitOne}/></SwiperSlide>
        <SwiperSlide><Benefits imgPos="right" data={benefitTwo} /></SwiperSlide>
        <SwiperSlide><Benefits data={benefitThree}/></SwiperSlide>
        <SwiperSlide><Benefits imgPos="right" data={benefitFour} /></SwiperSlide>
      </Swiper> 
      <SectionTitle
        pretitle="Testimonios"
        title="Estas son las opiniones de nuestros clientes">
      </SectionTitle>
      <Testimonials />
      <Footer />
      
      
    </>
  );
}



export default Landing;
