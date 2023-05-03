import axios from 'axios';
import API from './API';



const getAllProductFromAPI = async () =>{
  const response = await axios.get(`${API}/v1/product`)
 
  return response.data
  
 }


export default getAllProductFromAPI;