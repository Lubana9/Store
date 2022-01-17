import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import "./productImg.css";
import c1 from "../../../img/c1.png";
import c11 from "../../../img/c11.png";
import c2 from "../../../img/c2.png";
import c4 from "../../../img/c4.png";

const images = [
  {
    original: c11,
    thumbnail: c11,
  },
  {
    original: c1,
    thumbnail: c1,
  },
  {
    original: c2,
    thumbnail: c2,
  },
  {
    original: c4,
    thumbnail: c4,
  },
];
const ProductImg: React.FC = () => {
  return <ImageGallery showNav={false} showPlayButton={false} items={images} />;
};

export default ProductImg;
