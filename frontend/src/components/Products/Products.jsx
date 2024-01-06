import { useState } from "react";
import ProductsData from "../../data.json";
import Slider from "react-slick";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import "./Products.css";
function NextBtn({ onClick }){
  return (<button
    className="glide__arrow glide__arrow--right" onClick={onClick}>
    <i className="bi bi-chevron-right"></i>
  </button>)
}
NextBtn.propTypes = {
  onClick : PropTypes.func
}
function PrevBtn({ onClick }){
  return (<button
    className="glide__arrow glide__arrow--left" onClick={onClick}>
    <i className="bi bi-chevron-left"></i>
  </button>)
}
PrevBtn.propTypes = {
  onClick : PropTypes.func
}
const Products = () => {
 
  const [products] = useState(ProductsData);
  const slidetSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow : <NextBtn/>,
    prevArrow : <PrevBtn/>,
    autoplaySpeed : 3000,
    autoplay : true,
    responsive : [
      {
        breakpoint : 992,
        settings:{
          slidesToShow : 2
        }
      },
      {
        breakpoint : 420,
        settings:{
          slidesToShow : 1
        }
      }

    ]

  };
  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
              <Slider {...slidetSettings}>
                 {products.map((product) => (
                    <ProductItem key={product.id} productItem={product} />
                  ))}
              </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
