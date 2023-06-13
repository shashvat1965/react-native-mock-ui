import * as React from "react";
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg";
import { StyleSheet, View } from "react-native";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CardSvg = (props) => (
  <Svg
    width={414}
    height={276}
    viewBox="0 0 414 276"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_di_30_669)">
      <G filter="url(#filter1_b_30_669)">
        <Rect x={17} y={76} width={379} height={175} rx={30} fill="#123562" />
        <Rect
          x={17}
          y={76}
          width={379}
          height={175}
          rx={30}
          fill="url(#paint0_linear_30_669)"
          fillOpacity={0.15}
        />
      </G>
      <Path
        d="M17 55C17 38.4315 30.4315 25 47 25H366C382.569 25 396 38.4315 396 55V159H17V55Z"
        fill="url(#paint1_linear_30_669)"
      />
    </G>
    <Path
      d="M17 158L396 159.011"
      stroke="url(#paint2_radial_30_669)"
      strokeWidth={2}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_30_669"
        x1={207}
        y1={262.761}
        x2={151.234}
        y2={68.4857}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#011430" />
        <Stop offset={0.910208} stopColor="#4F72A2" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_30_669"
        x1={206.5}
        y1={25}
        x2={206.5}
        y2={159}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#316195" />
        <Stop offset={1} stopColor="#244978" />
      </LinearGradient>
      <RadialGradient
        id="paint2_radial_30_669"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(206.499 159.005) rotate(90.1528) scale(0.5 189.501)"
      >
        <Stop stopColor="#DDDDDD" />
        <Stop offset={1} stopColor="white" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default CardSvg;
