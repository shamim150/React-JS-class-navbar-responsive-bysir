import React from "react";
import { Link } from "react-router-dom";

const Li = ({liText, className}) => {
  return (
    <li>
      <Link className={`font-DM text-[#767676] font-bold hover:text-primary transition-all duration-300 ${className}`}> {liText} </Link>
    </li>
  );
};

export default Li;
