import React from "react"
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Slider from '../components/Slider/Slider'
import Campaigns from '../components/Campaigns/Campaigns'
import Blogs from '../components/Blogs/Blogs'
import CampainSingle from '../components/Campaigns/CampainSingle'
import Brands from '../components/Brands/Brands'




function HomePage() {

  return (
      <React.Fragment>
        <Slider/>
        <Categories/>
        <Products/>
        <Campaigns/>
        <Products/>
        <Blogs/>
        <Brands/>
        <CampainSingle/>
      </React.Fragment>
  )
}

export default HomePage
