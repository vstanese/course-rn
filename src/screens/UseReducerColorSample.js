import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const UseReducerColorSample = ({
  title,
  onIncrement,
  onDecrement,
  msgHandler,
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button
        title={"Increment " + title}
        onPress={() => {
          onIncrement();
          msgHandler("Incremented " + title);
        }}
      ></Button>
      <Button
        title={"Decrement " + title}
        onPress={() => {
          onDecrement();
          msgHandler("Decremented " + title);
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});
export default UseReducerColorSample;
