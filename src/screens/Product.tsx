import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteBtn from "../components/FavoriteBtn";
import BasketBtn from "../components/BasketBtn";

type Props = {
  route: any;
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Product({ route }: Props) {
  const { params } = route;
  const product = params.product;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={product.img}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.pieceOrKg}>
              € / {product.isPiece === true ? "piece" : "kg"}
            </Text>
          </View>
          <Text style={styles.greenText}>~ 150 gr / piece</Text>
          <Text style={styles.country}>{product.country}</Text>
          <Text style={styles.desciption}>{product.description}</Text>
          <View style={styles.btns}>
            <FavoriteBtn isBig={true} />
            <BasketBtn hasTitle={true} product={product} />
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
  },
  image: {
    height: windowHeight / 2,
    alignItems: "center",
  },
  whiteContainer: {
    marginTop: 290,
    height: windowHeight * 0.7,
    width: windowWidth,
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
    paddingTop: 40,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  priceContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  price: {
    color: "#2D0C57",
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 5,
  },
  pieceOrKg: {
    color: "#9586A8",
    fontSize: 22,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "bold",
    fontSize: 34,
  },
  greenText: {
    paddingBottom: 30,
    color: "#06BE77",
    fontWeight: "500",
    fontSize: 17,
  },
  country: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2D0C57",
  },
  desciption: {
    color: "#9586A8",
    flexWrap: "wrap",
    fontSize: 17,
    width: windowWidth * 0.9,
    paddingVertical: 10,
  },
  btns: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
