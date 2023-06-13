import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const BottomGradient = (props) => (
  <Svg
    width={393}
    height={428}
    viewBox="0 0 393 428"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 12C0 5.37258 5.37258 0 12 0H414V428H12C5.37258 428 0 422.627 0 416V12Z"
      fill="url(#paint0_linear_7_101)"
    />
    <Path
      d="M0 12C0 5.37258 5.37258 0 12 0H414V428H12C5.37258 428 0 422.627 0 416V12Z"
      fill="url(#paint1_linear_7_101)"
      fillOpacity={0.2}
    />
    <Path
      d="M0 12C0 5.37258 5.37258 0 12 0H414V428H12C5.37258 428 0 422.627 0 416V12Z"
      fill="url(#paint2_linear_7_101)"
      fillOpacity={0.1}
    />
    <Path
      d="M0 12C0 5.37258 5.37258 0 12 0H414V428H12C5.37258 428 0 422.627 0 416V12Z"
      fill="black"
      fillOpacity={0.1}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7_101"
        x1={-93.5}
        y1={788.309}
        x2={370.833}
        y2={-60.4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={0.398843} stopColor="#364476" stopOpacity={0.68} />
        <Stop offset={0.577601} stopColor="#2B5BA3" stopOpacity={0.664844} />
        <Stop offset={1} stopColor="#5DBDE7" stopOpacity={0.35} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_7_101"
        x1={235.5}
        y1={143.332}
        x2={14.2982}
        y2={450.171}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1F3F6C" />
        <Stop offset={1} stopColor="#23475E" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_7_101"
        x1={338}
        y1={41.9915}
        x2={228.627}
        y2={436.988}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2373A0" />
        <Stop offset={1} stopColor="#093A59" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BottomGradient;
