import React from "react";
import Category from "./shopBy/Category";
import Price from "./shopBy/Price";
import { FiRotateCcw } from "react-icons/fi";

const ShopSideNav = ({
  selectedCategory,
  onSelectCategory,
  selectedPrice,
  onSelectPrice,
  onResetFilters,
  hasActiveFilters,
}) => (
  <aside className="flex w-full flex-col gap-7">
    {hasActiveFilters && (
      <button
        type="button"
        onClick={onResetFilters}
        className="flex w-full items-center justify-center gap-2 border border-[#e7d9d7] py-2.5 text-xs font-medium text-[#765f62] transition-colors hover:bg-[#f8eeed]"
      >
        <FiRotateCcw />
        Clear filters
      </button>
    )}
    <Category
      selectedCategory={selectedCategory}
      onSelectCategory={onSelectCategory}
    />
    <Price selectedPrice={selectedPrice} onSelectPrice={onSelectPrice} />
  </aside>
);

export default ShopSideNav;
