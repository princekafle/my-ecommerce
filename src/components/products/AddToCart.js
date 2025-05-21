"use client";

import { addToCart } from "@/src/redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function AddToCart({ product }) {
  const dispatch = useDispatch();

  function addProductToCart() {
    delete product.description;

    dispatch(addToCart(product));

    toast.success("Product added to cart successfully.", { autoClose: 750 });
  }

  return (
    <button
      onClick={addProductToCart}
      className="rounded px-4 py-2 w-full bg-primary hover:opacity-90 text-white"
    >
      Add to cart
    </button>
  );
}

export default AddToCart;