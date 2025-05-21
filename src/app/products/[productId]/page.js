import BackButton from "./_components/BackButton.js";
import Image from "next/image";
import Markdown from "react-markdown";
import { getProductById } from "@/src/api/products";

async function getById(params) {
  const productId = (await params).productId;

  const response = await getProductById(productId).catch((error) => {
    throw new Error(error.response.data);
  });

  return response?.data;
}
// note [id] yo dyamic route in next js ma jaile params as a props aauxa hai 
// metadata is only used in server components not in client components hai
// static ra dynamic dubai metadata eutai page ma handle garna mildaina next js 15 ma


export const generateMetadata = async ({ params }) => {
  const product = await getById(params);

  return {
    title: {
      absolute:product.name
    },
          // note: absolute garda E-bazar|Product name dekhaux but absolute nagarda chai porudct ko name matra dekhauxa mathy title ma
    keywords: `${product?.brand},${product.category}`, // keywords is for seo
    // <meta name="keywords" content="Apple,Smartphones"> yesari rakhdinxa yo code le  head section ma just for seo
  };
};

async function ProductByIdPage({ params }) {
  const product = await getById(params);

  return (
    <div>
      <h1 className="text-5xl font-semibold">{product.name}</h1>

      <div className="flex flex-col items-center justify-center py-10">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={1000}
          width={1000}
          className="max-h-[70vh] w-full object-cover"
        />

        <div className="py-8 flex gap-5">
          {product.imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={product.name}
              height={64}
              width={64}
              className="shadow-md"
            />
          ))}
        </div>

        <div className="py-2">
          <span className="bg-blue-100 text-primary text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">
            {product.category}
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">
            {product?.brand}
          </span>
        </div>
        <h3 className="text-2xl">Rs. {product.price}</h3>

        <div className="my-5 border-t py-3">
          <Markdown>{product.description}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default ProductByIdPage;