import Navbar from "../components/navbar";
import Footer from "../components/footer";

const signupBusiness = () => {
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
                type="text"
                placeholder="Nombre"
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>
            {/*CUIT input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="number"
                  placeholder="CUIT"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
              </div>
            </div>

            {/*Email input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="nombre@direccion.com"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
              </div>
            </div>

            {/*Passwork input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
              </div>
            </div>

            {/*Number input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="tel"
                  placeholder="Numero de teléfono"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
              </div>
            </div>

            {/*Address input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Dirección"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
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
                className="w-3/4 mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
              >
                Registrate
              </button>
            </div>

            {/*Redirect to login form */}
            <p className="mt-4 text-center text-gray-500">
              ¿ya tienes una cuenta?{" "}
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
