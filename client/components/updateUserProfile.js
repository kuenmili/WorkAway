import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uploadImage } from './firebase/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { putUser } from '../redux/actions/users';
import {  useSelector, useDispatch } from 'react-redux';


const UpdateProfile = () => {

  const user = useSelector((state) => state.auth?.user)
  const router = useRouter();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    password: user?.password || "",
    profile_image: user?.profile_image || "",
    cellphone_number: user?.cellphone_number || "",
  });
  const [imagePreview, setImagePreview] = useState(user?.profile_image || "");
  const [errorImage, setErrorImage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (
      file.type !== 'image/jpeg' &&
      file.type !== 'image/png' &&
      file.type !== 'image/jpg'
    ) {
      setErrorImage('Tipo de archivo inválido');
      return;
    }
    try {
      const task = uploadImage(file);
      task.on(
        'state_changed',
        (snapshot) => {
          setIsEditing(true)
          const percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percentage);
        },
        (error) => {
          console.log(error);
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((url) => {
            setIsEditing(false)
            setData((prevData) => ({
              ...prevData,
              profile_image: url,
            }));
            setImagePreview(url);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateImage = async () => {
    try {
      const fileInput = document.getElementById('avatar');
      fileInput.click();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    dispatch(putUser(user?.id, data))
  };



  return (

    <form onSubmit={handleUpdateProfile} className="mx-auto bg-white rounded-lg shadow-2xl p-6 dark:bg-[#26272c] shadow-[rgba(0, 0, 0, 0.16)] my-20">
      <div className="flex justify-evenly items-start text-sm">
        <div className="relative">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={imagePreview}
              alt="Profile"
            />
          </div>
          <button
            type="button"
            onClick={handleUpdateImage}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-indigo-700 text-white flex items-center justify-center -mb-2 -mr-2"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <input
            className="hidden"
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleUploadImage}
          />
        </div>

        <div className="flex-1 ml-20">
          <div className="p-6">
            <div className="mb-4">
              <label className="block mb-1 dark:text-white">Nombre:</label>
              <input
                type="text"
                name="first_name"
                placeholder="Nombre"
                value={data?.first_name}
                onChange={handleInputChange}
                className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1  mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Apellido:</label>
              <input
                type="text"
                name="last_name"
                placeholder="Apellido"
                value={data?.last_name}
                onChange={handleInputChange}
                className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1 mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Teléfono:</label>
              <input
                type="text"
                name="cellphone_number"
                placeholder="Numero de celular"
                value={data?.cellphone_number}
                onChange={handleInputChange}
                className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1  mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={data?.email}
                onChange={handleInputChange}
                className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1  mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Contraseña:</label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={data?.password}
                onChange={handleInputChange}
                className="block w-full dark:bg-transparent dark:text-white bg-white border border-gray-300 rounded-md py-2 px-4 mt-1  mr-8 focus:outline-none focus:border-indigo-600  hover:border-indigo-600"
              />
            </div>

            <div className="flex justify-center">
              <Link href= {`http://localhost:3000/users/${user?.id}`} className='my-2 mx-2 px-6 py-3 text-center inline-block text-white bg-indigo-700 border border-transparent rounded-md hover:bg-blue-700'>
              Volver
              </Link>

              <button
                type="submit"
                className="my-2 mx-2  px-6 py-3 text-center inline-block text-white bg-indigo-700 border border-transparent rounded-md hover:bg-blue-700"
              >
                Actualizar
              </button>


            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateProfile;
