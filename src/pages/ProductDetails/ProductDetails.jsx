import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { paginationItems } from "../../constants";

const ProductDetails = () => {
  const location = useLocation();
  const { _id } = useParams();
  const productInfo =
    location.state?.item?._id === Number(_id)
      ? location.state.item
      : paginationItems.find((product) => String(product._id) === _id);

  if (!productInfo) {
    return (
      <div className="mx-auto max-w-[1440px] px-4 py-24 text-center sm:px-6 lg:px-10">
        <h1 className="font-titleFont text-3xl text-[#302326]">
          This beauty find has moved on
        </h1>
        <Link to="/shop" className="pink-dose-section-link mt-5 inline-flex">
          Explore the beauty edit
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
        <Breadcrumbs title={productInfo.productName} />
        
        <div className="grid grid-cols-1 gap-8 border-t border-[#eee5e2] pt-8 md:grid-cols-2 lg:gap-16">
          <div className="flex aspect-[4/4.5] items-center justify-center overflow-hidden bg-[#f7f0ed]">
            <img
              className="h-full w-full object-cover"
              src={productInfo.img}
              alt={productInfo.productName}
            />
          </div>

          <div className="flex flex-col justify-center py-4">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
    </div>
  );
};

export default ProductDetails;
