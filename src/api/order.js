import api from "./api";

async function createOrder(data) {
  return await api.post("/api/orders", data);
}

async function getOrders() {
  return await api.get("/api/orders");
}

async function getOrdersByUser(userId) {
  return await api.get(`/api/orders/user/${userId}`);
}

export { createOrder, getOrders, getOrdersByUser };