import Image from "next/image";
import placeholder from "@/src/assets/images/product-placeholder.jpeg"
function OrderItemCard({ product, quantity }) {
  return (
    <div className="bg-white border border-gray-200 dark:border-gray-500 rounded-lg p-3 flex items-center gap-5 dark:bg-slate-700">
      <Image src={product?.imageUrls?.[0] || placeholder} alt="" height={64} width={64} />
      <div>
        <h3 className="font-medium text-lg">{product?.name}</h3>
        <p>
          Rs. {product?.price} x {quantity}
        </p>
      </div>
    </div>
  );
}

function OrderCard({ order }) {
  return (
    <div className="bg-slate-100 rounded-xl py-4 px-6 border border-gray-300 dark:text-white dark:border-gray-600 my-5 dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">#{order.orderNumber}</h2>
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300 uppercase">
          {order.status}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-3">
        {order.orderItems.map((item, index) => (
          <OrderItemCard
            key={index}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
      <h4 className="font-medium">Total price: {order.totalPrice}</h4>
    </div>
  );
}

export default OrderCard;