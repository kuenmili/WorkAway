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

const benefitOne = {
  title: "lorem ipsum dolor sit amet",
  desc: "lorem ipsum dolor sit amet",
  image: benefitOneImg,
  bullets: [
    {
      title: "lorem ipsum dolor sit amet",
      desc: "lorem ipsum dolor sit amet",
      icon: <FaceSmileIcon />,
    },
    {
      title: "lorem ipsum dolor sit amet",
      desc: "lorem ipsum dolor sit amet",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "lorem ipsum dolor sit amet",
      desc: "lorem ipsum dolor sit amet",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "lorem ipsum dolor sit amet",
  desc: "lorem ipsum dolor sit amet",
  image: benefitTwoImg,
  bullets: [
    {
      title: "lorem ipsum dolor sit amet",
      desc: "lorem ipsum dolor sit amet",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "lorem ipsum dolor sit amet",
      desc: "lorem ipsum dolor sit amet",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "lorem ipsum dolor sit amet",
      desc: "lorem ipsum dolor sit amet",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
