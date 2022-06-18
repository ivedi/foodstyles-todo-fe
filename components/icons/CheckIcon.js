import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props) => (
  <Svg width={40} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path fill="#4A4AE5" d="m.138 15.75 8.08-8.071 8.226 8.215-8.08 8.07z" />
      <Path fill="#4A77E5" d="m31.83.175 8.08 8.07-23.666 23.637-8.08-8.07z" />
    </G>
  </Svg>
)

export default SvgComponent

