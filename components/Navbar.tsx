"use client";

import React from 'react'

const Navbar: React.FC = () => {
    
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Navigation Bar</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n   /* Custom styles for dropdown */\n   .dropdown-content {\n     display: none;\n     position: absolute;\n     background-color: #ffffff;\n     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n     z-index: 1;\n     padding: 0.5rem;\n   }\n   .dropdown-content a {\n     color: black;\n     padding: 4px 0;\n     text-decoration: none;\n     display: block;\n     font-size: 0.875rem; /* text-sm */\n   }\n   .dropdown-content a:hover {\n     background-color: #f1f1f1;\n   }\n   .group:hover .dropdown-content {\n     display: grid;\n   }\n   .group:hover .chevron-down {\n     transform: rotate(180deg);\n   }\n   .dropdown-content.pages {\n     min-width: 600px;\n     padding: 1rem;\n     grid-template-columns: repeat(3, minmax(0, 1fr));\n     gap: 1rem;\n   }\n   .dropdown-content.home,\n   .dropdown-content.extra-pages {\n     min-width: 240px;\n     padding: 1rem;\n     grid-template-columns: 1fr;\n     gap: 0.5rem;\n   }\n   @media (max-width: 768px) {\n     .menu-items {\n       display: none;\n     }\n     .menu-items.active {\n       display: flex;\n       flex-direction: column;\n       align-items: center;\n       background-color: #ffffff;\n       position: absolute;\n       top: 60px;\n       left: 0;\n       right: 0;\n       padding: 1rem;\n       box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n     }\n   }\n  "
    }}
  />
  <nav className="bg-blue-600 text-white flex items-center justify-between px-8 py-4 relative">
    <div className="flex items-center">
      <span className="text-white text-xl font-bold">Allaia</span>
    </div>
    <div className="menu-items flex space-x-6 text-sm">
      <div className="relative group">
        <button onClick={() => window.location.href = '/'} className="flex items-center">
          HOME
          <i className="fas fa-chevron-down ml-1 chevron-down transition-transform duration-300"></i>
        </button>
        <div className="dropdown-content home">
          <a href="#">Slider</a>
          <a href="#">Video Background</a>
          <a href="#">Vertical Slider</a>
          <a href="#">GDPR Cookie Bar</a>
        </div>
      </div>
      <div className="relative group">
        <button className="flex items-center">
          PAGES
          <i className="fas fa-chevron-down ml-1 chevron-down transition-transform duration-300"></i>
        </button>
        <div className="dropdown-content pages">
          <div>
            <h2 className="font-bold mb-2 text-black">LISTING GRID</h2>
            <ul className="space-y-1">
              <li>
                <a href="#">Grid Full Width</a>
              </li>
              <li>
                <a href="#">Grid Full Width 2</a>
              </li>
              <li>
                <a href="#">Grid Boxed</a>
              </li>
              <li>
                <a href="#">Grid Sidebar Left</a>
              </li>
              <li>
                <a href="#">Grid Sidebar Right</a>
              </li>
              <li>
                <a href="#">Grid Sidebar Left 2</a>
              </li>
              <li>
                <a href="#">Grid Sidebar Right 2</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-black">
              LISTING ROW &amp; PRODUCT
            </h2>
            <ul className="space-y-1">
              <li>
                <a href="#">Row Sidebar Left</a>
              </li>
              <li>
                <a href="#">Row Sidebar Right</a>
              </li>
              <li>
                <a href="#">Row Sidebar Left 2</a>
              </li>
              <li>
                <a href="#">Row Sidebar Extended</a>
              </li>
              <li>
                <a href="#">Product Large Image</a>
              </li>
              <li>
                <a href="#">Product Carousel</a>
              </li>
              <li>
                <a href="#">Product Sticky Info</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-black">OTHER PAGES</h2>
            <ul className="space-y-1">
              <li>
                <a href="#">Cart Page</a>
              </li>
              <li>
                <a href="#">Check Out Page</a>
              </li>
              <li>
                <a href="#">Confirm Purchase Page</a>
              </li>
              <li>
                <a href="#">Create Account Page</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Help Page</a>
              </li>
              <li>
                <a href="#">Help Page 2</a>
              </li>
              <li>
                <a href="#">Leave a Review</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative group">
        <button className="flex items-center">
          EXTRA PAGES
          <i className="fas fa-chevron-down ml-1 chevron-down transition-transform duration-300"></i>
        </button>
        <div className="dropdown-content extra-pages">
          <a href="#">Header Style 2</a>
          <a href="#">Header Style 3</a>
          <a href="#">Header Style 4</a>
          <a href="#">Header Style 5</a>
          <a href="#">404 Page</a>
          <a href="#">Sign In Modal</a>
          <a href="#">Contact Us</a>
          <a href="#">About 1</a>
          <a href="#">About 2</a>
          <a href="#">Modal Advertise</a>
          <a href="#">Modal Newsletter</a>
          <a href="#">Gallery Page</a>
        </div>
      </div>
      <a className="hover:underline" href="#">
        BLOG
      </a>
      <a className="hover:underline" href="#">
        BUY TEMPLATE
      </a>
    </div>
    <div className="text-white text-right hidden md:block">
      <div>Need Help?</div>
      <div>+94 423-23-221</div>
    </div>
    <button className="text-white md:hidden" id="menu-toggle">
      <i className="fas fa-bars" />
    </button>
  </nav>
</>

  )
}

export default Navbar
