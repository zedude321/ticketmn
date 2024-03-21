import React from "react";

export const UpDownArrowIcon = ({ ...other }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      color="currentColor"
      data-chevron="true"
      viewBox="0 0 15 15"
      {...other}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.932 5.432a.45.45 0 10.636.636L7.5 4.136l1.932 1.932a.45.45 0 00.636-.636l-2.25-2.25a.45.45 0 00-.636 0l-2.25 2.25zm5.136 4.136a.45.45 0 00-.636-.636L7.5 10.864 5.568 8.932a.45.45 0 00-.636.636l2.25 2.25a.45.45 0 00.636 0l2.25-2.25z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
