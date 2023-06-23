import Navbar from "../components/navbar";
import Footer from "../components/footer";

const signupBusiness = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
        <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">
          Regístrate como proveedor
        </h2>
        <p className="mb-6 text-center text-gray-400 ">
          Publica tus espacios de Co-Working
        </p>
        <form>
          <div className="mb-6">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Nombre"
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Apellido"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="absolute inset-x-0 bottom-0 ">
        <Footer />
      </div>
    </div>
  );
};

export default signupBusiness;
