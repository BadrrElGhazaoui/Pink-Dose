import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import Product from "../../components/home/Products/Product";
import { categories, paginationItems } from "../../constants";
import { editorialImage, portraitImage } from "../../assets/images";

const Home = () => (
  <div className="w-full pb-16">
    <Banner />
    <BannerBottom />

    <section className="mx-auto max-w-[1440px] px-4 pb-14 pt-12 sm:px-6 lg:px-10 lg:pb-20 lg:pt-16">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="pink-dose-kicker mb-3">Explore Sephora France</p>
          <h2 className="pink-dose-section-heading">Shop by beauty category</h2>
        </div>
        <Link to="/shop" className="pink-dose-section-link hidden sm:inline-flex">
          Explore the edit
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {categories.map((category, index) => (
          <Link
            key={category.title}
            to={`/shop?category=${encodeURIComponent(category.title)}`}
            className={`group relative block overflow-hidden bg-[#f2e9e5] ${
              index % 2 === 0 ? "aspect-[0.83]" : "aspect-[0.83] md:mt-8"
            }`}
          >
            <img
              src={category.image}
              alt={`${category.title} beauty`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241a1c]/60 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-white sm:p-5">
              <span className="font-titleFont text-xl sm:text-2xl">{category.title}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-base transition-colors group-hover:bg-white group-hover:text-[#302326]">
                <FiArrowUpRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/shop" className="pink-dose-section-link mt-6 inline-flex sm:hidden">
        Explore the edit
      </Link>
    </section>

    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="pink-dose-kicker mb-3">A little pink dose</p>
          <h2 className="pink-dose-section-heading">Sephora France favourites</h2>
          <p className="mt-2 max-w-lg text-sm leading-6 text-[#786b6b]">
            Real products from Sephora France, shown with original illustrative
            artwork (not official product photos). MAD prices use an
            approximate 10.8 MAD per euro conversion.
          </p>
        </div>
        <Link to="/shop" className="pink-dose-section-link hidden sm:inline-flex">
          Shop all beauty
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4 lg:gap-6">
        {paginationItems.slice(0, 4).map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
      <Link to="/shop" className="pink-dose-section-link mt-7 inline-flex sm:hidden">
        Shop all beauty
      </Link>
    </section>

    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="grid overflow-hidden bg-[#f5e8e5] md:grid-cols-2">
        <div className="relative min-h-[310px] md:min-h-[440px]">
          <img
            src={editorialImage}
            alt="A quiet moment in a skin-care ritual"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center px-7 py-10 sm:px-12 lg:px-16">
          <p className="pink-dose-kicker mb-4">France, with love</p>
          <h2 className="max-w-md font-titleFont text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.8rem]">
            The beauty you love, a little closer to home.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#725f62]">
            Pink Dose brings authentic Sephora beauty from France to Morocco.
            Find your next favourite, or simply take a moment for yourself.
          </p>
          <Link to="/about" className="pink-dose-button pink-dose-button-outline mt-7">
            Get to know us <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="pink-dose-kicker mb-3">A little more you</p>
          <h2 className="pink-dose-section-heading">Your next little favourite</h2>
        </div>
        <Link to="/shop" className="pink-dose-section-link hidden sm:inline-flex">
          Discover more
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 lg:grid-cols-4 lg:gap-6">
        {paginationItems.slice(4, 8).map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
      <Link to="/shop" className="pink-dose-section-link mt-7 inline-flex sm:hidden">
        Discover more
      </Link>
    </section>

    <section className="mx-auto max-w-[1440px] px-4 pb-4 pt-10 sm:px-6 lg:px-10">
      <div className="grid overflow-hidden bg-[#302326] text-white sm:grid-cols-[1fr_0.85fr]">
        <div className="flex flex-col items-start justify-center px-7 py-10 sm:px-12 lg:px-16">
          <FiHeart className="mb-5 text-2xl text-[#e2afb5]" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#e2afb5]">
            A note from Pink Dose
          </p>
          <h2 className="mt-4 max-w-md font-titleFont text-3xl font-medium leading-tight sm:text-4xl">
            Beauty is personal. Your dose should be too.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            We believe the best beauty routine is the one that feels like you.
            Let’s find your next favourite together.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 border-b border-[#e2afb5] pb-1 text-xs font-medium uppercase tracking-[0.1em] text-white"
          >
            We’re here to help <FiArrowUpRight />
          </Link>
        </div>
        <div className="relative min-h-[300px] sm:min-h-[400px]">
          <img
            src={portraitImage}
            alt="A portrait celebrating individual beauty"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
          />
        </div>
      </div>
    </section>
  </div>
);

export default Home;
