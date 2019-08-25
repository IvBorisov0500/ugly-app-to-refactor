import React from "react";
import { StyleSheet, Picker } from 'react-native';
import { pickerItems } from "../../constants";

const SearchTypePicker = ({ searchBy, onPickerValueChange }) => (
  <Picker
    selectedValue={searchBy}
    style={style.picker}
    onValueChange={onPickerValueChange}
  >
    {pickerItems.map(item => (
      <Picker.Item color="white" label={item} value={item} key={item} />
    ))}
  </Picker>
);

const style = StyleSheet.create({
  picker: {
    minHeight: 150,
    minWidth: '80%',
    alignSelf: 'center',
  },
});

export default SearchTypePicker;
