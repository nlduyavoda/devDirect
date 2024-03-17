import React from "react";

export const Each = ({ render, of }) => {
  return React.Children.toArray(of.map((item, index) => render(item, index)));
};
