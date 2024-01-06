import { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Gallery from "./Gallery/Gallery";
import Info from "./Info/Info";
import "./ProductDetails.css";
import Tabs from "./Tabs/Tabs";
import ProductsData from "../../data.json";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [productList] = useState(ProductsData);
 
  const params = useParams();
  const productDetail = productList.find(item => item.id == params.id);;
 
  
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <div className="single-topbar">
            <Breadcrumb/>
          </div>
          <div className="single-content">
            <main className="site-main">
              <Gallery images={productDetail.img}/>
              <Info/>
            </main>
          </div>
          <Tabs/>
   
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
