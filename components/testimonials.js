import Image from "next/image";
import React from "react";
import Container from "./container";
import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import userFourImg from "../public/img/mili.jpg";
import userFiveImg from "../public/img/dalma.jpg";
import userSixImg from "../public/img/ricardo.jpg";

const Testimonials  = () => {
  return (
    <Container>
          
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Una increíble red de <Mark>coworkings</Mark> donde nuestros equipos pueden trabajar y colaborar, 
            incluso si vivimos en diferentes ciudades.
               
            </p>
            <Avatar
              image={userOneImg}
              name="Max Tobio"
              title="CEO of WA"
            />
          </div>
        </div>
      <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
               Tuvimos que ampliar nuestro equipo y reclutar especialistas de todo el país y para mantenernos conectados, 
               necesitábamos <Mark>un espacio</Mark> donde la gente pudiera reunirse.
            </p>
              <Avatar
              image={userTwoImg}
              name="Son Camilo"
              title="CEO of WA"
              />
          </div>
      </div>
      <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Una increíble red de coworkings donde nuestros equipos pueden <Mark>trabajar y colaborar</Mark> , 
              incluso si vivimos en diferentes ciudades.
            </p>
             <Avatar
              image={userThreeImg}
              name="Nicolas Fucci"
              title="Co-founder Acme Inc"
             />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              WorkAway es un servicio necesario, pero también puede ser visto como un<Mark>beneficio indispensable</Mark>, 
              dependiendo de la forma de trabajar de cada empresa. 
            </p>
             <Avatar
              image={userFiveImg}
              name="Dalma Nicolau"
              title="Co-founder Acme Inc"
             />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Nuestros empleados están muy contentos con<Mark>WorkAway</Mark> y la oportunidad de trabajar desde cualquier 
              lugar que quieran, sin ninguna presión. 
            </p>
             <Avatar
              image={userFourImg}
              name="Milagros Kuen"
              title="Co-founder Acme Inc"
             />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Disfruto usar WorkAway, tanto para mí como para el equipo, fue extremadamente flexible 
              y divertido tener que elegir <Mark>diferentes ubicaciones</Mark> con los compañeros cada vez. 
            </p>
             <Avatar
              image={userSixImg}
              name="Ricardo Rico"
              title="Co-founder Acme Inc"
             />
          </div>
        </div>
      </div>  
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;

//verificando que los cambios se suban a git