import React from "react";
import NavTitle from "./NavTitle";

const Price = ({ selectedPrice, onSelectPrice }) => {
  const priceList = [
    { _id: 950, priceOne: 0, priceTwo: 299 },
    { _id: 951, priceOne: 300, priceTwo: 399 },
    { _id: 952, priceOne: 400, priceTwo: 599 },
    { _id: 953, priceOne: 600, priceTwo: 1200 },
    { _id: 954, priceOne: 1201, priceTwo: 10000 },
  ];

  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-2 text-sm lg:text-base">
          {priceList.map((item) => {
            const isSelected =
              selectedPrice &&
              selectedPrice.priceOne === item.priceOne &&
              selectedPrice.priceTwo === item.priceTwo;

            return (
              <li key={item._id}>
                <button
                  type="button"
                  onClick={() =>
                    onSelectPrice?.(isSelected ? null : item)
                  }
                  aria-pressed={Boolean(isSelected)}
                  className={`flex w-full items-center justify-between border-b border-[#eee5e2] pb-2 text-left text-sm transition-colors ${
                    isSelected
                      ? "font-semibold text-[#a76e79]"
                      : "text-[#786b6b] hover:text-[#302326]"
                  }`}
                >
                  <span>
                    {item.priceOne.toLocaleString("fr-MA")}–
                    {item.priceTwo.toLocaleString("fr-MA")} MAD
                  </span>
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

export default Price;
