import Container from './container';
import Image from 'next/image';
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/router';


const UpdateProfile = () => {
debugger;
    const router = useRouter();
    const {profile} = router.query;
    console.log(profile);

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile_image, setProfile_image] = useState("");
    const [cellphone_number, setCellphoneNumber] = useState("");

  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
  };
  
  const handleImageChange = (e) => {
    setProfile_image(e.target.value);
  };
  
  const handleLastNameChange = (e) => {
      setLastName(e.target.value);
  };
  
  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };
  
  const handleCellphoneNumberChange = (e) => {
      setCellphoneNumber(e.target.value);
  };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Enviar los datos del formulario a la base de datos
          const response = await axios.put(`http://localhost:3001/users/${profile.id}`, {
              first_name,
              last_name,
              email,
              password,
              cellphone_number,
              profile_image
          });
  
          console.log("Formulario enviado exitosamente");
          console.log("Respuesta del servidor:", response.data);
  
          // Redireccionar a otra página después de enviar el formulario exitosamente
          router.push(`/users/${profile.id}`);
      } catch (error) {
          console.log("Ocurrió un error al enviar el formulario:", error.message);
      }
  };
    return(
        <div>
          <Container className="container mx-auto py-10 px-2 ">
           <label>
            <input type="text" name="first_name" />
           </label>
            <h1>Hello</h1>
           <label>
            <input type="text" name="last_name" />
           </label>

           <label>
            Email: 
            <input type="text" name="email" />
           </label>

           <label>
            <input type="text" name="image" />
           </label>

           <label>
            <input type="text" name="cellphone_number" />
           </label>

           <button onClick={handleSubmit}>Update Profile</button>
          </Container>
           
        </div>
      );

};

export default UpdateProfile;