import config from "@/src/config";
import axios from "axios";
import api from "./api.js";

async function createProduct(data) {
  return await api.post(`/api/products`, data);
}

async function deleteProduct(id) {
  return await api.delete(`/api/products/${id}`);
}

async function getProducts() {
  return await axios.get(`${config.apiUrl}/api/products`);
}

async function getProductByUser() {
  return await api.get(`/api/products/users`);
}

async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function getCategories() {
  return await axios.get(`${config.apiUrl}/api/products/categories`);
}

async function updateProduct(id, data) {
  return await api.put(`/api/products/${id}`, data);
}

async function getBrands() {
  return await axios.get(`${config.apiUrl}/api/products/brands`);
}


export {
  createProduct,
  getCategories,
  getProductById,
  getProductByUser,
  getProducts,
  updateProduct,
  deleteProduct,
  getBrands
};

// yaha hamile jun jun ma authentication chainxa yaniki authToken chainxa tesma api. use gareko xau ra junma chaidaina tesma config wala use garekox xau 