import { useTheme } from "../hook/UseDependency";
import React from "react";

const Spinner = ({ text = "please-wait" }) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>{text}</View>
    </View>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "rgba(0,0,0, 0.5)",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing.s,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zindex: 100,
    },

    loadingContainer: {
      backgroundColor: theme.colors.white,
      padding: theme.spacing.s,
      borderRadius: theme.radius.m,
    },
  });

export default Spinner;
