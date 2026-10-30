import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiHeart, FiMapPin, FiStar } from "react-icons/fi";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { editorialImage } from "../../assets/images";

const About = () => (
  <main className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
    <Breadcrumbs title="A little about us" />

    <section className="grid overflow-hidden bg-[#f7e8e7] md:grid-cols-[1fr_0.9fr]">
      <div className="flex flex-col items-start justify-center px-7 py-12 sm:px-12 lg:px-16">
        <p className="pink-dose-kicker mb-5">The Pink Dose story</p>
        <h1 className="max-w-xl font-titleFont text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
          A little French beauty. A little more you.
        </h1>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#725f62] sm:text-base">
          Pink Dose is a beauty shop in Morocco for people who love discovering
          Sephora. We bring original Sephora products from France, making it
          easier to find the beauty favourites you’ve been looking for.
        </p>
        <Link to="/shop" className="pink-dose-button mt-8">
          Explore the beauty edit <FiArrowUpRight />
        </Link>
      </div>
      <div className="relative min-h-[310px] sm:min-h-[430px]">
        <img
          src={editorialImage}
          alt="A calming skin-care moment"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>

    <section className="mx-auto grid max-w-4xl gap-10 py-16 sm:grid-cols-3 sm:gap-8 sm:py-20">
      {[
        {
          icon: FiStar,
          title: "Original Sephora finds",
          description:
            "A beauty edit sourced in France, brought together for our community in Morocco.",
        },
        {
          icon: FiMapPin,
          title: "France to Morocco",
          description:
            "The joy of discovering French beauty, made closer to home.",
        },
        {
          icon: FiHeart,
          title: "Beauty, your way",
          description:
            "Makeup, skin care and fragrance to help you find what feels like you.",
        },
      ].map(({ icon: Icon, title, description }) => (
        <article key={title} className="border-t border-[#e7d9d7] pt-5">
          <Icon className="mb-4 text-xl text-[#b87984]" />
          <h2 className="font-titleFont text-xl">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-[#786b6b]">{description}</p>
        </article>
      ))}
    </section>

    <section className="border-y border-[#eee5e2] py-12 text-center sm:py-16">
      <p className="pink-dose-kicker mb-3">Your beauty era starts here</p>
      <h2 className="pink-dose-section-heading">
        Find your next little favourite.
      </h2>
      <Link to="/contact" className="pink-dose-section-link mt-5 inline-flex">
        Say hello to Pink Dose
      </Link>
    </section>
  </main>
);

export default About;
