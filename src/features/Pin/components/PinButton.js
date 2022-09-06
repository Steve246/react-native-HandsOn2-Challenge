import { useTheme } from "../../../shared/context/ThemeContext";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PinButton = ({ text, onPress }) => {
  const theme = useTheme();
  const styles = styling(theme);

  const renderButton = () => {
    return (
      <TouchableOpacity>
        <View styles={styles.circleButton}>
          <Text styles={[theme.text.subtitle2]}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <>{renderButton()}</>;
};

const styling = (theme) =>
  StyleSheet.create({
    circleButton: {
      width: 64,
      height: 64,
      borderRadius: 32,
      borderColor: theme.color.foreground,
      borderWidth: 2,
      alignItems: "center",
      justifyCOntent: "center",
      margin: theme.spacing.s,
    },
  });

export default PinButton;
