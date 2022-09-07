import React from "react";

interface SVGInterface{
  color?: string;
}

function SquaresFour({color} : SVGInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g
        stroke={color??"silver"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_20_342)"
      >
        <path d="M14 6H6v8h8V6zM26 6h-8v8h8V6zM14 18H6v8h8v-8zM26 18h-8v8h8v-8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_20_342">
          <path fill="#fff" d="M0 0H32V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SquaresFour;