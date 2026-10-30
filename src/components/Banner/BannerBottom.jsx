import React from "react";
import { FiHeart, FiMapPin, FiPackage } from "react-icons/fi";

const assurances = [
  {
    icon: FiHeart,
    title: "Authentic beauty",
    detail: "Original Sephora finds, selected with care",
  },
  {
    icon: FiMapPin,
    title: "From France to Morocco",
    detail: "A little French beauty, closer to home",
  },
  {
    icon: FiPackage,
    title: "A thoughtful edit",
    detail: "Beauty favourites worth making room for",
  },
];

const BannerBottom = () => (
  <section
    aria-label="The Pink Dose promise"
    className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10"
  >
    <div className="grid border-b border-[#eee5e2] py-7 sm:grid-cols-3 sm:py-8">
      {assurances.map(({ icon: Icon, title, detail }, index) => (
        <div
          key={title}
          className={`flex items-center gap-3 px-2 py-3 sm:justify-center sm:px-4 ${
            index > 0 ? "sm:border-l sm:border-[#eee5e2]" : ""
          }`}
        >
          <Icon className="shrink-0 text-xl text-[#bc7f89]" />
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#302326]">
              {title}
            </p>
            <p className="mt-1 text-[0.68rem] leading-5 text-[#786b6b]">
              {detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BannerBottom;
