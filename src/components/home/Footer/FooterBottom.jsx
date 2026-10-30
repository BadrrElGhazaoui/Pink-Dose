import React from "react";

const FooterBottom = () => (
  <div className="border-t border-[#eee5e2] bg-[#f7f0ed] px-4 py-5 text-center text-[0.65rem] text-[#897d7b] sm:px-6 lg:px-10">
    <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 sm:flex-row">
      <p>© {new Date().getFullYear()} Pink Dose. All rights reserved.</p>
      <p>Authentic beauty · From France to Morocco</p>
    </div>
  </div>
);

export default FooterBottom;
