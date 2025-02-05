'use client'
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  discount: string | null;
  image: string;
  rating: number;
  timer?: string;
  status?: 'NEW' | 'HOT';
}

const Products: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const initialProducts: Product[] = [
    {
      id: 1,
      name: "Armor Air x Fear",
      price: 48.00,
      oldPrice: 60.00,
      discount: "-30%",
      image: "/image/1.png",
      rating: 4,
      timer: "00:00:00"

    },
    {
      id: 2,
      name: "Armor Okwahn II",
      price: 90.00,
      oldPrice: 170.00,
      discount: "-30%",
      image: "/image/2.png",
      rating: 4,
      timer: "00:00:00"

    },
    {
      id: 3,
      name: "Armor Air Wildwood ACG",
      price: 75.00,
      oldPrice: 155.00,
      discount: "-50%",
      image: "/image/3.png",
      rating: 4,
      timer: "00:00:00"

    },
    {
      id: 4,
      name: "Armor ACG React Terra",
      price: 110.00,
      oldPrice: null,
      discount: null,
      image: "/image/4.png",
      rating: 4,
      status: "NEW"

    },
    {
      id: 5,
      name: "Armor Air Zoom Alpha",
      price: 140.00,
      oldPrice: null,
      discount: null,
      image: "/image/5.png",
      rating: 4,
      status: "NEW"
    },
    {
      id: 6,
      name: "Armor Air Alpha",
      price: 130.00,
      oldPrice: null,
      discount: null,
      image: "/image/6.png",
      rating: 4,
      status: "NEW"

    },
    {
      id: 7,
      name: "Armor Air Max 98",
      price: 115.00,
      oldPrice: null,
      discount: null,
      image: "/image/7.png",
      rating: 4,
      status: "HOT"

    },
    {
      id: 8,
      name: "Armor Air Max 720",
      price: 120.00,
      oldPrice: null,
      discount: null,
      image: "/image/8.png",
      rating: 4,
      status: "HOT"

    }
  ];

  const additionalProducts: Product[] = [
    {
      id: 9,
      name: "Armor Air Max Plus",
      price: 125.00,
      oldPrice: null,
      discount: null,
      image: "/image/9.png",
      rating: 4,
      status: "NEW"
    },
    {
      id: 16,
      name: "Armor Air Force One",
      price: 135.00,
      oldPrice: null,
      discount: null,
      image: "/image/16.png",
      rating: 4,
      status: "HOT"
    }
  ];

  const displayedProducts: Product[] = showMore 
    ? [...initialProducts, ...additionalProducts]
    : initialProducts;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-black">Top Selling</h2>
        <p className="text-center text-gray-800 mb-8">Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative">
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                    {product.discount}
                  </span>
                )}
                {product.status === "NEW" && (
                  <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 text-sm rounded">
                    NEW
                  </span>
                )}
                {product.status === "HOT" && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-sm rounded">
                    HOT
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[200px] object-contain"
                />
                {product.timer && (
                  <div className="absolute bottom-2 left-2 bg-white rounded-full px-3 py-1 text-sm flex items-center">
                    <span className="text-red-500">⏰ {product.timer}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                  {[...Array(5 - product.rating)].map((_, i) => (
                    <span key={i + product.rating} className="text-gray-300">⭐</span>
                  ))}
                </div>
                <h3 className="text-center font-medium mb-2 text-black">{product.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            {showMore ? 'Show Less' : 'Load More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
