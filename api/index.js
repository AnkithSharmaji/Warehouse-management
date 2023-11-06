import axios from 'axios';
import { getWarehouses, getWarehouseById } from './warehouses';

// Define API routes for warehouses
export const fetchWarehouses = async () => {
  const response = await getWarehouses();
  return response;
};

export const fetchWarehouseDetails = async (id) => {
  const response = await getWarehouseById(id);
  return response;
};
