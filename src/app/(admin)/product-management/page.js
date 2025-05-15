
import { getProducts } from "@/src/api/products";
import ProductsTable from "@/src/components/products/Table";
import Link from "next/link";

async function ProductManagementPage() {
  const response = await getProducts();
  // getproducts ma ai generated description aaune backend system xaina so je lekhyo tei description dekhauxa

  return (
    <section className="p-5">
      <div className="flex items-center justify-between pb-5 px-3">
        <h1 className="font-semibold text-2xl dark:text-white">
          Product Management
        </h1>
        <Link
          href="/product-management/add"
          className="bg-slate-200 rounded-lg px-3 py-1 dark:bg-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-900"
        >
          Add Product +
        </Link>
      </div>
      <ProductsTable products={response.data} />
    </section>
  );
}

export default ProductManagementPage;