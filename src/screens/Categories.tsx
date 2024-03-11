import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../components/HeaderTitle";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { CategoriesLst } from "../data/Categories";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

const windowWidth = Dimensions.get("window").width;

export default function Categories({ navigation }: Props) {
  const data = CategoriesLst;
  function drawCards() {
    return CategoriesLst.map((card, i) => (
      <Card data={card} key={i} navigation={navigation} />
    ));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <HeaderTitle title={"Categories"} />
        <View style={styles.mainContainer}>
          <SearchBar />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {drawCards()}
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
  categoriesContainer: {
    width: windowWidth * 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 20,
  },
});
