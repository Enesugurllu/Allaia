"use client";
import React from 'react'

const Card: React.FC = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Collections</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n   .card:hover img {\n            transform: scale(1.1);\n        }\n        .card:hover .shop-now {\n            opacity: 1;\n        }\n  "
    }}
  />
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Men's Collection */}
      <div className="relative card overflow-hidden">
        <img
          alt="Men's shoes"
          className="w-full h-full object-cover transition-transform duration-300"
          src="https://placehold.co/600x400"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-xl font-bold">MEN'S COLLECTION</h2>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded opacity-0 transition-opacity duration-300 shop-now">
            Shop Now
          </button>
        </div>
      </div>
      {/* Women's Collection */}
      <div className="relative card overflow-hidden">
        <img
          alt="Women's shoes"
          className="w-full h-full object-cover transition-transform duration-300"
          src="https://placehold.co/600x400"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-xl font-bold">WOMEN'S COLLECTION</h2>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded opacity-0 transition-opacity duration-300 shop-now">
            Shop Now
          </button>
        </div>
      </div>
      {/* Kids' Collection */}
      <div className="relative card overflow-hidden">
        <img
          alt="Kids' shoes"
          className="w-full h-full object-cover transition-transform duration-300"
          src="https://placehold.co/600x400"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-xl font-bold">KIDS' COLLECTION</h2>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded opacity-0 transition-opacity duration-300 shop-now">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Card
