import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { createBusiness } from "../redux/actions/business";
import Navbar from "../components/navBusiness";
import Footer from "../components/footer";
import { createBusinessValidation } from "../components/validations";

const signupBusiness = () => {
  const dispatch = useDispatch();
  const history = useRouter();

  const [input, setInput] = useState({
    name: "",
    cuit: "",
    email: "",
    password: "",
    cellphone_number: "",
    address: "",
  });

  const [errors, setError] = useState({
    name: "",
    cuit: "",
    email: "",
    password: "",
    cellphone_number: "",
    address: "",
  });

  const handlerChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setError(
      createBusinessValidation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    // ----------------------------------------------
    // Verificar campos requeridos
    if (Object.values(input).some((value) => value === "")) {
      // Al menos un campo requerido está vacío, mostrar mensaje de error
      alert("Por favor, completa todos los campos requeridos.");
      setError({
        name: "Campo requerido",
        cuit: "Campo requerido",
        email: "Campo requerido",
        password: "Campo requerido",
        cellphone_number: "Campo requerido",
        address: "Campo requerido",
      });
      return;
    }

    dispatch(createBusiness(input));

    alert("Se creó tu perfil con exito!");

    setInput({
      name: "",
      cuit: 0,
      email: "",
      password: "",
      cellphone_number: 0,
      address: "",
    });

    history.push("/dashboard");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mb-8 mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
        <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">
          Regístrate como proveedor
        </h2>
        <p className="mb-6 text-center text-gray-400 ">
          Publica tus espacios de Co-Working
        </p>

        {/*Signup Form */}
        <form>
          <div className="mt-6">
            {/*Name input */}
            <div className="flex flex-col">
              <input
                value={input.name}
                name="name"
                onChange={handlerChange}
                type="text"
                placeholder="Nombre"
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
              {errors.name ? (
                <p className="text-red-500 ml-20">{errors.name}</p>
              ) : (
                ""
              )}
            </div>
            {/*CUIT input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="number"
                  value={input.cuit}
                  name="cuit"
                  onChange={handlerChange}
                  placeholder="CUIT"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
                {errors.cuit ? (
                  <p className="text-red-500 ml-20">{errors.cuit}</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/*Email input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={handlerChange}
                  placeholder="nombre@direccion.com"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
                {errors.email ? (
                  <p className="text-red-500 ml-20">{errors.email}</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/*Passwork input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={handlerChange}
                  placeholder="Contraseña"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
                {errors.password ? (
                  <p className="text-red-500 ml-20">{errors.password}</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/*Number input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="tel"
                  value={input.cellphone_number}
                  name="cellphone_number"
                  onChange={handlerChange}
                  placeholder="Numero de teléfono"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
                {errors.cellphone_number ? (
                  <p className="text-red-500 ml-20">
                    {errors.cellphone_number}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/*Address input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  value={input.address}
                  name="address"
                  onChange={handlerChange}
                  placeholder="Dirección"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
                {errors.address ? (
                  <p className="text-red-500 ml-20">{errors.address}</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/*Terms and conditions checkbox */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                />
                <p className="ml-2 text-gray-500">
                  Acepto la{" "}
                  <a href="#" className="text-indigo-600 underline">
                    política de privacidad y los términos de servicio
                  </a>
                  de WorkAway.
                </p>
              </div>
            </div>

            {/*Signup button */}
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={handlerSubmit}
                className="w-3/4 mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
              >
                Registrate
              </button>
            </div>

            {/*Redirect to login form */}
            <p className="mt-4 text-center text-gray-500">
              ¿ya tienes una cuenta?
              <a href="/business-login" className="text-indigo-600">
                Inicia sesión
              </a>
              .
            </p>
          </div>
        </form>
      </div>

      <div className=" mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default signupBusiness;