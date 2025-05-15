import config from "@/src/config";
import axios from "axios";
import api from "./api.js";

async function getProducts() {
  return await api.get(`/api/products`);
}

async function getProductByUser() {
  return await api.get(`/api/products/users`);
}

async function getProductById(id) {
  return await api.get(`/api/products/${id}`);
}

async function getCategories() {
  return await api.get(`/api/products/categories`);
}


export { getProducts, getProductById, getProductByUser, getCategories };

