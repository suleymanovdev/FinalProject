import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export type IconProps = {
  color: string;
  props?: SvgProps;
};

const CategoriesIcon = ({ color, props }: IconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={color}
      fillOpacity={0.5}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 21H3v-7h7v7ZM21 21h-7v-7h7v7ZM21 10h-7V3h7v7ZM10 10H3V3h7v7Z"
    />
  </Svg>
);
export default CategoriesIcon;
