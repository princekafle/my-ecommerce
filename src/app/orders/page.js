"use client";
import { getOrdersByUser } from "@/src/api/orders";
import OrderCard from "@/src/components/orders/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getOrdersByUser(user?.id)
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error.response.data));
  }, [user?.id]);

  return (
    <section className="max-w-screen-xl container mx-auto px-4 py-10">
      {orders?.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </section>
  );
}

export default OrdersPage;