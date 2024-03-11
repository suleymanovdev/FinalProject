import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";

type Props = {
  onSearch: () => void;
  word: string;
};
const windowWidth = Dimensions.get("window").width;

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const onSearcHandle = () => {
    alert(searchWord);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onSearcHandle}>
        <View style={styles.iconContainer}>
          <SearchIcon />
        </View>
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={setSearchWord}
      ></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#FFFF",
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderRadius: 30,
    width: windowWidth * 0.9,
    height: 40,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 20,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
    color: "gray",
  },
  iconContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
