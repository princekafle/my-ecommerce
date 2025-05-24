"use client";
import OrdersTable from "@/src/components/orders/Table";
import { getOrders } from "@/src/api/orders";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderStatus } from "@/src/redux/order/orderSlice";
import Spinner from "@/src/components/Spinner";

function OrderManagementPage() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const { status } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    getOrders()
      .then((response) => setOrders(response.data))
      .catch((error) => toast.error(error.response.data, { autoClose: 750 }))
      .finally(() => {
        setLoading(false);
        dispatch(setOrderStatus(null));
      });
  }, [status, dispatch]);

  return (
    <section className="p-5">
      <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center justify-between pb-5 px-1">
        <h1 className="font-semibold text-2xl dark:text-white">
          Order Management
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center py-10">
          <Spinner className="h-10 w-10" />
        </div>
      ) : (
        <OrdersTable orders={orders} />
      )}
    </section>
  );
}

export default OrderManagementPage;