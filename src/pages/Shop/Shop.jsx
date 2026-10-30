import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import { paginationItems } from "../../constants";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isGridView, setIsGridView] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const selectedCategory = searchParams.get("category") || null;
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState("default");

  const hasActiveFilters =
    Boolean(selectedCategory) ||
    Boolean(selectedPrice);

  const setSelectedCategory = (category) => {
    const nextSearchParams = new URLSearchParams(searchParams);
    if (category) {
      nextSearchParams.set("category", category);
    } else {
      nextSearchParams.delete("category");
    }
    setSearchParams(nextSearchParams);
  };

  const resetAllFilters = () => {
    setSelectedCategory(null);
    setSelectedPrice(null);
    setSortBy("default");
  };

  // Filter and sort items dynamically
  const filteredProducts = useMemo(() => {
    let result = [...paginationItems];

    if (selectedCategory) {
      result = result.filter((item) => item.cat === selectedCategory);
    }

    if (selectedPrice) {
      result = result.filter((item) => {
        const p = parseFloat(item.price);
        return p >= selectedPrice.priceOne && p <= selectedPrice.priceTwo;
      });
    }

    // Sort items
    if (sortBy === "price-low") {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.productName.localeCompare(b.productName));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.productName.localeCompare(a.productName));
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
      <Breadcrumbs title="The beauty edit" />
      <p className="mb-8 max-w-2xl text-sm leading-6 text-[#786b6b]">
        Explore Sephora France's makeup, fragrance, face care, body and bath,
        and haircare categories. MAD prices are indicative conversions from
        current French prices and may vary.
      </p>

      {/* Main Shop Container */}
      <div className="flex h-full w-full flex-col gap-8 pb-20 mdl:flex-row">
        {/* Left Sidebar Navigation */}
        <div className="w-full shrink-0 mdl:w-[25%] lgl:w-[22%]">
          <ShopSideNav
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedPrice={selectedPrice}
            onSelectPrice={setSelectedPrice}
            onResetFilters={resetAllFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Right Main Content */}
        <div className="flex w-full flex-col gap-6 mdl:w-[75%] lgl:w-[78%]">
          <ProductBanner
            isGridView={isGridView}
            setIsGridView={setIsGridView}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            sortBy={sortBy}
            setSortBy={setSortBy}
            totalProductsCount={filteredProducts.length}
          />

          <Pagination
            items={filteredProducts}
            itemsPerPage={itemsPerPage}
            isGridView={isGridView}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
