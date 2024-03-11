import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";

type Props = {
  noContactDelivery: boolean;
  setNoContactDelivery: () => void;
};
const RadioBtn = ({ noContactDelivery }: Props) => {
  const [isSelected, setIsSelected] = useState(noContactDelivery);
  const spinValue = new Animated.Value(0);

  const startSpin = () => {
    const toValue = isSelected ? 0 : 1;
    Animated.timing(spinValue, {
      toValue,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => setIsSelected(!isSelected));
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  console.log(noContactDelivery);
  return (
    <TouchableOpacity onPress={startSpin}>
      <View
        style={[
          styles.radioButton,
          isSelected ? styles.selected : styles.unselected,
        ]}
      >
        <Text style={styles.buttonText}>{isSelected ? "Yes" : "No"}</Text>
        <Animated.View
          style={[styles.circle, { transform: [{ rotate: spin }] }]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    width: 75,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  selected: {
    backgroundColor: "#E2CBFF",
  },
  unselected: {
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    color: "#6C0EE4",
    marginRight: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#6C0EE4",
  },
});

export default RadioBtn;
