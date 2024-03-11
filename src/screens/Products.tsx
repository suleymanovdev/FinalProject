import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../components/HeaderTitle";
import SearchBar from "../components/SearchBar";
import ProductItem from "../components/ProductItem";

type Props = {
  route: any;
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

const windowWidth = Dimensions.get("window").width;

export default function Products({ navigation, route }: Props) {
  const { params } = route;
  const data = params.data.products;
  function drawProducts() {
    return data.map((product: any, i: number) => (
      <ProductItem
        showBtns={true}
        product={product}
        key={i}
        navigation={navigation}
      />
    ));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <HeaderTitle title={"Products"} />
        <View style={styles.mainContainer}>
          <SearchBar />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          >
            {drawProducts()}
          </ScrollView>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: windowWidth * 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 20,
  },
});
