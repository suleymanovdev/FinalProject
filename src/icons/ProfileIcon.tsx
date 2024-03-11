import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export type IconProps = {
  color: string;
  props?: SvgProps;
};

const ProfileIcon = ({ color, props }: IconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={color}
      fillOpacity={0.5}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
);
export default ProfileIcon;
