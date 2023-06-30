import axios from "axios";

const ApiCaller = async () => {
  try {
     const response = await axios.get("http://localhost:3001/users");
    //const response = await axios.get("https://apimocha.com/workaway/users");
    console.log(response.data)
    return response.data;
    // console.log(response.data.map(item => item.email));
    // return response.data.map(item => item.email); // Devuelve solo el array de emails
  } catch (error) {
    console.error(error);
    return []; // Devuelve un array vacío en caso de error
  }
};

export default ApiCaller;
