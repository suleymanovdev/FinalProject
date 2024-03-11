import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import InputField from "../components/InputField";
import React, { useState } from "react";
import Title from "../components/Title";
import Btn from "../components/Btn";
import { useUser } from "../context/UserContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

const windowWidth = Dimensions.get("window").width;

const CardChange = ({ navigation }: Props) => {
  const user = useUser();
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Title title="Card number" />
        <InputField
          placeholder="1234567812345678"
          data={cardNumber}
          setData={setCardNumber}
        />
        <Title title="Date" />
        <InputField placeholder="03/24" data={cardDate} setData={setCardDate} />
        <Title title="CVV" />
        <InputField placeholder="123" data={cardCVV} setData={setCardCVV} />
        <Btn
          btnText="Use this card"
          onPress={() => {
            user.changeCard(user.user.email, cardNumber, cardDate, cardCVV);
            navigation.navigate("Profile");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CardChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignSelf: "center",
    width: windowWidth * 0.9,
  },
});
