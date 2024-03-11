import { useEffect, useState } from "react";
import {
  ScrollView,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import { useCart } from "../context/CartContext";
import { Users } from "../data/Users";
import ProductItem from "../components/ProductItem";
import RefreshButton from "../components/RefreshButton";

const windowWidth = Dimensions.get("window").width;

const Cart = () => {
  const [ifPressed, setIfPressed] = useState(false);
  let cart = useCart();
  const email = cart.cartObj.email;

  const showProducts = (c: any, n: number) => {
    return c.map((p: any, n: number) => (
      <ProductItem showBtns={false} product={p} key={n} />
    ));
  };
  const showUserProducts = () => {
    return Users.map((u: any, i: number) => {
      if (u.email == email) {
        return showProducts(u.cart, i);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.refreshContainer}>
        <RefreshButton refresh={() => setIfPressed((prev) => !prev)} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productsContainer}
      >
        {ifPressed ? showUserProducts() : <>{setIfPressed(!ifPressed)}</>}
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F6F5F5",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer: {
    paddingVertical: 15,
    width: windowWidth * 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 20,
  },
  refreshContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
