import * as React from "react";
import Svg, { Path } from "react-native-svg";

function VerifiedIcon({ size = 16 }) {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.527 16l-1.382-2.438-2.618-.61.255-2.819L0 8l1.782-2.133-.255-2.82 2.618-.609L5.527 0 8 1.105 10.473 0l1.381 2.438 2.619.61-.255 2.819L16 8l-1.782 2.133.255 2.82-2.619.609L10.473 16 8 14.895 5.527 16zm1.71-5.295L11.344 6.4l-1.018-1.105-3.09 3.238-1.564-1.6L4.655 8l2.581 2.705z"
        fill="#3897F0"
      />
    </Svg>
  );
}

export default VerifiedIcon;
