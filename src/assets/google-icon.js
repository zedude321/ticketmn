import React from "react";

export const GoogleIcon = ({ ...other }) => {
  return (
    <svg
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
      <path d="M17.788 5.108A9 9 0 1021 12h-8"></path>
    </svg>
  );
};
