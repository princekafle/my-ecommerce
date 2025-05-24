import api from "./api";

async function createOrder(data) {
  return await api.post("/api/orders", data);
}


async function getOrders() {
  return await api.get("/api/orders");
}

async function getOrdersByUser(userId, status) {
  return await api.get(`/api/orders/user/${userId}?status=${status}`);
}


async function checkoutOrder(id, data) {
  return await api.put(`/api/orders/${id}/checkout`, data);
}

async function confirmOrder(id, data) {
  return await api.put(`/api/orders/${id}/confirm`, data);
}

async function deleteOrder(id) {
  return await api.delete(`/api/orders/${id}`);
}

async function updateOrderStatus(id, data) {
  return await api.put(`/api/orders/${id}/status`, data);
}

export { createOrder, getOrders, getOrdersByUser,checkoutOrder,confirmOrder, deleteOrder, updateOrderStatus };