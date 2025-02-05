import React from 'react';
import Image from 'next/image';

const Featured = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "ACG React Terra",
      price: 110.00,
      rating: 4,
      image: "/image/1.png",
      tag: "NEW"

    },
    {
      id: 2,
      name: "Air Zoom Alpha",
      price: 140.00,
      rating: 4,
      image: "/image/2.png",
      tag: "NEW"

    },
    {
      id: 3,
      name: "Air Color 720",
      price: 120.00,
      rating: 4,
      image: "/image/3.png",
      tag: "HOT"

    },
    {
      id: 4,
      name: "Okwahn II",
      price: 90.00,
      oldPrice: 170.00,
      rating: 4,
      image: "/image/4.png",
      tag: "-30%"
    }
  ];


  return (
    <div className="container mx-auto py-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-2 text-black">Featured</h2>
      <p className="text-center text-gray-800 mb-8">Cum doctus civibus efficiantur in imperdiet deterruisset</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="relative">
            {product.tag && (
              <span className={`absolute top-2 left-2 px-2 py-1 text-white rounded ${
                product.tag === "NEW" ? "bg-purple-600" :
                product.tag === "HOT" ? "bg-green-500" :
                "bg-red-500"
              }`}>
                {product.tag}
              </span>
            )}
            <div className="bg-gray-100 p-4 rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-400">
                    {index < product.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <h3 className="text-center font-semibold text-black">{product.name}</h3>
              <div className="text-center">
                <span className="text-blue-600">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="ml-2 text-gray-500 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
