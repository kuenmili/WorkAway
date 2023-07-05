import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/navBusiness";
import Footer from "../components/footer";
import { businessValidations } from "../components/validations";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { login } from "../redux/actions/auth";

const LoginBusiness = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const queries = router.query;
  if (queries.token) {
    localStorage.setItem("token", queries.token);
    localStorage.setItem("isAdmin", "false");

    dispatch(login({}));
  }
  const { user, loggedIn, isAdmin, error } = useSelector((state) => state.auth);

  const [businessData, setBusinessData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleOnChange = (event) => {
    setBusinessData({
      ...businessData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      businessValidations({
        ...businessData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({
      email: "",
      password: "",
      error: "",
    });

    dispatch(login(businessData));
  };

  useEffect(() => {
    if (user) {
      console.log("USER", user);
      if (isAdmin) {
        router.push("/dashboard");
        return;
      } else {
        router.push("/home");
        return;
      }
    }

    if (error) {
      setErrors({ ...errors, error: error });
    }
  }, [user, loggedIn, isAdmin, error]);

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
        <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">
          Iniciar sesión
        </h2>
        <p className="mb-6 text-center text-gray-400 ">
          Gestiona tu cuenta WorkAway
        </p>
        {errors?.error ? <p>{errors.error}</p> : ""}
        {/*Login form */}
        <form>
          {/*Email input */}
          <div className="mb-6">
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                value={businessData.email}
                id="email"
                onChange={handleOnChange}
                placeholder="nombre@direccion.com"
                className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
              {errors?.email ? <p>{errors.email}</p> : ""}
            </div>

            {/*Password input */}
            <div className="mt-6">
              <div className="flex flex-col">
                <input
                  type="password"
                  name="password"
                  value={businessData.password}
                  id="password"
                  onChange={handleOnChange}
                  placeholder="ingresa tu contraseña"
                  className="w-3/4 mx-auto bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
                />
                {errors?.password ? <p>{errors.password}</p> : ""}
              </div>
            </div>

            {/*Log in button */}
            <div className="flex justify-center">
              <button
                //disabled= {errors?.email || errors?.password}
                type="submit"
                onClick={handleSubmit}
                className="w-40 mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-2 rounded-md focus:outline-none"
              >
                Ingresa
              </button>
            </div>
            <div>
              <div>
                <button
                  className="ml-72 mt-5"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "http://localhost:3001/auth/google";
                  }}
                >
                  {" "}
                  {<FaGoogle size={24} color="#DB4437" />}{" "}
                </button>
              </div>
            </div>
            {/*Redirect to Signup form */}
            <p className="mt-4 text-center text-gray-500">
              ¿No tienes cuenta aún? Regístrate como{" "}
              <Link href="/business-signup" className="text-indigo-600">
                Empresa{" "}
              </Link>
              o como{" "}
              <Link href="/signup" className="text-indigo-600">
                Cliente
              </Link>
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

export default LoginBusiness;
