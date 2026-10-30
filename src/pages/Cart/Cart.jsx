import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiLock,
  FiShoppingBag,
  FiTrash2,
} from "react-icons/fi";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useOrebiStore } from "../../store/useOrebiStore";
import { formatMad } from "../../utils/currency";
import ItemCard from "./ItemCard";
import { toast } from "react-toastify";

const Cart = () => {
  const products = useOrebiStore((state) => state.products);
  const user = useOrebiStore((state) => state.user);
  const resetCart = useOrebiStore((state) => state.resetCart);
  const navigate = useNavigate();

  const subtotal = products.reduce(
    (total, product) =>
      total + (Number(product.price) || 0) * (product.quantity || 1),
    0
  );

  const handleCheckout = () => {
    if (!user) {
      toast.info("Sign in to continue.");
      navigate("/signin", { state: { from: "/cart" } });
      return;
    }

    navigate("/paymentgateway");
  };

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
      <Breadcrumbs title="Your beauty bag" />

      {products.length ? (
        <div className="grid items-start gap-8 border-t border-[#eee5e2] pt-8 lg:grid-cols-[1fr_350px]">
          <section aria-label="Items in your bag">
            <div className="mb-4 flex items-center justify-between border-b border-[#eee5e2] pb-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#897d7b]">
              <span>Your finds ({products.length})</span>
              <button
                type="button"
                onClick={() => {
                  resetCart();
                  toast.info("Your beauty bag is clear.");
                }}
                className="inline-flex items-center gap-1.5 normal-case tracking-normal transition-colors hover:text-[#a76e79]"
              >
                <FiTrash2 />
                Clear bag
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {products.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#786b6b] hover:text-[#a76e79]"
            >
              <FiArrowLeft />
              Continue discovering
            </Link>
          </section>

          <aside className="border border-[#eee5e2] bg-[#fffdfb] p-5 sm:p-6">
            <p className="pink-dose-kicker">A little more you</p>
            <h2 className="mt-2 font-titleFont text-2xl">Order summary</h2>
            <div className="mt-6 flex items-center justify-between border-y border-[#eee5e2] py-4 text-sm">
              <span className="text-[#786b6b]">Subtotal</span>
              <span className="font-semibold text-[#302326]">
                {formatMad(subtotal)}
              </span>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#897d7b]">
              Delivery and order details will be confirmed with Pink Dose
              before your purchase is finalised.
            </p>
            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#786b6b]">
              <FiLock className="mt-0.5 shrink-0 text-[#b87984]" />
              No payment is taken until your order details are confirmed.
            </p>
            <button
              type="button"
              onClick={handleCheckout}
              className="pink-dose-button mt-6 w-full"
            >
              Continue <FiArrowRight />
            </button>
          </aside>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center border-t border-[#eee5e2] py-20 text-center"
        >
          <FiShoppingBag className="text-4xl text-[#bc8992]" />
          <h2 className="mt-5 font-titleFont text-3xl text-[#302326]">
            Your beauty bag is waiting
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#786b6b]">
            Discover something lovely from the Pink Dose edit.
          </p>
          <Link to="/shop" className="pink-dose-button mt-7">
            Explore the beauty edit <FiArrowRight />
          </Link>
        </motion.div>
      )}
    </main>
  );
};

export default Cart;
