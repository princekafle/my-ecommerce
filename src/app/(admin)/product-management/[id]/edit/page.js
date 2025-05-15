import { getCategories, getProductById } from "@/src/api/products.js";
import ProductForm from "@/src/components/products/Form";

async function EditProductPage({ params }) {
 const id = (await params).id;
 

  const response = await getProductById(id);
  //note getproductbyid ma chai ai generated description aaune backend xa so edit by id ma matra ai wala description dekhauxa
 

  const categoriesResponse = await getCategories();

  return (
    <section>
      <div className="py-5 px-4 mx-auto max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit <span className="italic">{response.data?.name}</span>
        </h2>
        <ProductForm
          product={response?.data}
          categories={categoriesResponse?.data}
        />
      </div>
    </section>
  );
}

export default EditProductPage;