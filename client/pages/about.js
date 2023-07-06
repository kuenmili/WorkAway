import Link from "next/link";
import Image from "next/image";
import dalma from "../public/img/dalma.jpg";
import ricardo from "../public/img/ricardo.jpg";
import mili from "../public/img/mili.jpg";
import nico from "../public/img/nicolas.jpg";
import lucio from "../public/img/lucio.jpg";
import camilo from "../public/img/camilo.jpg";
import Footer from "../components/footer";
import ThemeChanger from "../components/DarkSwitch";
import Work from "../public/favicon.ico";

export default function About() {
  return (
    <div className="w-full">
      <div className="pt-12 flex justify-evenly mb-32  m-9 ">
        <Link
          href="/home"
          className="px-6 py-3 flex text-center text-white bg-indigo-800 rounded-md md:ml-5 md:mt-2 hover:bg-indigo-500"
        >
          Volver
        </Link>
        <div className="w-full lg:w-auto  flex justify-center items-center text-4xl  font-bold text-indigo-800 dark:text-gray-100">
          <Image src={Work} alt="" width="50" height="40" className="" />

          <span>WorkAway</span>
        </div>
        <ThemeChanger />
      </div>
      <div class="flex flex-col lg:flex-row justify-center gap-8 mx-96  dark:bg-gray-800 rounded-md bg-gray-100 hover:scale-125 transition duration-500 hover:border-2">
        <div class=" max-w-3xl mx-64 flex flex-col justify-center text-center p-10 dark:bg-gray-800 rounded-md bg-gray-100 transition duration-500 ">
          <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            Nosotros
          </h1>
          <p class="font-normal text-xl  leading-6 text-gray-600 px-7  dark:text-white">
            Somos un grupo apasionado de programadores que se unió con un
            objetivo en común: crear una plataforma que permita a los
            desarrolladores trabajar juntos, sin importar dónde se encuentren.
            Utilizando MongoDB, Node.js, Express, Next.js, Redux y Tailwind CSS,
            hemos dado vida a esta innovadora herramienta. Nuestra pasión por la
            programación impulsa cada aspecto de{" "}
            <span className="text-indigo-800 font-bold dark:text-white">
              WorkAway
            </span>
            , y estamos emocionados de conectar a programadores de todo el mundo
            para colaborar, compartir conocimientos y hacer realidad proyectos
            increíbles juntos. Únete a nuestra comunidad y descubre un nuevo
            nivel de desarrollo remoto
          </p>
        </div>
      </div>

      <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex-col justify-center m-8 py-4 items-center text-center">
          <p class="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">
            EL EQUIPO
          </p>
          <h1 class="xl:text-4xl text-3xl text-center rounded text-gray-800 dark:text-white font-bold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Los talentos de WorkAway
          </h1>
        </div>

        <div class="w-full bg-gray-100 rounded-md dark:bg-gray-800 px-10 pt-10  mb-10">
          <div class="container mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People "
              class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              <div
                role="listitem"
                class="hover:scale-125 transition duration-300 xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <Image
                        src={dalma}
                        alt="Display Picture of Andres Berlin"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                      Dalma Nicolau
                    </h1>
                    <p class="text-gray-800 dark:text-white text-sm text-center">
                      Full Stack Dev
                    </p>
                    <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                      Más de 3 años de experiencia en desarrollo web
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a
                        href="https://github.com/Dalmanicolau"
                        target="_blank"
                        class="mx-5"
                      >
                        <div aria-label="Github" role="img">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                            alt="github"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                class="hover:scale-125 transition duration-300 xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <Image
                        src={camilo}
                        alt="Display Picture of Silene Tokyo"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                      Camilo Acosta
                    </h1>
                    <p class="text-gray-800 dark:text-white text-sm text-center">
                      Full Stack Dev
                    </p>
                    <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                      Más de 3 años de experiencia en desarrollo web
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a
                        href="https://github.com/camm2210"
                        target="_blank"
                        class="mx-5"
                      >
                        <div aria-label="Github" role="img">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                            alt="github"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                class="hover:scale-125 transition duration-300 xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <Image
                        src={lucio}
                        alt="Display Picture of Johnson Stone"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                      Lucio Campos
                    </h1>
                    <p class="text-gray-800 dark:text-white text-sm text-center">
                      Full Stack Dev
                    </p>
                    <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                      Más de 3 años de experiencia en desarrollo web
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a
                        href="https://github.com/Lucam13"
                        target="_blank"
                        class="mx-5"
                      >
                        <div aria-label="Github" role="img">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                            alt="github"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                class="hover:scale-125 transition duration-300 xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <Image
                        src={mili}
                        alt="Display Picture of Dean Jones"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                      Milagros Kuen
                    </h1>
                    <p class="text-gray-800 dark:text-white text-sm text-center">
                      Full Stack Dev
                    </p>
                    <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                      Más de 3 años de experiencia en desarrollo web
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a
                        href="https://github.com/kuenmili"
                        target="_blank"
                        class="mx-5"
                      >
                        <div aria-label="Github" role="img">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                            alt="github"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                class="hover:scale-125 transition duration-300 xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <Image
                        src={nico}
                        alt="Display Picture of Rachel Adams"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                      Nicolas Fucci
                    </h1>
                    <p class="text-gray-800 dark:text-white text-sm text-center">
                      Full Stack Dev
                    </p>
                    <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                      Más de 3 años de experiencia en desarrollo web
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a
                        href="https://github.com/NFUCCI88"
                        target="_blank"
                        class="mx-5"
                      >
                        <div aria-label="Github" role="img">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                            alt="github"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                class="hover:scale-125 transition duration-300 xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <Image
                        src={ricardo}
                        alt="Display Picture of Charles Keith"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                      Ricardo Rico
                    </h1>
                    <p class="text-gray-800 dark:text-white text-sm text-center">
                      Full Stack Dev
                    </p>
                    <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                      Más de 3 años de experiencia en desarrollo web
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a
                        href="https://github.com/programador5781"
                        target="_blank"
                        class="mx-5"
                      >
                        <div aria-label="Github" role="img">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                            alt="github"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
