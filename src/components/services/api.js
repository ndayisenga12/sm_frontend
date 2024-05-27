import axios from 'axios';

const API_URL = 'http://localhost:2000';

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, { email, password });
    return data;
  } catch (error) {
    const { response } = error;
    if (response) {
      const { status, data } = response;
      throw new Error(JSON.stringify({ data, status }));
    } else {
      throw new Error('Network error');
    }
  }
};

export const signup = async (email, password, firstName, lastName) => {
  try {
    const { data } = await axios.post(`${API_URL}/signup`, { email, password, firstName, lastName });
    return data;
  } catch (error) {
    const { response } = error;
    if (response) {
      const { status, data } = response;
      throw new Error(JSON.stringify({ data, status }));
    } else {
      throw new Error('Network error');
    }
  }
};

export const enrollStudent = async (registrationNumber, courseId, courseName) => {
  try {
    const response = await axios.post(`${API_URL}/enrollments`, { registrationNumber, courseId, courseName });
    return response.data;
  } catch (error) {
    console.error('Detailed error information:', error.response || error.message || error);
    throw new Error('Network error');
  }
};


export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    throw new Error('Network error');
  }
};
