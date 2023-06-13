import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CopySvg = (props) => (
  <Svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 21C0 9.40202 9.40202 0 21 0V0C32.598 0 42 9.40202 42 21V21C42 32.598 32.598 42 21 42V42C9.40202 42 0 32.598 0 21V21Z"
      fill="#0B2249"
    />
    <Path
      d="M18.4375 12.9791C15.4603 12.9791 13.0469 15.339 13.0469 18.25V24.7646C13.0469 25.1443 13.3617 25.4521 13.75 25.4521C14.1383 25.4521 14.4531 25.1443 14.4531 24.7646V18.25C14.4531 16.0983 16.237 14.3541 18.4375 14.3541H25.0121C25.4004 14.3541 25.7152 14.0463 25.7152 13.6666C25.7152 13.2869 25.4004 12.9791 25.0121 12.9791H18.4375Z"
      fill="#B1E3FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.2524 16.2271C24.214 15.8951 21.0985 15.8951 18.0601 16.2271C17.1946 16.3217 16.499 16.9878 16.397 17.8406C16.0366 20.8533 16.0366 23.8967 16.397 26.9093C16.499 27.7622 17.1946 28.4282 18.0601 28.5228C21.0985 28.8548 24.214 28.8548 27.2524 28.5228C28.118 28.4282 28.8135 27.7622 28.9156 26.9093C29.2759 23.8967 29.2759 20.8533 28.9156 17.8406C28.8135 16.9877 28.118 16.3217 27.2524 16.2271ZM18.2163 17.5936C21.1509 17.2729 24.1616 17.2729 27.0962 17.5936C27.3187 17.6179 27.4937 17.79 27.5188 18.0004C27.8665 20.9069 27.8665 23.8431 27.5188 26.7495C27.4937 26.9599 27.3187 27.132 27.0962 27.1563C24.1616 27.477 21.1509 27.477 18.2163 27.1563C17.9938 27.132 17.8189 26.9599 17.7937 26.7495C17.446 23.8431 17.446 20.9069 17.7937 18.0004C17.8189 17.79 17.9938 17.6179 18.2163 17.5936Z"
      fill="#B1E3FF"
    />
  </Svg>
);
export default CopySvg;