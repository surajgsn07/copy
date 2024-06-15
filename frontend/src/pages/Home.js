import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Shirts"} heading={"Shirts"}/>
      <HorizontalCardProduct category={"Shirts"} heading={"Shirts"}/>

      <VerticalCardProduct category={"Shirts"} heading={"Shirts"}/>
      <VerticalCardProduct category={"T-Shirts"} heading={"T-Shirts"}/>
      <VerticalCardProduct category={"Denim Jeans"} heading={"Denim Jeans"}/>
      <VerticalCardProduct category={"Trousers"} heading={"Trousers"}/>
      <VerticalCardProduct category={"Cargoes"} heading={"Cargoes"}/>
      <VerticalCardProduct category={"Belts"} heading={"Belts"}/>
      <VerticalCardProduct category={"Ties"} heading={"Ties"}/>
      <VerticalCardProduct category={"Shorts"} heading={"Shorts"}/>
    </div>
  )
}

export default Home