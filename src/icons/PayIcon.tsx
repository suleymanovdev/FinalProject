import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PayIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#2D0C57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM1 10h22"
    />
  </Svg>
);
export default PayIcon;
