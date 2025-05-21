"use client";
import CartTable from "@/src/components/cart/Table";
import { useSelector } from "react-redux";

function CartPage() {
  const { products, totalPrice } = useSelector((state) => state.cart);

  return (
    <section className="bg-slate-50 dark:bg-slate-700 min-h-screen">
      <div className="max-w-screen-xl container mx-auto px-4 py-10">
        <h1 className="font-semibold text-2xl dark:text-white mb-5">
          Your cart items
        </h1>
        {products.length > 0 ? (
          <>
            <CartTable products={products} />
            <div className="flex items-center text-lg py-5 text-gray-800 dark:text-gray-200 px-2">
              <span>Total price: </span>
              <h4 className="font-medium ml-2">Rs. {totalPrice}</h4>
            </div>
          </>
        ) : (
          <div>Cart is empty!</div>
        )}
      </div>
    </section>
  );
}

export default CartPage;