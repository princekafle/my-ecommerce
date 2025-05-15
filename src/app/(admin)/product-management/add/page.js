import { getCategories } from "@/src/api/products";
import ProductForm from "@/src/components/products/Form";

async function AddProductPage() {
  const categoriesResponse = await getCategories();

  return (
    <section>
      <div className="py-5 px-4 mx-auto max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <ProductForm categories={categoriesResponse.data} />
      </div>
    </section>
  );
}

export default AddProductPage;