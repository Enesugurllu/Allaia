import React, { useState } from 'react';
import './Cart.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Armor Air x Fear',
      price: 140.00,
      quantity: 1,
      image: '/image/1.png'
    },
    {
      id: 2,
      name: 'Armor Okwahn II',
      price: 110.00,
      quantity: 1,
      image: '/image/2.png'
    },
    {
      id: 3,
      name: 'Armor Air Wildwood ACG',
      price: 90.00,
      quantity: 1,
      image: '/image/3.png'
    }
  ]);

  const [promoCode, setPromoCode] = useState<string>('');
  const shipping: number = 7.00;

  const updateQuantity = (id: number, change: number): void => {
    setItems(items.map(item => 
      item.id === id ? {...item, quantity: Math.max(1, item.quantity + change)} : item
    ));
  };

  const removeItem = (id: number): void => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal: number = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total: number = subtotal + shipping;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="product-col">PRODUCT</div>
        <div className="price-col">PRICE</div>
        <div className="quantity-col">QUANTITY</div>
        <div className="subtotal-col">SUBTOTAL</div>
      </div>

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="product-info">
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
          <div className="price">${item.price.toFixed(2)}</div>
          <div className="quantity-controls">
            <button onClick={() => updateQuantity(item.id, -1)}>−</button>
            <input type="text" value={item.quantity} readOnly />
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
          <div className="subtotal">
            ${(item.price * item.quantity).toFixed(2)}
            <button className="remove-item" onClick={() => removeItem(item.id)}>🗑</button>
          </div>
        </div>
      ))}

      <div className="promo-section">
        <input 
          type="text" 
          placeholder="Promo code"
          value={promoCode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPromoCode(e.target.value)}
        />
        <button className="apply-coupon">Apply Coupon</button>
        <button className="update-cart">Update Cart</button>
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>TOTAL</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
