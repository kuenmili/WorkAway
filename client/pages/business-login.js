import Navbar from "../components/navbar";
import Footer from "../components/footer";

const loginBusiness = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
        <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">
          Iniciar sesión como preveedor
        </h2>
        <p className="mb-6 text-center text-gray-400 ">
          Gestiona tu cuenta WorkAway
        </p>

        {/*Login form */}
        <form>
          {/*Email input */}
          <div className="mb-6">
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                placeholder="nombre@direccion.com"
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>

            {/*Password input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="password"
                  id="password"
                  placeholder="ingresa tu contraseña"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
              </div>
            </div>

            {/*Log in button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-3/4 mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none"
              >
                Ingresa
              </button>
            </div>

            {/*Redirect to Signup form */}
            <p className="mt-4 text-center text-gray-500">
              ¿No tienes cuenta aún?{" "}
              <a href="/business-signup" className="text-indigo-600">
                Regístrate
              </a>
              .
            </p>
          </div>
        </form>

        <div className="absolute inset-x-0 bottom-0 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default loginBusiness;
