import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

type Props = {
  title: string;
};

const HeaderTitle = ({ title }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
    color: "#2D0C57",
    marginTop: 50,
    marginStart: 20,
  },
});
