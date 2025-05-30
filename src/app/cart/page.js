"use client";
import Checkout from "@/src/components/cart/Checkout";
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
            <Checkout products={products} totalPrice={totalPrice} />
          </>
        ) : (
          <div>Cart is empty!</div>
        )}
      </div>
    </section>
  );
}

export default CartPage;
