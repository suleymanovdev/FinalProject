import RootNavigation from "./src/navigation/Index";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthContext";
import UserProvider from "./src/context/UserContext";
import CartProvider from "./src/context/CartContext";

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
}