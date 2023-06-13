import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const BackgroundSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={414}
    height={1019}
    fill="none"
    {...props}
  >
    <Path fill="#233155" d="M0-7h415v1026H0z" />
    <Path fill="url(#a)" d="M0-7h414v1026H0z" />
    <Path fill="url(#b)" fillOpacity={0.2} d="M0-7h414v1026H0z" />
    <Path fill="url(#c)" fillOpacity={0.1} d="M0-7h414v1026H0z" />
    <Path fill="#000" fillOpacity={0.1} d="M0-7h414v1026H0z" />
    <Path fill="url(#d)" d="M0 118.918h414V1019H0z" />
    <Path fill="url(#e)" fillOpacity={0.5} d="M0 118.918h414V1019H0z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={-93.5}
        x2={1181.1}
        y1={1875.54}
        y2={903.693}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={0.399} stopColor="#364476" stopOpacity={0.68} />
        <Stop offset={0.578} stopColor="#2B5BA3" stopOpacity={0.665} />
        <Stop offset={1} stopColor="#5DBDE7" stopOpacity={0.35} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={235.5}
        x2={-249.076}
        y1={329.402}
        y2={609.804}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1F3F6C" />
        <Stop offset={1} stopColor="#23475E" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={338}
        x2={-131.741}
        y1={86.47}
        y2={794.153}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2373A0" />
        <Stop offset={1} stopColor="#093A59" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={135}
        x2={135}
        y1={993.512}
        y2={118.918}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#10315B" />
        <Stop offset={1} stopColor="#10315B" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={286.5}
        x2={291.745}
        y1={1019}
        y2={118.925}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BackgroundSvg;
