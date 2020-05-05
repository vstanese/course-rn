import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import v3 from "../api/v3"
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [results, errorMsg, searchApi] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    })
  }

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>{term}</Text>
      <Text>We have found: {results.length} results</Text>
      <ScrollView>
        <ResultsList title="$" navigation={navigation} results={filterResultsByPrice("$")} />
        <ResultsList title="$$" navigation={navigation} results={filterResultsByPrice("$$")} />
        <ResultsList title="$$$" navigation={navigation} results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
