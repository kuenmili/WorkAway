import Link from 'next/link'
import Image from 'next/image'
import dalma from "../public/img/dalma.jpg";
import ricardo from "../public/img/ricardo.jpg";
import mili from "../public/img/mili.jpg";
import nico from "../public/img/nico.jpg";
import lucio from "../public/img/lucio.jpg";
import camilo from "../public/img/camilo.jpg";


export default function About () {
  return (
    <div className="w-full">
                    <Link href="/home" className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5 hover:bg-indigo-500">Back</Link>
                <nav className="container p-8 mx-auto lg:justify-between xl:px-0">
                  <div className="w-full lg:w-auto">
                      <span className="flex items-center space-x-2 text-4xl 
                      font-bold text-indigo-800 dark:text-gray-100 ">
                        <span>
                          <Image
                            src="/img/logo2.svg"
                            alt=""
                            width="50"
                            height="40"
                            className=''
                            />
                          </span>
                          <span>WorkAway</span>
                        </span>
                      </div>
                    </nav>
                    <div className="container mx-auto mt-8">
    <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <Image className="rounded-full w-48 h-48 mx-auto hover:scale-125 transition duration-300" 
              width="100"
              height="90"
              src={dalma}
              alt="Foto de perfil 1"/>
              <h3 className="text-xl font-semibold mt-4">Dalma Nicolau</h3>
              <p className="text-gray-600">Full stack developer</p>
            </div>
            <div className="text-center">
              <Image className="rounded-full w-48 h-48 mx-auto hover:scale-125 transition duration-300" 
              src={ricardo} 
              alt="Foto de perfil 2"
              width="100"
              height="90"/>
              <h3 className="text-xl font-semibold mt-4">Ricardo Rico</h3>
              <p className="text-gray-600">Full stack developer</p>
            </div>
            <div className="text-center">
              <Image className="rounded-full w-48 h-48 mx-auto hover:scale-125 transition duration-300" 
              src={camilo} 
              alt="Foto de perfil 2"
              width="100"
              height="90"/>
              <h3 className="text-xl font-semibold mt-4">Camilo Acosta</h3>
              <p className="text-gray-600">Full stack developer</p>
            </div>
            <div className="text-center">
              <Image className="rounded-full w-48 h-48 mx-auto hover:scale-125 transition duration-300" 
              src={mili} 
              alt="Foto de perfil 2"
              width="100"
              height="90"/>
              <h3 className="text-xl font-semibold mt-4">Milagros Kuen</h3>
              <p className="text-gray-600">Full stack developer</p>
            </div>
            <div className="text-center">
              <Image className="rounded-full w-48 h-48 mx-auto hover:scale-125 transition duration-300" 
              src={lucio} 
              alt="Foto de perfil 2"
              width="100"
              height="90"/>
              <h3 className="text-xl font-semibold mt-4">Lucio Campos</h3>
              <p className="text-gray-600">Full stack developer</p>
            </div>  <div className="text-center">
              <Image className="rounded-full w-48 h-48 mx-auto hover:scale-125 transition duration-300" 
              src={nico} 
              alt="Foto de perfil 2"
              width="100"
              height="90"/>
              <h3 className="text-xl font-semibold mt-4">Nicolas Fucci</h3>
              <p className="text-gray-600">Full stack developer</p>
            </div>
          </div>
      </div>    
  </div>
                  
       
  )
}    