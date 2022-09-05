import React from "react";

function UserCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g
        stroke="#6C6C6C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_5_19)"
      >
        <path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"></path>
        <path d="M16 20a5 5 0 100-10 5 5 0 000 10zM7.975 24.925a9 9 0 0116.05 0"></path>
      </g>
      <defs>
        <clipPath id="clip0_5_19">
          <path fill="#fff" d="M0 0H32V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default UserCircle;