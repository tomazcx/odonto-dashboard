import React from "react";

interface ColorInterface{
  color?: string
}

function X({color} : ColorInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke={color?? '#FCFCFC'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_5_109)"
      >
        <path d="M18.75 5.25l-13.5 13.5M18.75 18.75L5.25 5.25"></path>
      </g>
      <defs>
        <clipPath id="clip0_5_109">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default X;
