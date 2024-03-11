import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const BoxIcon = (props: SvgProps) => (
  <Svg width={104} height={104} fill="none" {...props}>
    <Circle cx={52} cy={52} r={52} fill="#fff" />
    <Path
      fill="#2D0C57"
      d="m55.22 52.315-1.792 1.038V72l16.14-9.32V44.034L55.22 52.315ZM58.141 35.593 51.934 32l-16.59 9.577 6.216 3.593 16.581-9.577ZM68.515 41.577l-7.154-4.075-16.58 9.577.945.49 6.208 3.584 6.174-3.56 10.407-6.016ZM43.527 53.934l-2.97-1.527V47.66l-6.125-3.527v18.514L50.456 71.9V53.386l-6.929-3.992v4.54Z"
    />
  </Svg>
);
export default BoxIcon;
