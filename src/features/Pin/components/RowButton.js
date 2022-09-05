import React from "react";
import { View } from "react-native";

const RowButton = ({ children }) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);

export default RowButton;
