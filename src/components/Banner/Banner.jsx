import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { heroImage } from "../../assets/images";

const Banner = () => (
  <section className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-10 lg:pt-8">
    <div className="relative grid min-h-[480px] overflow-hidden bg-[#f7e8e7] sm:min-h-[560px] lg:min-h-[590px] lg:grid-cols-[0.86fr_1.14fr]">
      <div className="relative z-10 flex flex-col items-start justify-center px-7 py-12 sm:px-12 lg:px-16 xl:px-20">
        <p className="pink-dose-kicker mb-5">Your beauty, your way</p>
        <h1 className="max-w-[530px] font-titleFont text-[3.1rem] font-medium leading-[1.03] tracking-[-0.045em] text-[#302326] sm:text-6xl xl:text-[4.5rem]">
          Your beauty
          <br />
          era starts <span className="italic text-[#b97381]">here.</span>
        </h1>
        <p className="mt-6 max-w-sm text-sm leading-7 text-[#725f62] sm:text-base">
          A thoughtful edit of authentic Sephora beauty, brought from France
          closer to home in Morocco.
        </p>
        <Link
          to="/shop"
          className="pink-dose-button mt-8"
          aria-label="Discover the Pink Dose beauty edit"
        >
          Discover the edit <FiArrowUpRight className="text-base" />
        </Link>
        <p className="mt-8 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#8e6e72]">
          Selected in France · For your Morocco
        </p>
      </div>

      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-full">
        <img
          src={heroImage}
          alt="An elegant edit of makeup and beauty essentials"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#312324]/15 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#f7e8e7]/10 lg:via-transparent lg:to-transparent" />
        <div className="absolute bottom-5 right-5 border border-white/60 bg-white/80 px-4 py-3 text-right backdrop-blur-sm sm:bottom-8 sm:right-8">
          <span className="block font-titleFont text-lg italic text-[#4c373c]">
            A little more you
          </span>
          <span className="mt-1 block text-[0.59rem] uppercase tracking-[0.16em] text-[#786b6b]">
            The Pink Dose edit
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
