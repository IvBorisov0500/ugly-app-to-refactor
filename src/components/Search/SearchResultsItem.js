import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../themes';

const SearchResultsItem = ({ onPress, item }) => (
  <View style={style.result}>
    {item.name && <Text styles={style.resultName}>{item.name}</Text>}
    <TouchableOpacity onPress={() => onPress(item)}>
      <Text style={style.itemUrl}>{item.url}</Text>
    </TouchableOpacity>
  </View>
);

const style = StyleSheet.create({
  itemUrl: {
    textDecorationLine: 'underline',
    color: colors.white,
  },
  result: {
    backgroundColor: colors.transparent,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: 30,
  },
  resultName: {
    color: colors.white
  },
});

export default SearchResultsItem;
