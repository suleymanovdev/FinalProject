import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Categories from "../screens/Categories";
import CategoriesNav from "./CategoriesNavigation";
import CategoriesIcon from "../icons/CategoriesIcon";
import CartIcon from "../icons/CartIcon";
import ProfileIcon from "../icons/ProfileIcon";
import ProfileNav from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <CategoriesIcon color={focused ? "#7203FF" : "#9586A8"} />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="CategoriesNav"
        component={CategoriesNav}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <CartIcon color={focused ? "#7203FF" : "#9586A8"} />
          ),
          tabBarShowLabel: false,
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ProfileIcon color={focused ? "#7203FF" : "#9586A8"} />
          ),
          tabBarShowLabel: false,
        }}
        name="ProfileNav"
        component={ProfileNav}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
