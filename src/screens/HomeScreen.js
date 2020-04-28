import React from "react";
import { View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Button
        onPress={() => navigation.navigate("CreateColor")}
        title="Color Game"
      />
      <Button
        onPress={() => navigation.navigate("UseReducerCreateColor")}
        title="Color Game Reducer"
      />
      <Button
        onPress={() => navigation.navigate("CreateColorMagda")}
        title="Modificare Magda"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
