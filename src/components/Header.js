import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const Header = () => (
  <View style={style.view}>
    <Text style={style.title}>Best Git Repo searcher</Text>
  </View>
);

const style = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Header;
