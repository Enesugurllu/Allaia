import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Menu from '../components/Menu'
import Products from '../components/Products'
import Featured from '../components/Featured'
import Sponsors from '../components/Sponsors'
import News from '../components/News'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const page = () => {
  return (
    <>
      <Navbar/>
      <Menu/>
      <Carousel/>
      <Card/>
      <Products/>
      <Card2/>
      <Featured/>
      <Sponsors/>
      <News/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default page
