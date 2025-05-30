import Image from "next/image";
import { FiStar } from "react-icons/fi";
import tv from "@/src/assets/images/tv.jpg";

function BestProduct() {
  const bestSellingProduct = {
    id: 5,
    name: "Ultra HD Smart TV",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.9,
    reviews: 1243,
    image: tv,
    description:
      "Experience stunning 4K resolution with our best-selling smart TV. HDR support, built-in streaming apps, and voice control included.",
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Our Best Seller
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          The product our customers love the most
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src={bestSellingProduct.image}
              alt={bestSellingProduct.name}
              height={600}
              width={700}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Best Seller
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {bestSellingProduct.name}
            </h3>
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`${
                    i < Math.floor(bestSellingProduct.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300 dark:text-gray-500"
                  } w-5 h-5`}
                />
              ))}
              <span className="text-gray-600 dark:text-gray-300 ml-2">
                {bestSellingProduct.rating} ({bestSellingProduct.reviews}{" "}
                reviews)
              </span>
            </div>
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-[#016EB7] dark:text-blue-400">
                ${bestSellingProduct.price.toFixed(2)}
              </span>
              {bestSellingProduct.originalPrice && (
                <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-3">
                  ${bestSellingProduct.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {bestSellingProduct.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#016EB7] hover:bg-[#015a9b] text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex-1 text-center">
                Add to Cart
              </button>
              <button className="border-2 border-[#016EB7] text-[#016EB7] dark:border-blue-400 dark:text-blue-400 hover:bg-[#016EB7] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex-1 text-center">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestProduct;
