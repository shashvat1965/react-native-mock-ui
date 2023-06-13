import * as React from "react";
import Svg, { G, Path, Line, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={126}
    height={187}
    viewBox="0 0 126 187"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_10_450)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8C0 3.58172 3.58172 0 8 0H118C122.418 0 126 3.58172 126 8V126.174C123.133 126.851 121 129.426 121 132.5C121 135.574 123.133 138.149 126 138.826V179C126 183.418 122.418 187 118 187H8C3.58172 187 0 183.418 0 179V139.981C3.35622 139.726 6 136.922 6 133.5C6 130.078 3.35622 127.274 0 127.019V8Z"
        fill="#4476AD"
      />
    </G>
    <Line
      x1={8.99609}
      y1={133.75}
      x2={118.001}
      y2={133.75}
      stroke="#8599CB"
      strokeWidth={0.5}
      strokeDasharray="3 3"
    />
    <Defs></Defs>
  </Svg>
);
export default SVGComponent;
