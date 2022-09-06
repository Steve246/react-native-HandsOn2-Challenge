import { Animated, StyleSheet, Text } from "react-native";
import { useEffect, useRef } from "react";

const SnackBar = ({ message = "" }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
  });

  useEffect(() => {
    const autoClose = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 3000);
    return () => {
      clearTimeout(autoClose);
    };
  });

  return (
    <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
      <Text style={{ fontSize: 14 }}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    alignSelf: "stretch",
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
  },
});

export default SnackBar;
