import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    width: 380,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
});
