import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { navBarList } from "../../../constants";

const Brand = ({ onClick }) => (
  <Link
    to="/"
    onClick={onClick}
    className="flex flex-col items-center text-[#302326]"
    aria-label="Pink Dose home"
  >
    <span className="pink-dose-wordmark">PINK DOSE</span>
    <span className="mt-1 text-[0.53rem] font-medium uppercase tracking-[0.29em] text-[#92777a]">
      Your beauty era starts here
    </span>
  </Link>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#f3dfe0] px-4 py-2 text-center text-[0.63rem] font-medium tracking-[0.12em] text-[#684d52]">
        AUTHENTIC SEPHORA BEAUTY · SELECTED IN FRANCE, FOR MOROCCO
      </div>
      <header className="sticky top-0 z-50 border-b border-[#eee5e2] bg-[#fffdfb]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="w-10 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-xl text-[#302326]"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <FiMenu />
            </button>
          </div>

          <Brand />

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navBarList.map(({ _id, title, link }) => (
              <NavLink
                key={_id}
                to={link}
                end={link === "/"}
                className={({ isActive }) =>
                  `relative py-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "text-[#a76e79] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#bc8992]"
                      : "text-[#65575a] hover:text-[#a76e79]"
                  }`
                }
              >
                {title}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 text-xs font-medium text-[#65575a] transition-colors hover:text-[#a76e79] sm:flex"
          >
            <FiInstagram className="text-base" />
            <span>Say hello</span>
          </Link>
          <span className="w-10 md:hidden" aria-hidden="true" />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <div className="fixed inset-0 z-[60] flex md:hidden">
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="absolute inset-0 bg-[#302326]/40"
                aria-label="Close navigation menu"
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.22 }}
                className="relative flex h-full w-[min(84vw,370px)] flex-col bg-[#fffdfb] p-6 shadow-2xl"
                aria-label="Mobile navigation"
              >
                <div className="flex items-center justify-between border-b border-[#eee5e2] pb-6">
                  <Brand onClick={() => setMenuOpen(false)} />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center text-xl"
                    aria-label="Close navigation menu"
                  >
                    <FiX />
                  </button>
                </div>
                <nav className="mt-6 flex flex-col" aria-label="Mobile navigation links">
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      to={link}
                      end={link === "/"}
                      onClick={() => setMenuOpen(false)}
                      className="border-b border-[#eee5e2] py-4 font-titleFont text-xl text-[#302326]"
                    >
                      {title}
                    </NavLink>
                  ))}
                </nav>
                <p className="mt-auto pt-8 text-xs leading-6 text-[#786b6b]">
                  A little French beauty, a little more you.
                </p>
              </motion.aside>
            </div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
