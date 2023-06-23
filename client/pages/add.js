import Navbar from "../components/navbar";
import Footer from "../components/footer";

function add() {
  return (
    <div>
      <Navbar />

      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
        <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">
          Add a new Coworking
        </h2>
        <p className="mb-6 text-center text-gray-400 ">
          Create a new WorkAway space.
        </p>
        <form>
          {/*Input Name of space*/}
          <div className="mb-6">
            <div className="flex flex-col">
              <input
                type="input"
                id="name"
                placeholder="Space Name"
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>
            <div className="mt-6">
              {/*Input address of space*/}
              <div className="flex flex-col">
                <input
                  type="input"
                  id="addres"
                  placeholder="Space address"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
              </div>
              {/*add rooms*/}
              <div className="mt-6">
                <div className="flex flex-col">
                  <input
                    type="input"
                    id="rooms"
                    placeholder="Rooms"
                    className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                  />
                </div>
              </div>
              {/*Add about */}
              <div className="mt-6">
                <div className="flex flex-col">
                  <input
                    type="input"
                    id="about"
                    placeholder="About"
                    className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="w-3/4 mt-6  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="absolute inset-x-0 bottom-0 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default add;
