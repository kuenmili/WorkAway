import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import Container from "./container";

const Detail = ({
  location,
  address,
  name,
  about,
  services,
  images,
  price,
  rating,
}) => {
  return (
    <div className="w-screen bg-gray-100 dark:bg-gray-900">
      <Container className="mx-auto py-10 px-2 max-w-full">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:w-1/2">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              loop
            >
              {images &&
                images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="ml-4">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="rounded-t-2xl object-cover h-96 w-full"
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          
          <div className="md:w-1/2">
            <div className="p-5">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-slate-700 dark:text-white mb-3 my-4">
                  {name}
                </h1>
                <p className="text-lg font-normal text-gray-600 dark:text-white my-4">
                  {about}
                </p>
                <Rating stars={Array(5).fill(rating)} />
                <p className="text-lg font-bold text-gray-800 dark:text-white my-4">
                  {price}usd /dia
                </p>
                <div className="flex flex-col my-4">
                  <p className="text-lg font-bold text-gray-800 dark:text-white">
                    ¿Qué ofrece este lugar?
                  </p>
                  <p className="text-lg font-normal text-gray-600 dark:text-white my-2">
                    {services}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-gray-800 dark:text-white">
                    Ubicación:
                  </p>
                  <p className="text-lg font-normal text-gray-600 dark:text-white my-2">
                    {address}
                  </p>
                  <p className="text-lg font-normal text-gray-600 dark:text-white">
                    {location}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="p-4 flex justify-start items-center mb-6">
                    <Link
                      href={"/login"}
                      className="px-6 py-2 text-black bg-white border border-black rounded-md md:ml-0 mt-8 inline-block mr-4"
                    >
                      Contacta al anfitrión
                    </Link>
                  </div>
                  <div className="p-4 flex justify-start items-center space-x-4">
                    <Link href={`/booking`} className="px-6 py-2 text-white bg-indigo-800 rounded-md">
                      Reservar
                    </Link>
                    <Link href={`/home`} className="px-6 py-2 text-white bg-indigo-800 rounded-md">
                      Volver a Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Rating = ({ stars }) => {
  return (
    <div className="flex items-center">
      {stars.map((star, idx) => (
        <svg
          key={idx}
          aria-hidden="true"
          className={`w-5 h-5 ${
            star <= idx ? "text-gray-300" : "text-yellow-400"
          } mr-2 mb-2 mt-3`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"></path>
        </svg>
      ))}
    </div>
  );
};

export default Detail;















