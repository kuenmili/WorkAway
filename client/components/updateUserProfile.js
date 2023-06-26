import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uploadImage } from './firebase/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

const UpdateProfile = () => {

  const router = useRouter();

  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    profile_image: '',
    cellphone_number: '',
  });
  const [imagePreview, setImagePreview] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const [errorImage, setErrorImage] = useState('');

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
          const percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percentage);
        },
        (error) => {
          console.log(error);
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((url) => {
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
    try {
      await axios.put(
        'http://localhost:3001/users/648b9db994bb688e0ba6d9df', //ESTA HARDCODEADO. NECESITO A USER DE AUTH
        data
      );
      alert('User updated successfully');
      router.push('http://localhost:3000/users/648b9db994bb688e0ba6d9df') //ESTA HARDCODEADO. NECESITO A USER DE AUTH
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleUpdateProfile} className="mx-auto max-w-2xl">
      <div className="flex items-start justify-start space-x-4">
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
          {/* Resto del formulario */}

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-2xl p-6 dark:bg-[#26272c] shadow-[rgba(0, 0, 0, 0.16)]">
            <div className="mb-4">
              <label className="block mb-1 dark:text-white">First Name:</label>
              <input
                type="text"
                name="first_name"
                placeholder="Nombre"
                value={data.first_name}
                onChange={handleInputChange}
                className="w-full  bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-white"
              />
            </div>

          
            <div className="mb-4">
              <label className="block mb-1">Last Name:</label>
              <input
                type="text"
                name="last_name"
                placeholder="Apellido"
                value={data.last_name}
                onChange={handleInputChange}
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={data.email}
                onChange={handleInputChange}
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={data.password}
                onChange={handleInputChange}
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Cellphone Number:</label>
              <input
                type="text"
                name="cellphone_number"
                placeholder="Numero de celular"
                value={data.cellphone_number}
                onChange={handleInputChange}
                className="w-full bg-white border border-indigo-300 rounded-md py-2 px-4 focus:outline-none focus:border-indigo-600 dark:text-black"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="my-2 px-4 text-center inline-block text-white bg-indigo-700 border border-transparent rounded-md hover:bg-blue-700"
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
