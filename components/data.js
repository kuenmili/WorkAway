import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/cowork2.jpg";
import benefitTwoImg from "../public/img/cowork3.jpg";
import benefitThreeImg from "../public/img/cowork4.jpg";
import benefitFourImg from "../public/img/cowork5.jpg";

const benefitOne = {
  title: "Red de espacio de trabajo flexible",
  desc: "Accede a diferentes espacios. Modifica y ajusta tu suscripción en cualquier momento",
  image: benefitOneImg,
  bullets: [
    {
      title: "Gestión de tu propia oficina",
      desc: "A través de nuestra aplicación, también puedes hacer que tu propia oficina esté" + 
      "disponible para que tus trabajadores la reserven",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Espacios de trabajo para equipos remotos",
      desc: "Ofrezca a todos la opción de acceder a una oficina cercana",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Oficinas donde las necesites",
      desc: "Espacios afiliados a la red o en donde se encuentre tu equipo de trabajo",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Oficinas flexibles,como nunca antes",
  desc: "Solo paga por lo que usas",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Red de espacio de trabajo flexible",
      desc: "Acceso instantáneo a centros de coworking listos para trabajar",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Configuración híbrida personalizada",
      desc: "Solución personalizada para tu equipo, con la combinación adecuada de espacios de trabajo flexibles y privados",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Gestión de tu propia oficina",
      desc: "A través de nuestra aplicación, también puedes hacer que tu propia oficina esté" + 
      "disponible para que tus trabajadores la reserven",
      icon: <SunIcon />,
    },
  ],
};


const benefitThree = {
  title: "Red complementaria de oficinas",
  desc: "Fortalece la cultura de la empresa, incluso fuera de la propia oficina",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Expandirse rápidamente a nuevos territorios",
      desc: "Trabaja desde cualquier parte del mundo sin preocuparse por el espacio de la oficina",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Sin contratos",
      desc: "Accede a diferentes espacios. Modifica y ajusta tu suscripción en cualquier momento",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Fácil configuración",
      desc: "Solo debes decidir si quieres que tu equipo tenga algún tipo de restricción"+ 
      "(ej. Número de reservas, presupuesto para uso de salas, localización)",
      icon: <SunIcon />,
    },
  ],
};


const benefitFour = {
  title: "Administración simple",
  desc: "Asistencia continua, fácil gestión del acceso del equipo y visibilidad completa del uso del servicio",
  image: benefitFourImg,
  bullets: [
    {
      title: "Reduce la huella de carbono",
      desc: "Cuando toda la empresa trabaja de forma remota," 
      + "disminuye el uso de oficinas tradicionales que generan contaminación.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Un lugar para oportunidades de networking.",
      desc: "Esto crea oportunidades para que los participantes conozcan gente nueva, establezcan relaciones y colaboren.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Recursos compartidos para usar",
      desc: "espacios para eventos y comodidades como cafeterías y salas de descanso",
      icon: <SunIcon />,
    },
  ],
};

export {benefitOne, benefitTwo, benefitThree, benefitFour};
