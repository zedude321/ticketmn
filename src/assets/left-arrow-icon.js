import React from "react";

export const LeftArrowIcon = ({ ...other }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...other}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M9 6L15 12 9 18"></path>
    </svg>
  );
};
