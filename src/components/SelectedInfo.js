import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { colors } from "../themes";

const SelectedInfo = ({ selected, onButtonPress }) => {
  const { forks, full_name, score } = selected;
  return (
    <View style={style.infoBlock}>
      <Text style={style.title}>Details: </Text>

      <Text>Score: {score}</Text>
      {forks && <Text>Forks: {forks}</Text>}
      {full_name && <Text> Full Name: {full_name}</Text>}

      <TouchableOpacity onPress={onButtonPress} style={style.button}>
        <Text>Hide</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  infoBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    paddingVertical: 5,
    color: colors.white,
    fontWeight: "600",
  },
  button: {
    marginTop: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SelectedInfo;
