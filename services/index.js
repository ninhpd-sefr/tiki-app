import axios from 'axios';
import API from './API';



export const getAllProductFromAPI = async () =>{
  const response = await axios.get(`${API}/v1/product`)
 
  return response.data
  
 }

 export const getAllSellerFromAPI = async () =>{
  const response = await axios.get(`${API}/v1/seller`)
 
  return response.data
  
 }
