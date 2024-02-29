import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import ProductPreviewCard from "./ProductPreviewCard";

const ProductsPreview = () => {
  const [products, setProducts] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <div className="w-full p-3" key={index}>
                <ProductPreviewCard key={index} product={product} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default ProductsPreview;
