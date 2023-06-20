import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

export default function Login() {

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 ">
                <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
                    <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">Log in</h2>
                    <p className="mb-6 text-center text-gray-400 ">Access your WorkAway account</p>

                    {/* Input email */}
                    <div className="mb-6 ">
                        {/* <label htmlFor="email" className="text-black mb-2 block">Email</label> */}
                        <div className="flex flex-col">
                            <input
                                type="email"
                                id="email"
                                placeholder="name@adress.com"
                                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                            />
                        </div>
                    </div>

                    {/* Input password */}
                    <div className="mb-6">
                        {/* <label htmlFor="email" className="text-black mb-2 block">Email</label> */}
                        <div className="flex flex-col">
                            <input
                                type="password"
                                id="password"
                                placeholder="enter your password"
                                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                            />
                        </div>
                    </div>     

                    {/* Botón login */}
                    <div className="flex justify-center">
                        <button className="w-3/4  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none">Log in</button>
                    </div>


                    {/* Iconos de google, facebook, apple */}
                    <div className="mt-6 flex justify-center">
                        <button className="mr-2 bg-white hover:bg-gray-200 p-2 rounded-full">
                            <FaGoogle size={24} color="#DB4437" />
                        </button>
                        <button className="mr-2 bg-white hover:bg-gray-200 p-2 rounded-full">
                            <FaFacebook size={24} color="#1877F2" />
                        </button>
                        <button className="bg-white hover:bg-gray-200 p-2 rounded-full">
                            <FaApple size={24} color="#000000" />
                        </button>

                    </div>
                    <p className="mt-4 text-center text-gray-500">
                        Don´t have an account yet? <a href="/signup" className="text-indigo-600">Sign up</a>.
                    </p>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 ">
                <Footer />
            </div>
        </>
    );
}
