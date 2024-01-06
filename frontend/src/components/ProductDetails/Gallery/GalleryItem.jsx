import PropTypes from "prop-types";
const GalleryItem = ({img, setActiveImg, activeKey,setActiveKey,itemKey }) => {

  return (
    <li
      className={`glide__slide ${
        activeKey == itemKey ? "glide__slide--active" : ""
      }`}
      onClick={() => {
        setActiveImg(img);
        setActiveKey(itemKey);
      }}
    >
      <img
        src={`/`+img}
        alt=""
        className={`img-fluid ${activeKey == itemKey ? "active" : ""}`}
      />
    </li>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  img: PropTypes.string,
  setActiveImg: PropTypes.func,
  setActiveKey: PropTypes.func,
  activeKey: PropTypes.number,
  itemKey: PropTypes.number,
};
