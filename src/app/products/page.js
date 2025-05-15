import { getProducts } from "@/src/api/products.js";
import ProductCard from "@/src/components/products/Card";

export const metadata = {
  title: "Products",
};

async function ProductsPage() {
  const response = await getProducts();

  const products = response?.data;

  return (
    <section>
      <h1 className="text-4xl font-semibold">Popular products</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
