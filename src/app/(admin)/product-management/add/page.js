import { getCategories } from "@/src/api/products";
import BackButton from "@/src/app/products/[productId]/_components/BackButton";
import ProductForm from "@/src/components/products/Form";

async function AddProductPage() {
  const categoriesResponse = await getCategories();

  return (
    <section className="py-3">
      <BackButton />
      <div className="py-5 px-4 mx-auto max-w-2xl">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <ProductForm categories={categoriesResponse.data} />
      </div>
    </section>
  );
}


export default AddProductPage;