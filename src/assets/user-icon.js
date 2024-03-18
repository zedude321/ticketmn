import React from "react";

export const UserIcon = ({ ...other }) => {
  return (
    <svg
      width="2.5rem"
      height="2.5rem"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      color="#000"
      viewBox="0 0 24 24"
      {...other}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="7" r="4"></circle>
      <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"></path>
    </svg>
  );
};
