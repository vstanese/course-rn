import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "pink",
  },
  title: {
    // margin: 50,
    // padding: 20,
    borderWidth: 10,
    borderColor: "#000",
    borderRadius: 6,
    backgroundColor: "#fff000",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;
