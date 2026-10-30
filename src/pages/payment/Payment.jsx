import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiInfo, FiShoppingBag } from "react-icons/fi";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { formatMad } from "../../utils/currency";
import { useOrebiStore } from "../../store/useOrebiStore";

const Payment = () => {
  const products = useOrebiStore((state) => state.products);
  const total = products.reduce(
    (sum, product) =>
      sum + (Number(product.price) || 0) * (product.quantity || 1),
    0
  );

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
      <Breadcrumbs title="Order details" />
      <div className="mx-auto max-w-2xl border border-[#eee5e2] bg-white p-6 sm:p-10">
        <div className="flex items-start gap-3 border border-[#e7d9d7] bg-[#fbf2f1] p-4">
          <FiInfo className="mt-0.5 shrink-0 text-lg text-[#a76e79]" />
          <div>
            <h2 className="font-semibold text-[#302326]">
              Checkout isn’t connected yet
            </h2>
            <p className="mt-1 text-sm leading-6 text-[#786b6b]">
              This preview does not accept payment or place orders. No card
              details are collected. Please confirm product availability,
              delivery and payment directly with Pink Dose before purchasing.
            </p>
          </div>
        </div>

        <h3 className="mt-8 font-titleFont text-2xl text-[#302326]">
          Your beauty bag
        </h3>
        {products.length ? (
          <ul className="mt-4 divide-y divide-[#eee5e2] border-y border-[#eee5e2]">
            {products.map((product) => (
              <li
                key={product._id}
                className="flex items-center justify-between gap-4 py-3 text-sm"
              >
                <span className="text-[#65575a]">
                  {product.productName}                   <span className="text-[#9b8585]">× {product.quantity || 1}</span>
                </span>
                <span className="shrink-0 font-medium text-[#302326]">
                  {formatMad(Number(product.price) * (product.quantity || 1))}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-[#786b6b]">
            Your bag is empty. Explore the edit to find something lovely.
          </p>
        )}

        {products.length > 0 && (
          <div className="mt-4 flex items-center justify-between text-sm font-semibold text-[#302326]">
            <span>Subtotal</span>
            <span>{formatMad(total)}</span>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/cart"
            className="pink-dose-button pink-dose-button-outline w-full"
          >
            <FiArrowLeft /> Back to your bag
          </Link>
          <Link to="/shop" className="pink-dose-button w-full">
            <FiShoppingBag /> Explore beauty
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Payment;
