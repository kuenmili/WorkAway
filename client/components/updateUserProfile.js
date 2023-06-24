'use Client';
import { uploadImage } from './firebase/client';
import Container from './container';
import axios from "axios";
import React, { useState } from "react";



const UpdateProfile = () => {

    const [data, setData ] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        profile_image: "",
        cellphone_number: "",
    })    
    const [imagePreview, setImagePreview] = useState("")    
    const [errorImage, setErrorImage] = useState('');

    const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
    }
   

    const handleUploadImage = async e => {
      const file = e.target.files[0]
 
      if (!file) return;
      if (
        file.type !== 'image/jpeg' &&
        file.type !== 'image/png' &&
        file.type !== 'image/jpg'
      ){
        setErrorImage('Tipo de archivo invalido')
        return
      }
      try {

        const task = uploadImage(file)
        task.on(
          'state_changed',
          snapshot => {
            const percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(percentage)
          },
          error => {
            // if there is an error, console.log it
            console.log(error)
          },
          () => {
            // when the image is uploaded, get the url
            task.snapshot.ref.getDownloadURL().then(url => {
              // accion con la url de la imagen
              console.log(url);
              setData(
                { 
                  ...data,
                  profile_image: url
                }
                ),
                console.log(data.profile_image);
              setImagePreview(url)
            })
          }
        )
      } catch (error) {
        console.log(error)
      }
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 

            await axios.put(
              'http://localhost:3001/users/648b9db994bb688e0ba6d9df', //ESTA HARDCODEADO EL ID DEL PATH
                data
              ).then((res)=>{
                  alert("User updated successfully")
            } ); 
            
        } catch (error) {
            console.log(error);
        }
  };

    return(
        <div>
          <Container className="container mx-auto py-10 px-2 ">
           <form onSubmit={handleSubmit}>
                <h2>Edit Profile</h2>
                <label> First Name: </label>
                <input type="text" name="first_name" value={data.first_name} onChange={handleInputChange} />

                <label> Last Name: </label>
                <input type="text" name="last_name" value={data.last_name} onChange={handleInputChange} />

                <label> Email: </label>
                <input type="text" name="email" value={data.email} onChange={handleInputChange} />

                <label> Password: </label>
                <input type="text" name="password" value={data.password} onChange={handleInputChange} />

                <label> Cellphone Number: </label>
                <input type="text" name="cellphone_number" value={data.cellphone_number} onChange={handleInputChange} />
                
                <div className='mb-4'>
                    <label className='block mb-1'> Profile Image: </label>
                    <div className='mb-4 flex flex-col md:flex-row'>
                        <div className='flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4'>
                          <label htmlFor= 'avatar'/>
                            <img 
                            className= "w-14 h-14 rounded-full"
                            src= { imagePreview}
                            width = "55px"
                            height = "60px"/>
                        </div>
                        <div className='md:w-2/3 lg:w-80'>
                            <input 
                            className='form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip=padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text=gray-700 focus:bg-white focus:border-blue-600focus:outline-none mt-6 '
                            type="file" 
                            id="avatar" 
                            name= "avatar" 
                            onChange={handleUploadImage}/>
                            
                        </div>
                    </div>                
                </div>
                <button type='submit' className='my=2 px=4 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded=md hover:bg-blue-700'>Update</button>

           </form>
          </Container>
           
        </div>
      );

};

export default UpdateProfile;