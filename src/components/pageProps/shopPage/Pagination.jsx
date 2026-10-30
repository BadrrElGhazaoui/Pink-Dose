import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Product from "../../home/Products/Product";
import { formatMad } from "../../../utils/currency";

const Pagination = ({ items, itemsPerPage, isGridView }) => {
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [items, itemsPerPage]);

  const currentItems = items.slice(itemOffset, itemOffset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setItemOffset((selected * itemsPerPage) % items.length);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  if (!items.length) {
    return (
      <div className="border border-dashed border-[#e7d9d7] px-5 py-16 text-center">
        <p className="font-titleFont text-2xl text-[#302326]">
          No beauty finds just yet
        </p>
        <p className="mt-2 text-sm text-[#786b6b]">
          Try another category or clear your filters.
        </p>
      </div>
    );
  }

  return (
    <div>
      {isGridView ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-3 lg:gap-6">
          {currentItems.map((item) => (
            <Product key={item._id} {...item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-[#eee5e2]">
          {currentItems.map((item) => (
            <article
              key={item._id}
              className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center"
            >
              <Link
                to={`/product/${item._id}`}
                state={{ item }}
                className="h-36 w-full shrink-0 overflow-hidden bg-[#f5f0ec] sm:h-32 sm:w-32"
              >
                <img
                  src={item.img}
                  alt={item.productName}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.12em] text-[#9b8585]">
                    {item.cat}
                  </p>
                  <Link
                    to={`/product/${item._id}`}
                    state={{ item }}
                    className="mt-1 block font-titleFont text-xl text-[#302326] hover:text-[#a76e79]"
                  >
                    {item.productName}
                  </Link>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-[#786b6b]">
                    {item.des}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-semibold text-[#302326]">
                    {formatMad(item.price)}
                  </p>
                  <Link
                    to={`/product/${item._id}`}
                    state={{ item }}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#a76e79]"
                  >
                    Discover <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {pageCount > 1 && (
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center items-center gap-2 mt-12"
          pageLinkClassName="flex h-9 min-w-9 items-center justify-center border border-[#eee5e2] px-2 text-xs text-[#786b6b] hover:border-[#bc8992]"
          activeLinkClassName="!border-[#302326] !bg-[#302326] !text-white"
          previousLabel="‹"
          nextLabel="›"
          previousLinkClassName="flex h-9 w-9 items-center justify-center border border-[#eee5e2] text-lg text-[#786b6b]"
          nextLinkClassName="flex h-9 w-9 items-center justify-center border border-[#eee5e2] text-lg text-[#786b6b]"
          disabledLinkClassName="cursor-not-allowed opacity-40"
          breakLabel="…"
          breakLinkClassName="px-1 text-[#786b6b]"
        />
      )}
    </div>
  );
};

export default Pagination;
