import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getWarehouses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getWarehouseById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
