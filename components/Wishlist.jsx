import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 'ew33r4',
      name: 'Armor Air x Fear',
      price: 140.00,
      image: '/image/1.png'
    },
    {
      id: 'ew33r4',
      name: 'Armor Air x Fear',
      price: 140.00,
      image: '/image/2.png'
    },

    {
      id: 'ew33r4',
      name: 'Armor Air x Fear',
      price: 140.00,
      image: '/image/3.png'
    },

    {
      id: 'ew33r4',
      name: 'Armor Air x Fear',
      price: 140.00,
      image: '/image/4.png'

    }
  ];

  return (
    <div className="wishlist-container">
        
      <h1>My Wishlist page</h1>
      
      <table className="wishlist-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>PRODUCT ID</th>
            <th>ACTION</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map((item, index) => (
            <tr key={index}>
              <td className="product-cell">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>#{item.id}</td>
              <td>
                <button className="add-to-cart-btn">Add to cart</button>
              </td>
              <td>
                <button className="remove-btn">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
