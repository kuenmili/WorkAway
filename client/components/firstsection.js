import Image from "next/image";
import Container from "./container";
import coworkimg1 from "../public/img/cowork1.jpg";

const FirstSection = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            "La solución para trabajar desde <Mark>cualquier lugar</Mark>, diseñada para las necesidades de tu equipo"
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Una suscripción, miles de escritorios y salas de reuniones.
              Paga solo por lo que usa tu equipo. Sin compromiso</p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/home"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-800 rounded-md ">
                Ingresar
              </a>
              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={coworkimg1}
              width="816"
              height="817"
              className={"object-fill w-full h-full rounded-md"}
              alt=""
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      
    </>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="   
          text-decoration: bg-transparent underline decoration-yellow-300 decoration-double dark:text-white">
        {props.children}
      </mark>{" "}
    </>
  );
}


export default FirstSection;