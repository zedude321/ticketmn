import React from "react";

export const ClockIcon = ({ ...other }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      {...other}
    >
      <g fill="currentColor" clipPath="url(#clip0_797_15230)">
        <path d="M6 0a6 6 0 106 6 6.006 6.006 0 00-6-6zm0 10.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"></path>
        <path d="M5.25 5.527l-1.2.75a.75.75 0 10.796 1.272l1.434-.9a1 1 0 00.47-.85V3.886a.75.75 0 10-1.5 0v1.641z"></path>
      </g>
      <defs>
        <clipPath id="clip0_797_15230">
          <path fill="#fff" d="M0 0H12V12H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
