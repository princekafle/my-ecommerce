import Image from "next/image";
import ConfirmOrder from "./Confirm";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_PENDING,
} from "@/src/constants/orderStatus";

function OrderItemCard({ product, quantity }) {
  return (
    <div className="bg-white border border-gray-200 dark:border-gray-500 rounded-lg p-3 flex items-center gap-5 dark:bg-slate-700">
      <Image src={product?.imageUrls[0]} alt="" height={64} width={64} />
      <div>
        <h3 className="font-medium text-lg">{product?.name}</h3>
        <p>
          Rs. {product?.price} x {quantity}
        </p>
      </div>
    </div>
  );
}

function OrderStatus({ status }) {
  if (status == ORDER_STATUS_CONFIRMED) {
    return (
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 uppercase">
        {status}
      </span>
    );
  }

  return (
    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300 uppercase">
      {status}
    </span>
  );
}

function OrderCard({ order }) {
  return (
    <div className="bg-slate-100 rounded-xl border border-gray-300 dark:text-white dark:border-gray-600 my-5 dark:bg-slate-800">
      <div className="flex items-center justify-between pt-4 px-6">
        <h2 className="font-semibold">#{order.orderNumber}</h2>
        <OrderStatus status={order.status} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-4 px-6">
        {order.orderItems.map((item, index) => (
          <OrderItemCard
            key={index}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="flex items-center justify-between bg-slate-300 py-3 px-6 rounded-b-xl dark:bg-slate-900">
        <h4 className="font-medium">Total price: {order.totalPrice}</h4>
        {order.status == ORDER_STATUS_PENDING && <ConfirmOrder order={order} />}
      </div>
    </div>
  );
}

export default OrderCard;