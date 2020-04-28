import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const ColorSampleMagda = ({ title, msgHandler, setColors }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button
        title={"Increment " + title}
        onPress={() => {
          setColors({ color: title, incrementDecrement: "increment" });
        }}
      ></Button>
      <Button
        title={"Decrement " + title}
        onPress={() => {
          setColors({ color: title, incrementDecrement: "decrement" });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ColorSampleMagda;
