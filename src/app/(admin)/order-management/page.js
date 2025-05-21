"use client";
import { getOrders } from "@/src/api/order";
import { useState } from "react";

function OrderManagementPage() {
  const [orders, setOrders] = useState([]);
  getOrders()
    .then((response) => setOrders(response.data))
    .catch((error) => console.log(error));

  return (
    <div>
      {orders.map((order) => (
        <ul key={order.orderNumber} className="py-5">
          {order?.orderItems.map((item, index) => (
            <li key={index}>{item.product?.name}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default OrderManagementPage;