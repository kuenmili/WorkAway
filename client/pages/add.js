import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { uploadImage } from '../components/firebase/client';
import { useDispatch } from "react-redux";
import { addCoworkSpace } from "../redux/actions/coworkSpaces";

function Add() {
  const [data, setData] = useState({
    name: '',
    about: '',
    services: '',
    images: [],
    price: '',
    location: '',
    address: '',
  });

  const dispatch = useDispatch(); 

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleUploadImage = (e) => {
    const files = Array.from(e.target.files);
    setData((prevData) => ({
      ...prevData,
      images: prevData.images.concat(files),
    }));
  };

  const handleRemoveImage = (index) => {
    setData((prevData) => {
      const newImages = [...prevData.images];
      newImages.splice(index, 1);
      return {
        ...prevData,
        images: newImages,
      };
    });
  };

  const router = useRouter();

  const handleReserveClick = () => {
    const { name, about, services, images, location, address, price } = data;
    if (
      name === '' ||
      about === '' ||
      services === '' ||
      images.length === 0 ||
      price === '' ||
      location === '' ||
      address === ''
    ) {
      alert("Por favor complete todos los campos.");
      return;
    }
    console.log("Información enviada:", {
      name,
      about,
      services,
      images,
      location,
      address,
      price,
    });

    dispatch(addCoworkSpace({
      name: name,
      about: about,
      images: images,
      price: price,
      location: location,
      address: address,
    }));

    alert("Reserva confirmada");
    // Redirige a la página principal después de la confirmación
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validar campos
    const { name, about, services, images, price, location, address } = data;
    const errors = {};
  
    if (name.trim() === '') {
      errors.name = 'Por favor ingrese un nombre';
    }
  
    if (about.trim() === '') {
      errors.about = 'Por favor ingrese una descripción';
    }
  
    if (services.trim() === '') {
      errors.services = 'Por favor ingrese los servicios';
    }
  
    if (images.length === 0) {
      errors.images = 'Por favor seleccione al menos una imagen';
    }

    if (price.trim() === '') {
      errors.price = 'Por favor ingrese el precio';
    }
  
    if (location.trim() === '') {
      errors.location = 'Por favor ingrese la ubicación';
    }
  
    if (address.trim() === '') {
      errors.address = 'Por favor ingrese la dirección';
    }
  
    // Verificar si hay errores
    if (Object.keys(errors).length > 0) {
      // Manejar errores de los campos
      console.log(errors);
      return;
    }
  
    // No hay errores, ejecutar handleReserveClick
    handleReserveClick();
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
        <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">
          Add a new Coworking
        </h2>
        <p className="mb-6 text-center text-gray-400 ">
          Create a new WorkAway space.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Input Name of space */}
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={data.name}
              onChange={handleInputChange}
              className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-white"
            />
          </div>
          {/* Input about */}
          <div className="flex flex-col">
            <input
              type="text"
              name="about"
              placeholder="about"
              value={data.about}
              onChange={handleInputChange}
              className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
            />
          </div>
          {/* Input services */}
          <div className="flex flex-col">
            <input
              type="text"
              name="services"
              placeholder="services"
              value={data.services}
              onChange={handleInputChange}
              className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
            />
          </div>
          {/* Input image */}
          <div className="flex flex-col">
            <input
              type="file"
              name="images"
              placeholder="Imagen"
              accept="image/jpeg, image/png, image/jpg"
              onChange={handleUploadImage}
              multiple
              className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-white"
            />

            <div>
              {data.images &&
                data.images.map((file, index) => (
                  <div key={file.name} className="flex items-center">
                    <div>{file.name}</div>
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="ml-2 text-red-500"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
            </div>
            <div id="image-preview" className="space-y-2">
              {data.images &&
                data.images.map((file) => (
                  <img
                    key={file.name}
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-24 h-auto"
                  />
                ))}
            </div>
          </div>
          <div className="flex flex-col">
            <input
              type="number"
              name="price"
              placeholder="price"
              value={data.price}
              onChange={handleInputChange}
              className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-white"
            />
          </div>

          {/* Input address */}
          <div className="flex flex-col">
            <input
              type="text"
              name="address"
              placeholder="address"
              value={data.address}
              onChange={handleInputChange}
              className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
            />
          </div>
          {/* Input location */}
          <div className="flex flex-col">
            <input
              type="text"
              name="location"
              placeholder="location"
              value={data.location}
              onChange={handleInputChange}
              className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
            />
          </div>
          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Add;




