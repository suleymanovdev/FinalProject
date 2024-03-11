import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { SafeAreaView } from "react-native-safe-area-context";
import DIcon from "../icons/DIcon";
import Btn from "../components/Btn";
import BoxIcon from "../icons/BoxIcon";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Home({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../images/HomeBG.jpeg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <DIcon />
        </View>

        <View style={styles.whiteContainer}>
          <BoxIcon />
          <Text style={styles.textTitle}>Non-Contact Deliveries</Text>
          <Text style={styles.text}>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
          <Btn
            btnText="Order now"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#9586A8",
    flexWrap: "wrap",
    textAlign: "center",
    fontSize: 17,
    width: windowWidth * 0.9,
    paddingVertical: 10,
  },
  textTitle: {
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center",
    fontSize: 34,
    width: windowWidth * 0.9,
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  whiteContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "100%",
    height: windowHeight / 3,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
