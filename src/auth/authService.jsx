import axios from 'axios';

const API_URL = 'http://localhost/api-tcg/v1/auth/index.php';

export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};