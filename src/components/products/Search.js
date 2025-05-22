"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { IoIosSearch } from "react-icons/io";

function SearchProduct() {
  const [productName, setProductName] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const searchProduct = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("name", productName);
    // yesle url ma http://localhost:3000/products?name=Caliber yesari set grxa

    router.push(`?${params.toString()}`);
  }, [productName, router, searchParams]);

  useEffect(() => {
    if (productName == "") {
      searchProduct();
    }
  }, [productName, searchProduct]);

  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="search"
          id="search-product"
          className="block w-full px-4 py-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search products..."
          onChange={(e) => setProductName(e.target.value)}
        />
        <button
          onClick={searchProduct}
          className="text-white absolute end-1.5 bottom-1.5 bg-primary hover:opacity-90 font-medium rounded-lg text-sm p-1"
        >
          <IoIosSearch className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}

export default SearchProduct;