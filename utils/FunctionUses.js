import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
// Capitalize first Letter
function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
const splitAt = (index) => (x) => [x.slice(0, index), x.slice(index)];

// Check mobile device
function isMobileDevice() {
  const theme = useTheme();
  const isMobileXs = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  return isMobileXs;
}
const customCurrency = (valuePrice) => {
  if (valuePrice) {
    valuePrice = valuePrice.replace(/,/g, "");
    valuePrice = valuePrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return valuePrice;
  }
};

export { capitalize, splitAt, isMobileDevice, customCurrency };
