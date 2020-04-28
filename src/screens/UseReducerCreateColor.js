import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import UseReducerColorSample from "./UseReducerColorSample";

const COLOR_INCREMENT = 15;

const processColor = (state, howToModify) => {
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

const UseReducerCreateColor = () => {
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
      <UseReducerColorSample
        title="Red"
        onIncrement={() =>
          setColor({ color: "red", incrementDecrement: "increment" })
        }
        onDecrement={() =>
          setColor({ color: "red", incrementDecrement: "decrement" })
        }
        msgHandler={(msg) => handleMsg(msg)}
      />
      <UseReducerColorSample
        title="Green"
        onIncrement={() =>
          setColor({ color: "green", incrementDecrement: "increment" })
        }
        onDecrement={() =>
          setColor({ color: "green", incrementDecrement: "decrement" })
        }
        msgHandler={(msg) => handleMsg(msg)}
      />
      <UseReducerColorSample
        title="Blue"
        onIncrement={() =>
          setColor({ color: "blue", incrementDecrement: "increment" })
        }
        onDecrement={() =>
          setColor({ color: "blue", incrementDecrement: "decrement" })
        }
        msgHandler={(msg) => handleMsg(msg)}
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
export default UseReducerCreateColor;
