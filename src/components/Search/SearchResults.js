import React from "react";
import { ScrollView } from 'react-native';

import SearchResultsItem from "./SearchResultsItem";

const SearchResults = ({ results, onPress }) => (
  <ScrollView>
    {results.map(item => (
      <SearchResultsItem item={item} key={item.id} onPress={onPress} />
    ))}
  </ScrollView>
);

export default SearchResults;
