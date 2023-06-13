import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RightArrowSvg = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.52051 14.321L12.3249 10.4321C12.5584 10.1935 12.5584 9.80654 12.3249 9.5679L8.52051 5.67898C8.28706 5.44034 7.90855 5.44034 7.67509 5.67898C7.44164 5.91763 7.44164 6.30454 7.67509 6.54319L11.0568 10L7.67509 13.4568C7.44164 13.6955 7.44164 14.0824 7.67509 14.321C7.90855 14.5597 8.28706 14.5597 8.52051 14.321Z"
      fill="white"
    />
  </Svg>
);
export default RightArrowSvg;
