
import { useState } from "react";
import "./Gallery.css";
import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";
import Slider from "react-slick";
const Gallery = ({images}) => {
  const thumbSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  const [activeImg,setActiveImg] = useState(images.singleImage);
  const [activeKey,setActiveKey] = useState(0);

  return (
    <div className="product-gallery">
      
      <div className="single-image-wrapper">
        <img src={`/`+activeImg} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track">
         
          <ol className="gallery-thumbs glide__slides">
            <Slider {...thumbSlider}>
                { images.thumbs.map((img,key)=> (
                  <GalleryItem key={key} img={img} setActiveImg={setActiveImg} activeKey={activeKey} setActiveKey={setActiveKey} itemKey={key} />
                )) }
            </Slider>
          </ol>
        </div>
        <div className="glide__arrows">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

Gallery.propTypes = {
  images : PropTypes.object.isRequired
}
