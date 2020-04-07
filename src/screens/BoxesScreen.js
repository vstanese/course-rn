import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxesScreen = () => (
  <View style={styles.container}>
    <View style={styles.box1}>
      <Text style={styles.text}>1</Text>
    </View>
    <View style={styles.box2}>
      <Text style={styles.text}>2</Text>
    </View>
    <View style={styles.box3}>
      <Text style={styles.text}>3</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    position: "absolute",
    left: 200,
    top: 200,
    width: 100,
    height: 100,
    backgroundColor: "red",
    zIndex: 2,
  },
  box2: {
    position: "relative",
    top: 200,
    left: 150,
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  box3: {
    position: "absolute",
    top: 0,
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  text: {
    color: "#FFF",
    fontSize: 80,
  },
});

export default BoxesScreen;
