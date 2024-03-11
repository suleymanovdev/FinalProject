import React from "react";
import { BackHandler, Pressable, View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Products from "../screens/Products";
import Product from "../screens/Product";
import BottomTabs from "./TabsNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

export type RootStackParams = {
  Home: any;
  Login: any;
  SignUp: any;
  Categories: any;
  Products: any;
  Product: any;
  Profile: any;
  AddressChange: any;
  Tabs: any;
  CardChange: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <RootStack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <RootStack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUp}
        />
        <RootStack.Screen
          options={{
            header: () => {
              return <View></View>;
            },
          }}
          name="Tabs"
          component={BottomTabs}
        />
      </RootStack.Navigator>
    </SafeAreaView>
  );
};

export default RootNavigation;
