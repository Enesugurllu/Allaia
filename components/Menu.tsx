import React from 'react'

const Menu: React.FC = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Header Example</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Custom styles for dropdown */\n        .dropdown:hover .dropdown-menu,\n        .profile-dropdown:hover .profile-menu,\n        .profile-menu:hover,\n        .cart-dropdown:hover .cart-menu {\n            display: block;\n        }\n        .icon-hover:hover {\n            color: #1D4ED8; /* Tailwind's blue-600 */\n        }\n        .login-button:hover {\n            background-color: #FBBF24; /* Tailwind's yellow-500 */\n        }\n        .view-cart-button:hover {\n            background-color: #1D4ED8; /* Tailwind's blue-600 */\n            color: white;\n        }\n        .checkout-button:hover {\n            background-color: #1D4ED8; /* Tailwind's blue-600 */\n            color: white;\n        }\n    "
    }}
  />
  <header className="flex items-center justify-between p-4 bg-white relative">
    <div className="flex items-center dropdown relative">
      <i className="fas fa-bars text-blue-600 text-xl" />
      <span className="ml-2 text-blue-600 text-lg font-semibold cursor-pointer">
        CATEGORIES
      </span>
      <div className="dropdown-menu absolute left-0 mt-64 w-48 bg-white border border-gray-200 shadow-lg hidden z-10">
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Collections
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Men
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Women
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Boys
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Girls
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Collections
        </a>
      </div>
    </div>
    <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden w-1/2">
      <input
        type="text"
        placeholder="Search over 10.000 products"
        className="p-2 bg-gray-100 outline-none w-full"
      />
      <button className="p-2 text-black">
        <i className="fas fa-search text-black" />
      </button>
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative profile-dropdown">
        <i className="fas fa-user text-2xl cursor-pointer icon-hover" />
        <div className="profile-menu absolute right-0 w-48 bg-white border border-gray-200 shadow-lg hidden z-10">
          <a
            href="/Sign"
            className="block px-4 py-4 text-white bg-blue-600 hover:bg-yellow-500 login-button"
          >
            Giriş Yap

          </a>
          <div className="border-t border-gray-200" />
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Track Your Order
          </a>
          <div className="border-t border-gray-200" />
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            My Orders
          </a>
          <div className="border-t border-gray-200" />
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            My Profile
          </a>
          <div className="border-t border-gray-200" />
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Help and FAQ
          </a>
        </div>
      </div>
      <i className="fas fa-heart text-2xl cursor-pointer icon-hover" />
      <div className="relative cart-dropdown">
        <i className="fas fa-shopping-bag text-2xl cursor-pointer icon-hover" />
        <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          2
        </span>
        <div className="cart-menu absolute right-0 w-64 bg-white border border-gray-200 shadow-lg hidden z-10 p-4">
          <div className="flex justify-between items-center mb-4 text-black">
            <span>Product 1</span>
            <i className="fas fa-trash text-red-600 cursor-pointer" />
          </div>
          <div className="flex justify-between items-center mb-4 text-black">
            <span>Product 2</span>
            <i className="fas fa-trash text-red-600 cursor-pointer" />
          </div>
          <div className="border-t border-gray-200 my-4" />
          <div className="flex justify-between items-center mb-4 text-black">
            <span>Total:</span>
            <span>$100</span>
          </div>
          <button className="w-full bg-white text-black border border-gray-200 py-2 mb-2 view-cart-button ">
            View Cart
          </button>
          <button className="w-full bg-yellow-500 text-white py-2 checkout-button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </header>
</>

  )
}

export default Menu
