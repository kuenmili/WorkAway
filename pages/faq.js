import React from "react";
import Container from "../components/container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ThemeChanger from "../components/DarkSwitch";
import Image from "next/image"


const Faq = () => {
  return (
    
   
          
    
    <Container className="!p-0">   
     <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
    {/* Logo  */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Link href="/home">
              <span className="flex items-center space-x-2 text-4xl 
              font-bold text-indigo-800 dark:text-gray-100 ">
                <span>
                  <Image
                    src="/img/logo2.svg"
                    alt=""
                    width="50"
                    height="40"
                    />
                </span>
                <span>WorkAway</span>
              </span>
            </Link>
          </div>
          </nav>
        <h1 className=" text-3xl font-medium text-center pt-10 pb-10
                        text-gray-800 underline rounded-md dark:text-gray-200 
                        hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 
                        focus:outline-none dark:focus:bg-gray-300">FAQ - Preguntas frecuentes</h1>
      <div className="w-full max-w-2xl p-2 m-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg 
                          text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-nonefocus-visible:ring 
                          focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Este servicio es gratis?",
    answer: "",
  },
  {
    question: "Que medios de pago utilizan?",
    answer: "Utilizamos paypal para procesar los pagos.",
  },
  {
    question: "Cual es su politica de reembolso? ",
    answer:
      ".",
  },
  {
    question: "Ofrecen soporte? ",
    answer:
      ".",
  },
];

export default Faq;