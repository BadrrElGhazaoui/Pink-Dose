import React from "react";
import { BiCaretDown } from "react-icons/bi";

const NavTitle = ({ title, icons }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      {icons ? (
        <>
          <h3 className="text-sm font-semibold tracking-wide text-[#302326] lg:text-base">{title}</h3>
          {icons && <BiCaretDown />}
        </>
      ) : (
        <>
          <h3 className="text-sm font-semibold tracking-wide text-[#302326] lg:text-base">{title}</h3>
        </>
      )}
    </div>
  );
};

export default NavTitle;
