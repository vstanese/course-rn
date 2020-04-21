import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Image Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default ImageScreen;
