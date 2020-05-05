import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import v3 from "../api/v3";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async () => {
    try {
      const response = await v3.get("/search", {
        params: {
          limit: 50,
          term,
          location: "NYC",
        },
      });
      setResults(response.data.businesses);
      setErrorMsg(null);
    } catch (e) {
      console.log(e);
      setErrorMsg("Smth went wrong");
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
