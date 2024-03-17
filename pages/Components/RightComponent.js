import React from "react";
import { SplitVertical } from "./SplitScreenVertical";

export const Right = ({ children }) => {
  const modifiedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { key: index });
  });

  return (
    <SplitVertical topHeight="20%" middleHight="60%" bottoHeight="20%">
      {modifiedChildren}
    </SplitVertical>
  );
};
