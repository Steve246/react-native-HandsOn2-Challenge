import { useTheme } from "../../../shared/context/ThemeContext";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormButton from "../../../shared/components/FormButton";

const NumberItem = ({ button, onClick }) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <TouchableOpacity
      style={{ alignItems: "center" }}
      onPress={() => alert(`ini adalah ${button.buttonType}`)}
    >
      <View style={styles.circularMenu}>
        <Text>{button.buttonType}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styling = (theme) =>
  StyleSheet.create({
    circularMenu: {
      width: 64,
      height: 64,
      borderColor: "grey",
      borderWidth: 2,
      borderRadius: 32,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      margin: theme.spacing.s,
    },
  });

export default NumberItem;
