"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'
import CartComponent from '@/components/Cart'
import Footer from '@/components/Footer'

const CartPage = () => {
  return (
    <>
    <Navbar/>
    <Menu/>
    <CartComponent/>
    <Footer/>
    </>
  )
}

export default CartPage
