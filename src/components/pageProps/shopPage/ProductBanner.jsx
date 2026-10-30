import React from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({
  isGridView,
  setIsGridView,
  itemsPerPage,
  setItemsPerPage,
  sortBy,
  setSortBy,
  totalProductsCount,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#eee5e2] bg-transparent py-4">
      {/* Grid / List View Toggle Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 border border-[#eee5e2] p-1 bg-white">
          <button
            type="button"
            onClick={() => setIsGridView(true)}
            title="Grid View"
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
              isGridView
                ? "bg-[#302326] text-white"
                : "text-[#786b6b] hover:text-[#302326] hover:bg-[#f7f0ed]"
            }`}
          >
            <BsGridFill className="text-base" />
          </button>
          <button
            type="button"
            onClick={() => setIsGridView(false)}
            title="List View"
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
              !isGridView
                ? "bg-[#302326] text-white"
                : "text-[#786b6b] hover:text-[#302326] hover:bg-[#f7f0ed]"
            }`}
          >
            <ImList className="text-sm" />
          </button>
        </div>
        <span className="hidden text-sm font-medium text-[#786b6b] sm:inline-block">
          {totalProductsCount} {totalProductsCount === 1 ? "beauty find" : "beauty finds"}
        </span>
      </div>

      {/* Sort By & Show Options */}
      <div className="flex items-center gap-3 md:gap-6 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2 text-sm text-secondary relative">
          <label htmlFor="sortBy" className="block whitespace-nowrap font-medium">
            Sort:
          </label>
          <div className="relative">
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-36 md:w-44 border border-[#e7d9d7] bg-white py-1.5 pl-3 pr-8 text-[#302326] text-sm font-medium appearance-none focus:outline-none focus:border-[#a76e79]"
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
            <span className="absolute text-xs right-2.5 top-3 pointer-events-none text-gray-500">
              <GoTriangleDown />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-secondary relative">
          <label htmlFor="itemsPerPage" className="block whitespace-nowrap font-medium">
            Show:
          </label>
          <div className="relative">
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="w-16 md:w-20 border border-[#e7d9d7] bg-white py-1.5 pl-3 pr-6 text-[#302326] text-sm font-medium appearance-none focus:outline-none focus:border-[#a76e79]"
            >
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
            </select>
            <span className="absolute text-xs right-2 top-3 pointer-events-none text-gray-500">
              <GoTriangleDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
