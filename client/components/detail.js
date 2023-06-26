import Image from 'next/image';
import Link from 'next/link';
import Container from './container';


const Detail = ({ about, address, business, images, location, name, price, services, rooms }) => {
  
  
  return (
    <div>
      <Container className="container mx-auto py-10 px-2">
        <div className="flex gap-6">
          <div className="shadow-lg rounded-lg w-2/3">
            <img
              className="rounded-t-2xl"
              src={images && images[0]}
              alt=""
            />
            <div className="p-5">
              <h1 className="text-3xl font-bold text-slate-700 mb-3 dark:text-white">{name}</h1>
              <p className="text-lg font-normal text-gray-600 dark:text-white">{about}</p>
              <Rating stars={Array(5).fill(0)} />
              <p className="text-lg font-bold text-gray-800 dark:text-white">Price: {price}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="p-4">
              <h1 className="text-3xl font-bold text-slate-700 mb-3 dark:text-white">Información</h1>
              <div className="text-lg mb-4">
                <p className="text-black">Precio por día: {price}</p>
                <p className="text-black">Rating: {0}</p>
                <p className="text-black">Ubicación: {location}</p>
                <p className="text-black">Mail: correo@example.com</p>
                <p className="text-black">Teléfono: 123456789</p>
              </div>
            </div>
            <div className="p-4 flex justify-center">
              <Link href={`/booking`} className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5">
                Reservar
              </Link>
              <Link href={`/home`} className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5">
                Volver a Home
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default Detail;

const Rating = ({ stars }) => {
  return (
    <div className="flex items-center">
      {stars.map((star, idx) => (
        <svg
          key={idx}
          aria-hidden="true"
          className={`w-5 h-5 ${star <= idx ? 'text-gray-300' : 'bg-yellow-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855 l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"></path>
        </svg>
      ))}
    </div>
  );
};













