import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiSearch } from "react-icons/fi";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { editorialImage, makeupImage, serumImage } from "../../assets/images";

const articles = [
  {
    id: "skin-ritual",
    category: "Skincare",
    title: "A skin-care ritual that feels like yours",
    excerpt:
      "A gentle reminder that a thoughtful routine can be simple, personal and a little moment just for you.",
    image: editorialImage,
    paragraphs: [
      "A good skin-care ritual doesn’t have to be complicated. Start with the steps that feel comfortable for you, and give yourself room to discover what works with your skin and your routine.",
      "Take your time choosing products, read the instructions on their packaging, and introduce new products thoughtfully. If you have concerns about your skin, a qualified professional can offer advice that’s right for you.",
      "Most of all, let your routine be yours. A small moment of care can be reason enough.",
    ],
  },
  {
    id: "makeup-mood",
    category: "Makeup",
    title: "Makeup is a mood, not a rulebook",
    excerpt:
      "A favourite lip, a soft wash of colour, or nothing at all — beauty is better when it feels like you.",
    image: makeupImage,
    paragraphs: [
      "Some days call for a little extra colour. Other days, the best look is the one you already have. Makeup is a lovely way to experiment, but it never needs to follow a set of rules.",
      "Try a texture or shade that catches your eye, take inspiration from the colours you already love, and build your look at your own pace.",
      "Keep the products and tools you enjoy close at hand, and have fun with the rest.",
    ],
  },
  {
    id: "little-rituals",
    category: "Beauty notes",
    title: "The little rituals that make a day",
    excerpt:
      "An everyday favourite, a familiar fragrance, a few quiet minutes — beauty lives in the little things.",
    image: serumImage,
    paragraphs: [
      "Beauty doesn’t only belong to special occasions. It can be a familiar scent before heading out, a few quiet minutes in front of the mirror, or the product you reach for without thinking.",
      "There is no perfect routine to keep up with. Pick what brings you joy, make space for it when you can, and let the small rituals change along with you.",
      "That’s the Pink Dose feeling: a little more you, one day at a time.",
    ],
  },
];

const Journal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);
  const searchTerm = searchQuery.trim().toLowerCase();
  const filteredArticles = articles.filter((article) =>
    [article.title, article.excerpt, article.category]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm)
  );

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
      <Breadcrumbs title={activeArticle?.title || "Beauty notes"} />

      {activeArticle ? (
        <article className="mx-auto max-w-3xl border-t border-[#eee5e2] pt-8">
          <button
            type="button"
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#786b6b] hover:text-[#a76e79]"
          >
            <FiArrowLeft />
            Back to beauty notes
          </button>
          <div className="mt-7 aspect-[16/8] overflow-hidden bg-[#f7f0ed]">
            <img
              src={activeArticle.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <p className="pink-dose-kicker mt-8">{activeArticle.category}</p>
          <h1 className="mt-3 font-titleFont text-3xl leading-tight sm:text-5xl">
            {activeArticle.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-[#786b6b]">
            {activeArticle.excerpt}
          </p>
          <div className="mt-8 space-y-5 text-sm leading-7 text-[#65575a]">
            {activeArticle.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            to="/shop"
            className="pink-dose-section-link mt-9 inline-flex items-center gap-2"
          >
            Explore the beauty edit <FiArrowUpRight />
          </Link>
        </article>
      ) : (
        <>
          <div className="flex flex-col justify-between gap-5 border-t border-[#eee5e2] py-7 sm:flex-row sm:items-end">
            <div>
              <p className="pink-dose-kicker mb-2">A little inspiration</p>
              <p className="max-w-xl text-sm leading-6 text-[#786b6b]">
                Thoughts on beauty, small rituals, and finding what feels like
                you.
              </p>
            </div>
            <label className="flex h-10 w-full items-center gap-2 border-b border-[#ded1cf] px-1 text-[#786b6b] focus-within:border-[#a76e79] sm:max-w-xs">
              <FiSearch className="shrink-0" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search beauty notes"
                aria-label="Search beauty notes"
                className="h-full min-w-0 flex-1 bg-transparent text-xs text-[#302326] outline-none placeholder:text-[#a99c9b]"
              />
            </label>
          </div>

          {filteredArticles.length ? (
            <div className="grid gap-6 border-t border-[#eee5e2] pt-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <button
                  type="button"
                  key={article.id}
                  onClick={() => {
                    setActiveArticle(article);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#f7f0ed]">
                    <img
                      src={article.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                  </div>
                  <p className="pink-dose-kicker mt-4">{article.category}</p>
                  <span className="mt-2 block font-titleFont text-2xl leading-snug text-[#302326]">
                    {article.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-[#786b6b]">
                    {article.excerpt}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#a76e79]">
                    Read the note <FiArrowUpRight />
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <p className="border-t border-[#eee5e2] py-12 text-center text-sm text-[#786b6b]">
              No beauty notes match that search. Try another word.
            </p>
          )}
        </>
      )}
    </main>
  );
};

export default Journal;
