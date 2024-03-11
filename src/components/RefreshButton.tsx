import React, { useState } from "react";
import {
  Text,
  Pressable,
  Animated,
  Easing,
  StyleSheet,
} from "react-native";

type Props = {
  refresh: () => void;
};

const RefreshButton = ({ refresh }: Props) => {
  const [rotation] = useState(new Animated.Value(0));

  const startRotationAnimation = () => {
    refresh();
    Animated.timing(rotation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      rotation.setValue(0);
    });
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Pressable onPress={startRotationAnimation}>
      <Animated.View
        style={[styles.buttonContainer, { transform: [{ rotate }] }]}
      >
        <Text style={styles.buttonText}>↻</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "gray",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 40,
  },
});

export default RefreshButton;
