import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpRight, FiShoppingBag } from "react-icons/fi";
import { toast } from "react-toastify";
import { useOrebiStore } from "../../../store/useOrebiStore";
import { formatEuro, formatMad } from "../../../utils/currency";

const Product = (props) => {
  const addToCart = useOrebiStore((state) => state.addToCart);
  const navigate = useNavigate();

  const openProduct = () => {
    navigate(`/product/${props._id}`, { state: { item: props } });
  };

  const handleAddToBag = (event) => {
    event.stopPropagation();
    addToCart({
      _id: props._id,
      productName: props.productName,
      quantity: 1,
      img: props.img,
      badge: props.badge,
      price: props.price,
      color: props.color,
      cat: props.cat,
      brand: props.brand,
    });
    toast.success(`${props.productName} added to your bag.`);
  };

  return (
    <article className="group min-w-0">
      <button
        type="button"
        onClick={openProduct}
        className="relative block aspect-[4/5] w-full overflow-hidden bg-[#f5f0ec] text-left"
        aria-label={`View ${props.productName}`}
      >
        <img
          src={props.img}
          alt={props.imageAlt || props.productName}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
        {props.badge && (
          <span className="absolute left-3 top-3 bg-white/90 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.13em] text-[#72575c]">
            The edit
          </span>
        )}
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-[#302326] shadow-sm transition-colors group-hover:bg-[#302326] group-hover:text-white">
          <FiArrowUpRight />
        </span>
      </button>
      <div className="pt-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.12em] text-[#9b8585]">
              {props.brand || props.cat}
            </p>
            <Link
              to={`/product/${props._id}`}
              state={{ item: props }}
              className="mt-1 block truncate text-sm font-medium text-[#302326] hover:text-[#a76e79]"
            >
              {props.productName}
            </Link>
            {props.sourcePriceEur && (
              <p className="mt-1 text-[0.6rem] text-[#887a79]">
                Sephora France: {formatEuro(props.sourcePriceEur)}
              </p>
            )}
          </div>
          <span className="shrink-0 pt-3 text-xs font-semibold text-[#302326]">
            {formatMad(props.price)}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-[#eee5e2] pt-2.5">
          <span className="text-[0.65rem] text-[#887a79]">
            {props.cat}
          </span>
          <button
            type="button"
            onClick={handleAddToBag}
            className="inline-flex items-center gap-1.5 text-[0.63rem] font-semibold uppercase tracking-[0.08em] text-[#a76e79] transition-colors hover:text-[#302326]"
          >
            <FiShoppingBag />
            Add to bag
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;
