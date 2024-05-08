import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test'; 

const register = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/register`);
    return response.data; 
  } catch (error) {
    console.error("Registration Error:", error); 
    throw error; 
  }
}

const fetchProducts = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error); 
    throw error; 
  }
}

export { register, fetchProducts };
