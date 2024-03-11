import React from "react";
import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import FavoriteIcon from "../icons/FavoriteIcon";
import FavoriteIconActive from "../icons/FavoriteIconActive";

type Props = {
  isBig: boolean;
};

const FavoriteBtn = ({ isBig }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Pressable style={styles.btn} onPress={() => setIsActive((prev) => !prev)}>
      {isBig === true ? (
        <View
          style={isActive ? styles.containerActiveBig : styles.containerBig}
        >
          {isActive ? (
            <FavoriteIconActive style={styles.favoriteIcon} />
          ) : (
            <FavoriteIcon style={styles.favoriteIcon} />
          )}
        </View>
      ) : (
        <View style={isActive ? styles.containerActive : styles.container}>
          {isActive ? (
            <FavoriteIconActive style={styles.favoriteIcon} />
          ) : (
            <FavoriteIcon style={styles.favoriteIcon} />
          )}
        </View>
      )}
    </Pressable>
  );
};

export default FavoriteBtn;

const styles = StyleSheet.create({
  btn: {
    width: 45,
  },
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#ffffff",
    width: 45,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteIcon: {
    color: "D9D0E3",
    width: 22,
    height: 20,
  },
  containerActive: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#feedee",
    width: 45,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBig: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#ffffff",
    width: 80,
    height: 50,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerActiveBig: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#feedee",
    width: 80,
    height: 50,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
