import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../../themes";

const SearchBlock = ({ onChangeText }) => (
  <View style={style.searchBlock}>
    <Text style={style.searchTitle}>Search some repositories</Text>
    <TextInput
      autoFocus
      style={style.repositoriesInput}
      onChangeText={onChangeText}
      selectionColor={colors.white}
    />
  </View>
);

const style = StyleSheet.create({
  searchBlock: {
    alignItems: "center"
  },
  searchTitle: {
    color: colors.white
  },
  repositoriesInput: {
    borderColor: colors.black,
    borderBottomWidth: 2,
    color: colors.white,
    fontSize: 16,
    minWidth: '80%',
    padding: 4,
  },
});

export default SearchBlock;
