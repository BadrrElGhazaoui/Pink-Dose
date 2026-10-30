import React from "react";
import NavTitle from "./NavTitle";
import { categories } from "../../../../constants";

const Category = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div>
        <ul className="flex flex-col gap-2 text-sm lg:text-base">
          {categories.map(({ title }) => {
            const isSelected = selectedCategory === title;
            return (
              <li
                key={title}
              >
                <button
                  type="button"
                  onClick={() =>
                    onSelectCategory?.(isSelected ? null : title)
                  }
                  aria-pressed={isSelected}
                  className={`flex w-full items-center justify-between border-b border-[#eee5e2] pb-2 text-left transition-colors ${
                    isSelected
                      ? "font-semibold text-[#a76e79]"
                      : "text-[#786b6b] hover:text-[#302326]"
                  }`}
                >
                  <span>{title}</span>
                  {isSelected && <span className="text-xs">Selected</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
