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
import FavoriteBtn from "./FavoriteBtn";
import BasketBtn from "./BasketBtn";

const windowWidth = Dimensions.get("window").width;

type ProductProps = {
  title: string;
  price: number;
  country: string;
  isPiece: boolean;
  description: string;
  isFavorite: boolean;
  isInCart: boolean;
  img: ImageSourcePropType;
};
type Props = {
  product: ProductProps;
  navigation?: StackNavigationProp<RootStackParams, "Login">;
  showBtns: boolean;
};

const ProductItem = ({ product, showBtns, navigation }: Props) => {
  return (
    <Pressable
      onPress={() =>
        navigation?.navigate("Product", {
          product: product,
        })
      }
    >
      <View style={{ flexDirection: "row", width: windowWidth * 0.5 }}>
        <ImageBackground
          source={product.img}
          borderRadius={15}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}></View>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.pieceOrKg}>
              € / {product.isPiece === true ? "piece" : "kg"}
            </Text>
          </View>
          {showBtns ? (
            <View style={styles.btnsContainer}>
              <FavoriteBtn isBig={false} />
              <BasketBtn product={product} hasTitle={false} />
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.5,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    height: 210,
    borderRadius: 15,
  },
  image: {
    alignItems: "center",
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderRadius: 15,
  },
  content: {
    width: windowWidth * 0.42,
    height: 210,
    paddingHorizontal: 10,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "500",
    fontSize: 22,
  },
  priceContainer: {
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  price: {
    color: "#2D0C57",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 5,
  },
  pieceOrKg: {
    color: "#9586A8",
    fontSize: 18,
  },
  btnsContainer: {
    flex: 1,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
