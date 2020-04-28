import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorSampleMagda from "./ColorSampleMagda";

const COLOR_INCREMENT = 15;

const processColor = (state, howToModify) => {
  console.log();
  switch (howToModify.color) {
    case "red":
      return howToModify.incrementDecrement === "increment"
        ? { ...state, red: state.red + COLOR_INCREMENT }
        : { ...state, red: state.red - COLOR_INCREMENT };
    case "green":
      return howToModify.incrementDecrement === "increment"
        ? { ...state, green: state.green + COLOR_INCREMENT }
        : { ...state, green: state.green - COLOR_INCREMENT };
    case "blue":
      return howToModify.incrementDecrement === "increment"
        ? { ...state, blue: state.blue + COLOR_INCREMENT }
        : { ...state, blue: state.blue - COLOR_INCREMENT };
    default:
      return state;
  }
};

const CreateColorMagda = () => {
  const [color, setColor] = useReducer(processColor, {
    //how to handle business logic
    red: 0,
    green: 0,
    blue: 0,
  });

  const handleMsg = (msg) => {
    console.log("msg", msg);
  };

  return (
    <View>
      <ColorSampleMagda
        title="red"
        setColors={(propsTomodify) => setColor(propsTomodify)}
      />
      <ColorSampleMagda
        title="green"
        setColors={(propsTomodify) => setColor(propsTomodify)}
      />
      <ColorSampleMagda
        title="blue"
        setColors={(propsTomodify) => setColor(propsTomodify)}
      />
      <View
        style={{
          marginTop: 10,
          height: 100,
          width: 100,
          backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CreateColorMagda;
