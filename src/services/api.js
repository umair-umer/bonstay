import axios from 'axios';
import { useSelector } from 'react-redux';

const API_BASE_URL = 'https://bonstay.democlientlink.com/api/v1/bonstay';
export const baseImageUrl = 'https://bonstay.democlientlink.com/';
export const apiCall = async (endpoint, data, method = 'post') => {
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
      headers: {
        'Content-Type': 'application/json', // Set the content type to application/json
      },
    });
    return response.data;
  } catch (error) {
    throw error.response 
  }
};
export const Login = async (endpoint, data, method = 'post') => {
  
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
     headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.error : error.message;
  }
};
