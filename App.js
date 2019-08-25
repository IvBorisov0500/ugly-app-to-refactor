import React from "react";
import axios from "axios";
import { View, StyleSheet } from "react-native";

import { defaultSelectedType, searchUrl } from "./src/constants";

import Header from "./src/components/Header";
import SearchBlock from "./src/components/Search/SearchBlock";
import SearchTypePicker from "./src/components/Search/SearchTypePicker";
import SelectedInfo from "./src/components/SelectedInfo";
import SearchResults from "./src/components/Search/SearchResults";

import { colors } from "./src/themes";

class App extends React.Component {
  state = {
    searchBy: defaultSelectedType,
    results: null,
    selected: null,
  };

  search = (searchBy, text) => axios.get(`${searchUrl}/${searchBy}?q=${text}`);

  onChangeText = text =>
    this.search(this.state.searchBy, text)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log({ err }));

  onPickerValueChange = itemValue => this.setState({ searchBy: itemValue });

  onResultPress = item => this.setState({ selected: item });

  onButtonPress = () => this.setState({ selected: null });

  renderSearchResults = () => {
    const { results, selected } = this.state;
    const isItemSelected = Object.keys(selected || {}).length > 0;

    return isItemSelected ? (
      <SelectedInfo selected={selected} onButtonPress={this.onButtonPress} />
    ) : (
      <SearchResults results={results || []} onPress={this.onResultPress} />
    );
  };

  render() {
    const { searchBy } = this.state;

    return (
      <View style={styles.container}>
        <Header />
        <SearchBlock onChangeText={this.onChangeText} />
        <SearchTypePicker
          searchBy={searchBy}
          onPickerValueChange={this.onPickerValueChange}
        />
        {this.renderSearchResults()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.orange,
  },
});

export default App;
