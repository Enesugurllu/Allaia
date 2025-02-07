import React from 'react';
import Wishlist from '@/components/Wishlist';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

const WishlistPage = () => {
  return (
    <>
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <Menu />
      <Wishlist />
      <Footer />
    </div>
    </>
  );

};

export default WishlistPage;
