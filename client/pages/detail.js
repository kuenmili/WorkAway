import coworkimg1 from "../public/img/cowork1.jpg";
import Image from 'next/image'
import Link from "next/link";

//import { benefitOne, benefitTwo } from "../pages/data";
//import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper/css/navigation";
//import 'swiper/css';
//import { Navigation } from "swiper";



const Detail = ({ id, imagen, precio, servicios, ubicacion, mapa, telefono, email, reseñas }) => {


  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Nombre del Espacio</h1>
      <h5 className="text-gray-600 mb-4">Descripción del Espacio : </h5>
      <div className="mb-4">
        <Image src={coworkimg1}
              width="816"
              height="817"
              className={"object-fill w-full h-full rounded-md"}
              alt=""
              loading="eager"
              placeholder="blur" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Información</h2>
      <h3 className="mb-2">Precio por día: {precio}</h3>
      <h3 className="mb-2">Servicios: {servicios}</h3>
      <h3 className="mb-4">Ubicación: {ubicacion}</h3>
      <div className="mb-4">{mapa}</div>
      <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
      <h3 className="mb-2">Teléfono: {telefono}</h3>
      <h3 className="mb-4">E-mail: {email}</h3>
      <h3 className="text-2xl font-bold mb-2">Valoraciones</h3>
      <h3 className="mb-4">{reseñas}</h3>
      <Link href={`/booking`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Reservar
      </Link>
      <Link href={`/home`} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2 md:mt-0" >
        Volver a Home
      </Link>
    </div>
  );
}

export default Detail;