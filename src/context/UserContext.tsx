import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { useState } from "react";
import { Users } from "../data/Users";

type PaymentMethodType = {
  nameOfCard: string;
  hexCode: string;
  date: string;
  cvv: string;
};

type DeliveryAdressType = {
  street: string;
  apartment: string;
  city: string;
  country: string;
};

type UserType = {
  name: string;
  email: string;
  password: string;
  paymentMethod?: PaymentMethodType;
  deliveryAdress?: DeliveryAdressType;
  deliveryOpptions?: string;
  nonContactDelivery?: boolean;
  favorites?: any[];
  cart?: any[];
  changeCard?: (
    email: string,
    hexCode: string,
    date: string,
    cvv: string
  ) => any;
  changeAddress?: (
    email: string,
    street: string,
    apartment: string,
    city: string,
    country: string
  ) => any;
};

type UserContextType = {
  user: UserType;
  changeCard: (
    email: string,
    hexCode: string,
    date: string,
    cvv: string
  ) => any;
  changeAddress: (
    email: string,
    street: string,
    apartment: string,
    city: string,
    country: string
  ) => any;
};

export const UserContext = createContext<UserContextType>({
  user: {
    name: "Aykhan",
    email: "z",
    password: "z",
    paymentMethod: {
      nameOfCard: "Leo card",
      hexCode: "1234567812345678",
      date: "27/02",
      cvv: "999",
    },
    deliveryAdress: {
      street: "Nizami 14",
      apartment: "117",
      city: "Baku",
      country: "Azerbaijan",
    },
    deliveryOpptions: "I'll pick it up by myself",
    nonContactDelivery: false,
    favorites: [],
    cart: [],
  },
  changeCard: (email: string, hexCode: string, date: string, cvv: string) => {},
  changeAddress: (
    email: string,
    street: string,
    apartment: string,
    city: string,
    country: string
  ) => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const userData = useAuth();
  const user = userData.getUser(userData.email, userData.password);

  const [hexCode, setHexCode] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const changeCard = (
    email: string,
    hexCode: string,
    date: string,
    cvv: string
  ) => {
    user.paymentMethod.hexCode = hexCode;
    user.paymentMethod.date = date;
    user.paymentMethod.cvv = cvv;

    setHexCode(hexCode);
    setDate(date);
    setCvv(cvv);

    let index = null;
    Users.forEach((u, i) =>
      u.email == user.email && u.password == user.password
        ? (index = i)
        : (index = null)
    );

    if (index != null) Users[index] = user;
  };
  const changeAddress = (
    email: string,
    street: string,
    apartment: string,
    city: string,
    country: string
  ) => {
    user.deliveryAdress.street = street;
    user.deliveryAdress.apartment = apartment;
    user.deliveryAdress.city = city;
    user.deliveryAdress.country = country;

    setApartment(apartment);
    setStreet(street);
    setCity(city);
    setCountry(country);

    let index = null;
    Users.forEach((u, i) =>
      u.email == user.email && u.password == user.password
        ? (index = i)
        : (index = null)
    );
    console.log(index);
    console.log(Users);
    if (index != null) Users[index] = user;
  };

  const contextValue = { user, changeCard, changeAddress };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
