import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

const Payed = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mb-10 mt-10 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
        <div className="m-10">
          <h2
            class="text-5xl font-bold mb-10 color-black
                text-center dark:text-white"
          >
            Reserva Confirmada
          </h2>
          <p class="text-lg dark:text-white mb-6 ">
            Por favor, revise su correo electrónico para ver todos los detalles.
          </p>
          <p class="text-base mb-8  dark:text-white">
            ¡Gracias por elegir nuestro servicio!
          </p>
          <Link
            href="/home"
            className="px-6 py-2 mt-6 text-white bg-indigo-800 rounded-md"
          >
            Pagina Principal
          </Link>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 ">
        <Footer />
      </div>
    </div>
  );
};

export default Payed;
