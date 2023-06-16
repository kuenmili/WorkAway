import coworkimg1 from "../public/img/cowork1.jpg";

import { useRouter } from 'next/router';
import Image from 'next/image'
//import { benefitOne, benefitTwo } from "../components/data";
//import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper/css/navigation";
//import 'swiper/css';
//import { Navigation } from "swiper";



const Detail = ({ imagen, precio, servicios, ubicacion, mapa, telefono, email, reseñas }) => {
  const router = useRouter();

//   if (router.isFallback) {
//     return <div>CARGANDO...</div>

  

  const handleReservarClick = () => {
    router.push('/booking'); 
  };

  const handleVolverClick = () => {
    router.push('/'); 
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Nombre del Espacio</h1>
      <p className="text-gray-600 mb-4">Descripción del Espacio</p>
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
      <p className="mb-2">Precio por día: {precio}</p>
      <p className="mb-2">Servicios: {servicios}</p>
      <p className="mb-4">Ubicación: {ubicacion}</p>
      <div className="mb-4">{mapa}</div>
      <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
      <p className="mb-2">Teléfono: {telefono}</p>
      <p className="mb-4">E-mail: {email}</p>
      <h2 className="text-2xl font-bold mb-2">Valoraciones</h2>
      <p className="mb-4">{reseñas}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReservarClick}>
        Reservar
      </button>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 mt-2 md:mt-0" onClick={handleVolverClick}>
        Volver a Home
      </button>
    </div>
  );
}

export default Detail;

// export async function getStaticPaths() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const users = await res.json();
  
//     const paths = users.map(user => {
//       return {
//         params: { id: `${user.id}` }
//       }
//     });
    
//     return {
//       paths,
//       fallback: true
//     }
//   }
  
//   export async function getStaticProps({ params }) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
//     const user = await res.json();
  
//     return {
//       props: {
//         user
//       }
//     }
//   }
