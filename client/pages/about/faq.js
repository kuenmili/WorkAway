import React from "react";
import Container from "../../components/container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const Faq = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="max-w-2xl mx-auto mt-8 p-6 dark:bg-black bg-white rounded-lg shadow-2xl p-10">
          <Container className="!p-0 ">
            <h1
              className=" text-3xl font-medium text-center pt-10 pb-10
                        text-gray-800 underline rounded-md dark:text-white
                        hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 
                        focus:outline-none dark:focus:bg-gray-300"
            >
              FAQ - Preguntas frecuentes
            </h1>
            <div className="w-full max-w-2xl p-2 m-auto rounded-2xl">
              {faqdata.map((item, index) => (
                <div key={item.question} className="mb-5">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className="flex items-center justify-between w-full px-4 py-4 text-lg 
                          text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-nonefocus-visible:ring 
                          focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
                        >
                          <span>{item.question}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180 mb-6" : ""
                            } w-5 h-5 text-indigo-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-white">
                          {item.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const faqdata = [
  {
    question: "Este servicio es gratis?",
    answer:
      "En WorkAway, no se requiere un pago por acceder y utilizar las funcionalidades básicas de la web. Como usuario puedes ingresar, crear una cuenta y utilizar WorkAway de forma gratuita para explorar y buscar los espacios disponibles, así como obtener información detallada sobre las instalaciones y características de cada espacio. Sin embargo, para realizar una reserva concreta de un espacio, ofrecemos un modelo de pago por reserva. Esto significa que deberás realizar un pago para asegurar la disponibilidad del espacio deseado en una fecha y hora específicas. Nuestro sistema de pagos integrado garantiza un proceso seguro y sencillo para completar la transacción y confirmar la reserva. ",
  },
  {
    question: "Que medios de pago utilizan?",
    answer:
      "En WorkAway, utilizamos PayPal como nuestra plataforma de pago segura y confiable. Para realizar un pago en nuestra aplicación, simplemente serás redirigido a la página de PayPal, donde podrás iniciar sesión en su cuenta de PayPal existente o completar el proceso de pago como invitado utilizando una tarjeta de crédito o débito válida.Una vez que se haya completado la transacción, recibirás una confirmación de pago y la reserva del espacio deseado quedará garantizada.La elección de PayPal como nuestra plataforma de pago se basa en su reputación de seguridad y protección de la información financiera.Valoramos la confianza que depositaste en nosotros y nos esforzamos por brindarte una experiencia segura y confiable al realizar tus reservas de espacios.",
  },
  {
    question: "Cual es su politica de reembolso? ",
    answer:
      "Somos el enlace entre los usuarios y los proveedores cuando se trata de reembolsos. Si necesitas un reembolso, ponte en contacto directo con el proveedor y nuestro equipo de atención al cliente estará allí para echarte una mano si hay algún problema. Los plazos para obtener el reembolso pueden variar según las políticas del proveedor y los tiempos de los bancos. No nos hacemos responsables directamente de los reembolsos, pero nos comprometemos a ayudarte en todo lo que podamos durante el proceso. ¡Estamos aquí para apoyarte!",
  },
  {
    question: "Ofrecen soporte? ",
    answer:
      "Si necesitas ayuda, ¡estamos aquí para ti! Solo tienes que hacer clic en el chat que se encuentra en la esquina inferior derecha de la página y enviarnos un mensaje. Nuestro increíble equipo de soporte estará encantado de responder tus preguntas y resolver cualquier problema que tengas. Valoramos mucho tu interés en nuestro servicio y queremos asegurarnos de que tengas una experiencia increíble. Así que, si necesitas algo, ¡no dudes en contactarnos a través del chat! Estaremos aquí para ayudarte en todo lo que podamos. Queremos que sepas también que nuestros tiempos de respuesta pueden ser de hasta 24 horas. Aunque hacemos todo lo posible para responder rápidamente, a veces necesitamos un poco más de tiempo para brindarte la mejor ayuda posible. ",
  },
];

export default Faq;
