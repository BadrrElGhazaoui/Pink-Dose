import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiShoppingBag, FiStar } from "react-icons/fi";
import { toast } from "react-toastify";
import { useOrebiStore } from "../../../store/useOrebiStore";
import { formatEuro, formatMad } from "../../../utils/currency";

const ProductInfo = ({ productInfo }) => {
  const addToCart = useOrebiStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart({
      _id: productInfo._id,
      productName: productInfo.productName,
      quantity: 1,
      img: productInfo.img,
      badge: productInfo.badge,
      price: productInfo.price,
      color: productInfo.color,
      cat: productInfo.cat,
      brand: productInfo.brand,
    });
    toast.success(`${productInfo.productName} added to your bag.`);
  };

  return (
    <div className="flex flex-col items-start">
      <p className="pink-dose-kicker">
        {productInfo.cat || "The Pink Dose edit"}
      </p>
      <h1 className="mt-4 font-titleFont text-3xl font-medium leading-tight text-[#302326] sm:text-4xl">
        {productInfo.productName}
      </h1>
      {productInfo.brand && (
        <p className="mt-3 text-sm text-[#786b6b]">{productInfo.brand}</p>
      )}
      <p className="mt-5 text-2xl font-medium text-[#302326]">
        {formatMad(productInfo.price)}
      </p>
      {productInfo.sourcePriceEur && (
        <p className="mt-1 text-xs text-[#786b6b]">
          Indicative MAD price · Sephora France{" "}
          {formatEuro(productInfo.sourcePriceEur)}
        </p>
      )}
      <p className="mt-6 max-w-lg border-t border-[#eee5e2] pt-5 text-sm leading-7 text-[#786b6b]">
        {productInfo.des}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-[#eee5e2] py-4 text-xs text-[#786b6b]">
        <span className="inline-flex items-center gap-2">
          <FiStar className="text-[#b87984]" />
          Authentic Sephora beauty
        </span>
        <span className="inline-flex items-center gap-2">
          <FiArrowUpRight className="text-[#b87984]" />
          From France to Morocco
        </span>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="pink-dose-button mt-7 w-full sm:w-auto"
      >
        <FiShoppingBag />
        Add to your bag
      </button>
      {productInfo.sourceUrl && (
        <a
          href={productInfo.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#786b6b] underline underline-offset-4 transition-colors hover:text-[#a76e79]"
        >
          View product on Sephora France <FiArrowUpRight />
        </a>
      )}
      <p className="mt-4 text-xs leading-5 text-[#897d7b]">
        Need a little help?{" "}
        <Link to="/contact" className="underline underline-offset-2 hover:text-[#a76e79]">
          Get in touch
        </Link>
      </p>
    </div>
  );
};

export default ProductInfo;
