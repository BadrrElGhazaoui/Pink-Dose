import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumbs = ({ title }) => {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/")[1]?.replaceAll("-", " ");

  return (
    <div className="flex flex-col gap-2 py-9 sm:py-11">
      <h1 className="font-titleFont text-3xl font-medium text-[#302326] sm:text-4xl">
        {title}
      </h1>
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1 text-xs capitalize text-[#897d7b]"
      >
        <Link to="/" className="transition-colors hover:text-[#a76e79]">
          Pink Dose
        </Link>
        <FiChevronRight className="text-[0.7rem]" />
        <span className="text-[#65575a]">{currentPage}</span>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
