import Navbar from "../components/navbar";
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

export default function Login() {

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl">
                    <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">Log in</h2>
                    <p className="mb-6 text-center text-gray-400 ">Access your WorkAway account</p>

                    <div className="mb-4">
                        <label htmlFor="email" className="text-black mb-2 block">Email</label>
                        <input type="email" id="email" placeholder="name@adress.com" className="w-full bg-white border border-indigo-300 rounded-full py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="text-black mb-2 block">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" className="w-full bg-white border border-indigo-300 rounded-full py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black" />
                    </div>

                    <div className="flex justify-center">
                        <button className="w-full  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none">Log in</button>
                    </div>



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
                        Don´t have an account yet? <a href="/" className="text-indigo-600">Sign up</a>.
                    </p>
                </div>
            </div>
        </>
    );
}
