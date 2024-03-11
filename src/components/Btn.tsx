import React from "react";
import { Pressable, StyleSheet, View, Text, Dimensions } from "react-native";

type Props = {
  btnText: string;
  onPress: () => void;
};
const windowWidth = Dimensions.get("window").width;
const Btn = ({ btnText, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>{btnText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: windowWidth * 0.9,
    backgroundColor: "#5DB075",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  heading: {
    fontSize: 20,
    color: "white",
  },

  container: {
    width: "100%",
    alignItems: "center",
  },
});

export default Btn;
