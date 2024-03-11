import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../screens/Products";
import Product from "../screens/Product";
import Categories from "../screens/Categories";
import { SafeAreaView } from "react-native-safe-area-context";

const CategoriesNavigation = createNativeStackNavigator();

function CategoriesNav() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CategoriesNavigation.Navigator>
        <CategoriesNavigation.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
          name="Categories"
          component={Categories}
        />
        <CategoriesNavigation.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
          name="Products"
          component={Products}
        />
        <CategoriesNavigation.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
          name="Product"
          component={Product}
        />
      </CategoriesNavigation.Navigator>
    </SafeAreaView>
  );
}

export default CategoriesNav;
