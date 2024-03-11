import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { ImageSourcePropType } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";

const windowWidth = Dimensions.get("window").width;

type CategoryProps = {
  title: string;
  img: ImageSourcePropType;
  quantity: number;
  products: any[];
};
type Props = {
  data: CategoryProps;
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

const Card = ({ data, navigation }: Props) => {
  return (
    <Pressable onPress={() => navigation.navigate("Products", { data: data })}>
      <ImageBackground
        source={data.img}
        borderTopLeftRadius={15}
        borderTopRightRadius={15}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}></View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.quantity}>({data.quantity})</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.42,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    alignItems: "center",
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  content: {
    width: windowWidth * 0.42,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    height: 60,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "500",
    fontSize: 18,
  },
  quantity: {
    color: "#9586A8",
    fontSize: 12,
  },
});
