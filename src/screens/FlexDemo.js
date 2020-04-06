import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexDemo = () => (
  <View style={styles.container}>
    <View style={styles.box1}>
      <Text style={styles.text}>1</Text>
    </View>
    <View style={boxes.box2}>
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
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "row",
    backgroundColor: "yellow",
  },
  box1: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box3: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  text: {
    color: "#FFF",
    fontSize: 80,
  },
});

const boxes = StyleSheet.create({
  box2: {
    // flex: 3,
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

const wrapper = StyleSheet.compose(styles.container, boxes.box2);

export default FlexDemo;
