import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("ComponentScreen")}
        title="Go to demo components"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image components"
      />
      <Text style={styles.text}>Touchable</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
        <Text>Go to Lists</Text>
        <Text>Go to Lists</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
