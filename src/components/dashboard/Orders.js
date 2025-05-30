import { getOrders } from "@/src/api/order";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/src/constants/orderStatus";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardCard from "./Card";
import Spinner from "../Spinner";
import { LuClockAlert } from "react-icons/lu";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaCheckCircle, FaShippingFast } from "react-icons/fa";

function DashboardOrders() {
  const [loading, setLoading] = useState(true);
  const [orderCount, setOrderCount] = useState({
    pending: 0,
    confirmed: 0,
    shipped: 0,
    delivered: 0,
  });

  useEffect(() => {
    setLoading(true);

    getOrders()
      .then((response) => {
        const orders = response.data;

        let pending = 0;
        let confirmed = 0;
        let shipped = 0;
        let delivered = 0;

        orders.forEach((order) => {
          switch (order.status) {
            case ORDER_STATUS_PENDING:
              return pending++;

            case ORDER_STATUS_CONFIRMED:
              return confirmed++;

            case ORDER_STATUS_SHIPPED:
              return shipped++;

            case ORDER_STATUS_DELIVERED:
              return delivered++;

            default:
              return;
          }
        });

        setOrderCount({ pending, delivered, shipped, confirmed });
      })
      .catch((error) => toast.error(error.response.data, { autoClose: 750 }))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2 className="font-semibold text-xl dark:text-white px-1">
        Order status
      </h2>
      {loading ? (
        <div className="flex justify-center py-10">
          <Spinner className="h-10 w-10" />
        </div>
      ) : (
        <div className="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <DashboardCard
            label="Pending Order"
            value={orderCount.pending}
            className="bg-red-200 dark:bg-red-600"
            icon={
              <LuClockAlert className="w-7 h-7 text-red-500 dark:text-red-200 mb-3" />
            }
          />
          <DashboardCard
            label="Confirmed Order"
            value={orderCount.confirmed}
            className="bg-blue-200 dark:bg-blue-600"
            icon={
              <IoShieldCheckmark className="w-7 h-7 text-blue-500 dark:text-blue-200 mb-3" />
            }
          />
          <DashboardCard
            label="Shipped Order"
            value={orderCount.shipped}
            className="bg-yellow-200 dark:bg-yellow-600"
            icon={
              <FaShippingFast className="w-7 h-7 text-yellow-500 dark:text-yellow-200 mb-3" />
            }
          />
          <DashboardCard
            label="Delivered Order"
            value={orderCount.delivered}
            className="bg-green-200 dark:bg-green-600"
            icon={
              <FaCheckCircle className="w-7 h-7 text-green-500 dark:text-green-200 mb-3" />
            }
          />
        </div>
      )}
    </section>
  );
}

export default DashboardOrders;
