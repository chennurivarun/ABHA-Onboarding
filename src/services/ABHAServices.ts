import axios from 'axios';

// Replace with the sandbox URL for ABHA APIs
const BASE_URL = 'https://sandbox.abdm.gov.in/sandbox/api';

export const createABHAAccount = async (aadhaar, abhaAddress) => {
  try {
    const response = await axios.post(`${BASE_URL}/createABHA`, { aadhaar, abhaAddress });
    return response.data;
  } catch (error) {
    console.error('ABHA Creation error:', error);
    return { success: false };
  }
};

export const updateProfile = async (name, contact) => {
  try {
    const response = await axios.post(`${BASE_URL}/updateProfile`, { name, contact });
    return response.data;
  } catch (error) {
    console.error('Profile Update error:', error);
    return { success: false };
  }
};

export const loginABHA = async (abhaNumber, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { abhaNumber, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    return { success: false };
  }
};
