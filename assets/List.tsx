import React from "react";

interface SVGInterface{
  color?: string;
}

function List({color} : SVGInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <g
        stroke={color?? "#FCFCFC"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        clipPath="url(#clip0_5_7)"
      >
        <path d="M5.625 18h24.75M5.625 9h24.75M5.625 27h24.75"></path>
      </g>
      <defs>
        <clipPath id="clip0_5_7">
          <path fill="#FFF" d="M0 0H36V36H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default List;