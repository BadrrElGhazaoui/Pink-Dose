import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import { categories, paginationItems } from "../../../constants";
import { useOrebiStore } from "../../../store/useOrebiStore";
import { formatMad } from "../../../utils/currency";

const HeaderBottom = () => {
  const products = useOrebiStore((state) => state.products);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();
    if (!searchTerm) return [];

    return paginationItems.filter((item) =>
      [item.productName, item.cat, item.brand]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm)
    );
  }, [query]);

  const cartCount = products.reduce(
    (total, product) => total + (product.quantity || 1),
    0
  );

  const openProduct = (item) => {
    setQuery("");
    navigate(`/product/${item._id}`, { state: { item } });
  };

  return (
    <div className="sticky top-[82px] z-40 border-b border-[#eee5e2] bg-[#fffdfb]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-10">
        <nav
          className="order-2 flex w-full items-center justify-center gap-5 overflow-x-auto whitespace-nowrap pb-1 text-[0.63rem] font-medium uppercase tracking-[0.12em] text-[#786b6b] lg:order-1 lg:w-auto lg:justify-start lg:gap-6 lg:pb-0"
          aria-label="Beauty categories"
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/shop?category=${encodeURIComponent(category.title)}`}
              className="transition-colors hover:text-[#a76e79]"
            >
              {category.title}
            </Link>
          ))}
        </nav>

        <div className="order-1 relative flex min-w-0 flex-1 items-center gap-3 lg:order-2 lg:ml-auto lg:max-w-[390px]">
          <label className="flex h-10 min-w-0 flex-1 items-center gap-2 border-b border-[#ded1cf] px-1 text-[#786b6b] focus-within:border-[#a76e79]">
            <FiSearch className="shrink-0 text-base" aria-hidden="true" />
            <input
              className="h-full min-w-0 flex-1 bg-transparent text-xs text-[#302326] outline-none placeholder:text-[#a99c9b]"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search beauty"
              aria-label="Search products"
              aria-expanded={query.trim().length > 0}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="text-sm"
              >
                <FiX />
              </button>
            )}
          </label>

          {query.trim() && (
            <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-50 max-h-80 overflow-y-auto border border-[#eee5e2] bg-[#fffdfb] shadow-xl">
              {searchResults.length ? (
                searchResults.map((item) => (
                  <button
                    key={item._id}
                    type="button"
                    onClick={() => openProduct(item)}
                    className="flex w-full items-center gap-3 border-b border-[#eee5e2] p-3 text-left last:border-0 hover:bg-[#fbf2f1]"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="h-12 w-12 object-cover"
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-medium text-[#302326]">
                        {item.productName}
                      </span>
                      <span className="mt-1 block text-[0.65rem] text-[#786b6b]">
                        {item.brand ? `${item.brand} · ` : ""}
                        {formatMad(item.price)}
                      </span>
                    </span>
                  </button>
                ))
              ) : (
                <p className="p-4 text-xs text-[#786b6b]">
                  No beauty finds match “{query}”. Try makeup, skin or fragrance.
                </p>
              )}
            </div>
          )}

          <Link
            to="/signin"
            className="flex h-10 w-9 shrink-0 items-center justify-center text-lg text-[#57484b] transition-colors hover:text-[#a76e79]"
            aria-label="Your account"
          >
            <FiUser />
          </Link>
          <Link
            to="/cart"
            className="relative flex h-10 w-9 shrink-0 items-center justify-center text-lg text-[#57484b] transition-colors hover:text-[#a76e79]"
            aria-label={`Shopping bag, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
          >
            <FiShoppingBag />
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#302326] px-1 text-[0.57rem] text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
