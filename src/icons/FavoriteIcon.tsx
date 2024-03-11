import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const FavoriteIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#9586A8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.367 2.842a4.583 4.583 0 0 0-6.484 0L10 3.725l-.883-.883a4.584 4.584 0 1 0-6.484 6.483l.884.883L10 16.692l6.483-6.484.884-.883a4.584 4.584 0 0 0 0-6.483v0Z"
    />
  </Svg>
);
export default FavoriteIcon;
