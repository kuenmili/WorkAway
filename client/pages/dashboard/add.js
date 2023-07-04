import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addCoworkSpace } from "../../redux/actions/coworkSpaces";
import { uploadImage } from "../../components/firebase/client";
import { RiArrowDropDownLine } from "react-icons/ri";
import Select from "react-select";
import Layout from "../../components/layout";

function Add() {
  const [data, setData] = useState({
    name: "",
    about: "",
    services: [],
    images: [],
    price: "",
    location: "",
    address: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const amenities = [
    "café",
    "Wi-Fi",
    "estacionamiento",
    "Pet friendly",
    "sillas ergonómicas",
    "escritorios amplios",
    "luz natural",
    "snack restaurant",
    "aire acondicionado",
    "música tranquila",
    "Standing Desk",
    "buffette",
    "oficinas individuales",
    "juegos de mesa",
    "café y agua",
  ];

  const handleInputChange = (event) => {
    if (event.target.name === "images") {
      const files = Array.from(event.target.files);
      const promises = files.map((file) => uploadImage(file));

      Promise.all(promises)
        .then((snapshots) =>
          Promise.all(
            snapshots.map((snapshot) => snapshot.ref.getDownloadURL())
          )
        )
        .then((downloadURLs) => {
          setData({
            ...data,
            images: [...data.images, ...downloadURLs], // Acumulamos las nuevas URL en el array existente
          });
        })
        .catch((error) => console.log(error));
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
    console.log(data);
  };

  const handleImageRemove = (index) => {
    const newImages = [...data.images];
    newImages.splice(index, 1);
    setData({
      ...data,
      images: newImages,
    });
  };

  const handleServicesChange = (selectedOptions) => {
    const selectedServices = selectedOptions.map((option) => option.value);
    setData({
      ...data,
      services: selectedServices,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (
      data.name.trim() === "" ||
      data.about.trim() === "" ||
      data.services.length === 0 ||
      data.images.length === 0 ||
      data.price.trim() === "" ||
      data.location.trim() === "" ||
      data.address.trim() === ""
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const coworkingData = {
      ...data,
      images: data.images,
    };

    console.log("Información enviada:", coworkingData);

    dispatch(addCoworkSpace(coworkingData));
    alert("Reserva confirmada");
  };

  const formatServiceOptions = () => {
    return amenities.map((amenity) => ({
      value: amenity,
      label: amenity,
    }));
  };

  return (
    <div className="flex flex-col">
      <Layout>
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
          <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">
            Agregar un nuevo espacio de trabajo
          </h2>
          <p className="mb-6 text-center text-gray-400 ">Crear un espacio</p>
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
                placeholder="Sobre el espacio"
                value={data.about}
                onChange={handleInputChange}
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>
            {/* Input services 2*/}
            <div className="flex flex-col">
              <div className="relative">
                <Select
                  placeholder="Seleccionar servicios"
                  isMulti
                  options={formatServiceOptions()}
                  value={data.services.map((service) => ({
                    value: service,
                    label: service,
                  }))}
                  onChange={handleServicesChange}
                  className="w-full bg-white border border-indigo-300 rounded-md py-2 pl-4 pr-12 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
                <RiArrowDropDownLine className="absolute top-3 right-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
            {/* Input images */}
            {/* Input images */}

            <div className="flex flex-col">
              <input
                type="file"
                placeholder="Imagenes del espacio"
                name="images"
                onChange={handleInputChange}
                multiple
                title="Imagenes del espacio"
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>

            {/* Render previous images */}
            {data.images.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {data.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                    <button
                      type="button"
                      onClick={() => handleImageRemove(index)}
                      className="absolute top-2 right-2 bg-red-500 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Input price */}
            <div className="flex flex-col">
              <input
                type="text"
                name="price"
                placeholder="Precio por dia en usd"
                value={data.price}
                onChange={handleInputChange}
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>
            {/* Input location */}
            <div className="flex flex-col">
              <input
                type="text"
                name="location"
                placeholder="Localidad, Provincia"
                value={data.location}
                onChange={handleInputChange}
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>
            {/* Input address */}
            <div className="flex flex-col">
              <input
                type="text"
                name="address"
                placeholder="Direccion"
                value={data.address}
                onChange={handleInputChange}
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Crear espacio
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Add;