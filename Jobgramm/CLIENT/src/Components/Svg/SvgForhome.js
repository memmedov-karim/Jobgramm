import React from "react";

export default function SvgForhome() {
  return (
    <div className="container">
      <svg
        style={{ height: "200px" }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="svg5"
        width="50%"
        height="50%"
        viewBox="0 0 542 542"
      >
        <defs>
          <linearGradient id="Lg" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0" stop-color="green" />
            <stop offset="0.8" stop-color="white" stop-opacity="0.05" />
          </linearGradient>
        </defs>
        <g
          id="g820"
          transform="translate(-658 -238)"
          fill="none"
          stroke="#707070"
          stroke-width="1"
        >
          
        </g>
        <circle
          id="Ellipse_3"
          data-name="Ellipse 3"
          stroke="url(#Lg)"
          cx="266"
          cy="278"
          r="220"
          fill="none"
          stroke-width="45"
          stroke-dasharray="251,1004"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0,266,278"
            to="360,266,278"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
