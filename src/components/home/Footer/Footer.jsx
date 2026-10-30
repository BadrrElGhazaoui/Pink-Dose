import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { categories } from "../../../constants";

const Footer = () => (
  <footer className="mt-12 border-t border-[#eee5e2] bg-[#f7f0ed]">
    <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-10 lg:py-16">
      <div>
        <Link to="/" className="inline-flex flex-col text-[#302326]">
          <span className="pink-dose-wordmark">PINK DOSE</span>
          <span className="mt-2 text-[0.55rem] font-medium uppercase tracking-[0.25em] text-[#92777a]">
            Your beauty era starts here
          </span>
        </Link>
        <p className="mt-5 max-w-xs text-sm leading-7 text-[#786b6b]">
          Authentic Sephora beauty, brought from France to Morocco. A little
          more you, in every dose.
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#302326]">
          Explore
        </h2>
        <ul className="flex flex-col gap-3">
          {categories.map(({ title }) => (
            <li key={title}>
              <Link
                to={`/shop?category=${encodeURIComponent(title)}`}
                className="text-sm text-[#786b6b] transition-colors hover:text-[#a76e79]"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#302326]">
          Pink Dose
        </h2>
        <ul className="flex flex-col gap-3">
          <li><Link to="/about" className="text-sm text-[#786b6b] hover:text-[#a76e79]">Our story</Link></li>
          <li><Link to="/contact" className="text-sm text-[#786b6b] hover:text-[#a76e79]">Contact</Link></li>
          <li><Link to="/journal" className="text-sm text-[#786b6b] hover:text-[#a76e79]">Beauty journal</Link></li>
          <li><Link to="/cart" className="text-sm text-[#786b6b] hover:text-[#a76e79]">Your bag</Link></li>
        </ul>
      </div>

      <div className="border-t border-[#e7d9d7] pt-6 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <p className="pink-dose-kicker">From France, with love</p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-[#786b6b]">
          Looking for a particular beauty find? We’d love to hear what’s on your
          wish list.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#302326] hover:text-[#a76e79]"
        >
          Get in touch <FiArrowUpRight />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
