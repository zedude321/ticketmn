import React from "react";

export const CalendarIcon = ({ ...other }) => {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 14 14" {...other}>
      <path
        fill="currentColor"
        d="M11.083 1.167H10.5V.583a.583.583 0 10-1.167 0v.584H4.667V.583a.583.583 0 10-1.167 0v.584h-.583A2.92 2.92 0 000 4.083v7A2.92 2.92 0 002.917 14h8.166A2.92 2.92 0 0014 11.083v-7a2.92 2.92 0 00-2.917-2.916zM2.917 2.333h8.166c.965 0 1.75.785 1.75 1.75v.584H1.167v-.584c0-.965.785-1.75 1.75-1.75zm8.166 10.5H2.917c-.965 0-1.75-.785-1.75-1.75v-5.25h11.666v5.25c0 .965-.785 1.75-1.75 1.75zm0-4.666c0 .322-.26.583-.583.583h-7a.583.583 0 110-1.167h7c.323 0 .583.262.583.584zM7 10.5c0 .322-.26.583-.583.583H3.5a.583.583 0 110-1.166h2.917c.322 0 .583.261.583.583z"
      ></path>
    </svg>
  );
};
