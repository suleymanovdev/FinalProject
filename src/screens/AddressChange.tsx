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

const AddressChange = ({ navigation }: Props) => {
  const user = useUser();
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Title title="Street" />
        <InputField
          placeholder="Lutfi Zade 54"
          data={street}
          setData={setStreet}
        />
        <Title title="Apartment" />
        <InputField placeholder="10" data={apartment} setData={setApartment} />
        <Title title="City" />
        <InputField placeholder="Baku" data={city} setData={setCity} />
        <Title title="Country" />
        <InputField
          placeholder="Azerbaijan"
          data={country}
          setData={setCountry}
        />
        <Btn
          btnText="Use this address"
          onPress={() => {
            user.changeAddress(
              user.user.email,
              street,
              apartment,
              city,
              country
            );
            navigation.navigate("Profile");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddressChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignSelf: "center",
    width: windowWidth * 0.9,
  },
});
