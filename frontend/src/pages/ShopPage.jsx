import React from "react"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampainSingle from "../components/Campaigns/CampainSingle"




function ShopPage() {

  return (
      <React.Fragment>
        <Categories/>
        <Products/>
        <CampainSingle/>
        <Products/>
      </React.Fragment>
  )
}

export default ShopPage
