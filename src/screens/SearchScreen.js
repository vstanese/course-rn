import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import v3 from "../api/v3";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await v3.get("/search", {
      params: {
        limit: 50,
        term,
        location: "NYC",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
