import React from "react";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useOrebiStore } from "../../store/useOrebiStore";
import { formatMad } from "../../utils/currency";
import { toast } from "react-toastify";

const ItemCard = ({ item }) => {
  const removeItem = useOrebiStore((state) => state.deleteItem);
  const increaseQuantity = useOrebiStore((state) => state.increaseQuantity);
  const decreaseQuantity = useOrebiStore((state) => state.decreaseQuantity);
  const quantity = item.quantity || 1;

  return (
    <article className="flex items-center gap-3 border-b border-[#eee5e2] py-4 sm:gap-5">
      <Link
        to={`/product/${item._id}`}
        className="h-24 w-20 shrink-0 overflow-hidden bg-[#f7f0ed] sm:h-28 sm:w-24"
      >
        <img
          src={item.img || item.image}
          alt={item.productName || item.name}
          className="h-full w-full object-cover"
        />
      </Link>

      <div className="min-w-0 flex-1">
        <p className="text-[0.58rem] uppercase tracking-[0.12em] text-[#9b8585]">
          {item.cat || "The Pink Dose edit"}
        </p>
        <h2 className="mt-1 truncate font-titleFont text-base text-[#302326]">
          {item.productName || item.name}
        </h2>
        <p className="mt-1 text-xs text-[#786b6b]">{formatMad(item.price)}</p>
        <div className="mt-3 flex items-center justify-between gap-3 sm:hidden">
          <div className="flex items-center border border-[#eee5e2]">
            <button
              type="button"
              onClick={() => decreaseQuantity({ _id: item._id })}
              aria-label={`Decrease ${item.productName} quantity`}
              className="flex h-8 w-8 items-center justify-center text-[#786b6b]"
            >
              <FiMinus className="text-xs" />
            </button>
            <span className="w-7 text-center text-xs">{quantity}</span>
            <button
              type="button"
              onClick={() => increaseQuantity({ _id: item._id })}
              aria-label={`Increase ${item.productName} quantity`}
              className="flex h-8 w-8 items-center justify-center text-[#786b6b]"
            >
              <FiPlus className="text-xs" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              removeItem(item._id);
              toast.info("Beauty find removed from your bag.");
            }}
            aria-label={`Remove ${item.productName} from your bag`}
            className="p-2 text-[#897d7b] hover:text-[#a76e79]"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>

      <div className="hidden shrink-0 flex-col items-end gap-3 sm:flex">
        <span className="text-sm font-semibold text-[#302326]">
          {formatMad(Number(item.price) * quantity)}
        </span>
        <div className="flex items-center border border-[#eee5e2]">
          <button
            type="button"
            onClick={() => decreaseQuantity({ _id: item._id })}
            aria-label={`Decrease ${item.productName} quantity`}
            className="flex h-8 w-8 items-center justify-center text-[#786b6b]"
          >
            <FiMinus className="text-xs" />
          </button>
          <span className="w-7 text-center text-xs">{quantity}</span>
          <button
            type="button"
            onClick={() => increaseQuantity({ _id: item._id })}
            aria-label={`Increase ${item.productName} quantity`}
            className="flex h-8 w-8 items-center justify-center text-[#786b6b]"
          >
            <FiPlus className="text-xs" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
