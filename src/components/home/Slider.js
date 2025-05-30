"use client";
import { PRODUCTS_ROUTE } from "@/src/constants/routes";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiStar,
} from "react-icons/fi";

const HomePageSLider = () => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Product slider data
  const productSlides = [
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      brand: "AudioMaster",
      category: "Audio",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.8,
      reviews: 1245,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    },
    {
      id: 2,
      name: 'Ultra HD Smart TV 65"',
      brand: "VisionPlus",
      category: "Televisions",
      price: 1299.99,
      originalPrice: 1499.99,
      rating: 4.9,
      reviews: 892,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    },
    {
      id: 3,
      name: "Professional DSLR Camera",
      brand: "FotoPro",
      category: "Cameras",
      price: 899.99,
      originalPrice: 999.99,
      rating: 4.7,
      reviews: 756,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
    },
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === productSlides.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [productSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === productSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? productSlides.length - 1 : prev - 1
    );
  };

  const addToCart = (productId) => {
    // Add to cart functionality
    console.log(`Added product ${productId} to cart`);
    alert(
      `Added ${
        productSlides.find((p) => p.id === productId).name
      } to your cart!`
    );
  };

  return (
    <div className="min-h-screen  pt-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      {/* Product Hero Slider */}
      <section className="relative h-auto md:h-[600px] overflow-hidden bg-gray-100 dark:bg-gray-800">
        {productSlides.map((product, index) => (
          <div
            key={product.id}
            className={`w-full py-12 md:py-0 transition-opacity duration-1000 flex items-center ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 absolute top-0 left-0"
            }`}
          >
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Product Image */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-md h-64 md:h-96 bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 transform hover:scale-105 transition duration-500"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        SALE
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 text-center md:text-left">
                  <span className="inline-block bg-[#016EB7] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    by <span className="font-semibold">{product.brand}</span>
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-500"
                          } w-5 h-5`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#016EB7] dark:text-blue-400">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-3">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                      href={PRODUCTS_ROUTE}
                      className="bg-[#016EB7] hover:bg-[#015a9b] text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center gap-2"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white dark:bg-gray-700/80 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full shadow-md transition duration-300 hidden md:block"
          aria-label="Previous slide"
        >
          <FiArrowLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white dark:bg-gray-700/80 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full shadow-md transition duration-300 hidden md:block"
          aria-label="Next slide"
        >
          <FiArrowRight size={24} />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {productSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === currentSlide
                  ? "bg-[#016EB7] w-6"
                  : "bg-white/50 dark:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Rest of your page content (partners, products, etc.) */}
      {/* ... */}
    </div>
  );
};

export default HomePageSLider;
