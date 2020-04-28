import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorSample from "./ColorSample";

const CreateColor = () => {
  const COLOR_INCREMENT = 15;

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleMsg = (msg) => {
    console.log("msg", msg);
  };

  return (
    <View>
      <ColorSample
        title="Red"
        onIncrement={() => setRed(red + COLOR_INCREMENT)}
        onDecrement={() => setRed(red - COLOR_INCREMENT)}
        msgHandler={(msg) => handleMsg(msg)}
      />
      <ColorSample
        title="Green"
        onIncrement={() => setGreen(green + COLOR_INCREMENT)}
        onDecrement={() => setGreen(green - COLOR_INCREMENT)}
        msgHandler={(msg) => handleMsg(msg)}
      />
      <ColorSample
        title="Blue"
        onIncrement={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrement={() => setBlue(blue - COLOR_INCREMENT)}
        msgHandler={(msg) => handleMsg(msg)}
      />
      <View
        style={{
          marginTop: 10,
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CreateColor;
